import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useSearchAppParams } from '../../hooks/useSearchParams';
import { httpClient } from '../../utils/reques';

const CustomRow = styled('div')(({ theme }) => ({
  border: '1px solid #e0e0e0',
}));

const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getParams, setParams } = useSearchAppParams();

  // Get module from URL params or default to 1
  let modul = getParams("module") ?? 1;

  const [columns, setColumns] = useState([
    {
      field: 'avatar',
      headerName: 'Student',
      width: 300,
      renderCell: (params) => (
        <div className="flex items-center space-x-4 border p-2 rounded-lg">
          <img className='w-12 h-12 rounded-full object-cover' src={params?.row?.avatar} alt={params.row.studentName} />
          <div>
            <span className="font-medium">{params?.row?.studentName} {params?.row?.studentSurname}</span>
          </div>
        </div>
      ),
    },
  ]);

  // Fetch data from the server
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data);
        
        // Build dynamic columns for lessons
        const lessonColumns = [];
        data.forEach(student => {
          student.attendanceList.forEach((lesson) => {
            if (!lessonColumns.some(col => col.field === `lesson_${lesson.lessonNumber}`)) {
              lessonColumns.push({
                field: `lesson_${lesson.lessonNumber}`,
                headerName: `Lesson ${lesson.lessonNumber}`,
                width: 100,
                renderCell: (params) => {
                  const lessonData = params?.row?.attendanceList?.find(att => att.lessonNumber === lesson.lessonNumber);
                  if (lessonData) {
                    const score = lessonData.score;
                    const scoreClass = score < 50 ? 'circle-red' : score < 80 ? 'circle-yellow' : 'circle-green';
                    return (
                      <div className={`circle ${scoreClass}`}>
                        {score}%
                      </div>
                    );
                  }
                  return <div>No Data</div>;
                }
              });
            }
          });
        });

        setColumns(prevColumns => [...prevColumns, ...lessonColumns]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [modul]); // Refetch when module changes

  const getRowId = (row) => row.id || row.studentName;

  const handleNextModule = () => {
    modul = +modul + 1;
    setParams({ module: Number(modul) });
  };

  const handlePrevModule = () => {
    if (Number(modul) <= 1) {
      setParams({ module: '1' });
    } else {
      setParams({ module: Number(modul) - 1 });
    }
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='w-full bg-black h-10 flex items-center justify-center'>
            <div className='flex items-center justify-between w-full px-5'>
              <button className='text-white' onClick={handlePrevModule}>Prev</button>
              <h1 className='text-white text-center'>Module: {modul}</h1>
              <button className='text-white' onClick={handleNextModule}>Next</button>
            </div>
          </div>
          <DataGrid
            rows={tableData}
            columns={columns}
            getRowId={getRowId}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            components={{
              Row: (props) => <CustomRow {...props} />,
            }}
          />
        </>
      )}
    </div>
  );
};

export default DataTable;
