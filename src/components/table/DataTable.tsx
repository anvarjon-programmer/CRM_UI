import React, { useState, useEffect, Fragment } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useSearchAppParams } from '../../hooks/useSearchParams';
import { httpClient } from '../../utils/reques';
import { TextField } from '@mui/material';
import './DataTable.css'

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
  const [searchText,setSearchText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Student[]>(tableData);  // Initialize with the full data
  const { getParams, setParams } = useSearchAppParams();
  const [mockData,setMockData] = useState([
    {
      avatar:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw13ubKw16vtr4ykX-cx-W_i&ust=1727115346353000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjDv5yU14gDFQAAAAAdAAAAABAE",
      lesson:'1',
    }
  ])

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
      setFilteredData(data);
      
      // Dastlab "Student" ustunini qo'yamiz
      const initialColumns: GridColDef[] = [
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
      ];
  
      // Dars ustunlarini yaratamiz
      const lessonColumns: GridColDef[] = [];
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
                  let scoreClass = 'circle-red ';
                
                  if (score === 0) {
                    scoreClass = 'circle-yellow';
                  } else if (score < 50) {
                    scoreClass = 'circle-green'; 
                  } else if (score < 70) {
                    scoreClass = 'circle-green'; 
                  } else {
                    scoreClass = 'circle-green'; 
                  }
                
                  return (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-2 ${scoreClass}`}>
                      {score ? `${score}%` : '0%'}
                    </div>
                  );
                }
                
                return <div>No Data</div>;
              }
            });
          }
        });
      });
  
      // Ustunlarni yangilab qo'yamiz
      setColumns([...initialColumns, ...lessonColumns]);
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();  
    setSearchText(value);  
    
    const filtered = tableData.filter(student =>
      student.studentName.toLowerCase().includes(value) || student.studentSurname.toLowerCase().includes(value)
    );
    
    setFilteredData(filtered);  
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
            <div className='my-4'>
              <TextField
              variant='outlined'
              label="Search by Student Name"
              value={searchText}
              onChange={handleSearch}
              fullWidth
              />
            </div>
          <div className='w-full bg-black h-10 flex items-center justify-center'>
            <div className='flex items-center justify-between w-full px-5'>
              <button className='text-white' onClick={handlePrevModule}>Prev</button>
              <h1 className='text-white text-center'>Module: {modul}</h1>
              <button className='text-white' onClick={handleNextModule}>Next</button>
            </div>
          </div>
          <DataGrid
            rows={filteredData}
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
