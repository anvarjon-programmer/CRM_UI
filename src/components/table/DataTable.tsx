import React, { useState, useEffect, Fragment } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useSearchAppParams } from '../../hooks/useSearchParams';
import { httpClient } from '../../utils/reques';

interface Attendance {
  lessonNumber: number;
  score: number;
}

interface Student {
  id: string;
  studentName: string;
  studentSurname: string;
  avatar: string;
  attendanceList: Attendance[];
}

const CustomRow = styled('div')(({ theme }) => ({
  border: '1px solid #e0e0e0',
}));

const DataTable:React.FC = () => {
  const [tableData, setTableData] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { getParams, setParams } = useSearchAppParams();

  let modul = getParams("module") ?? 1;

  const [columns, setColumns] = useState([
    {
      field: 'avatar',
      headerName: 'Student',
      width: 300,
      renderCell: (params:any) => (
        <div className="flex items-center space-x-4 border p-2 rounded-lg">
          <img className='w-12 h-12 rounded-full object-cover' src={params?.row?.avatar} alt={params.row.studentName} />
          <div>
            <span className="font-medium">{params?.row?.studentName} {params?.row?.studentSurname}</span>
          </div>
        </div>
      ),
    },
  ]);

  const getData = async () => {
    try {
      const { data } = await httpClient(`/teacher/statistics?moduleNumber=${modul}`);
      setTableData(data);
      
      // Build dynamic columns for lessons
      const lessonColumns:GridColDef[] = [];
      data.forEach((student:Student) => {
         student.attendanceList.forEach((lesson) => {
          if (!lessonColumns.some(col => col.field === `lesson_${lesson.lessonNumber}`)) {
            lessonColumns.push({
              field: `lesson_${lesson.lessonNumber}`,
              headerName: `Lesson ${lesson.lessonNumber}`,
              width: 100,
              renderCell: (params) => {
                const lessonData = params?.row?.attendanceList?.find(
                  (att: Attendance) => att.lessonNumber === lesson.lessonNumber
                );
              
                if (lessonData) {
                  const score = lessonData.score;
                  let scoreClass = '';
              
                  if (score === 0) {
                    scoreClass = 'bg-red-500'; // Red for score 0
                  } else if (score < 50) {
                    scoreClass = 'bg-red-500'; // Red for less than 50
                  } else if (score < 80) {
                    scoreClass = 'bg-yellow-500'; // Yellow for 50 to 79
                  } else {
                    scoreClass = 'bg-green-500'; // Green for 80 and above
                  }
                  return (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${scoreClass}`}>
                    {score && score > 0 && score !== 'No Data' ? `${score}%` : '0%'}
                  </div>
            
                  );
                }
                return <div>No Data</div>;
              }
            });
          }
        });
      });
      
      setColumns((prevColumns:any) => [...prevColumns, ...lessonColumns]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [modul]); 

  const getRowId = (row:Student) => row.id || row.studentName;

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
