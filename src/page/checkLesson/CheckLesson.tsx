import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbarQuickFilter } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { green, yellow, red } from '@mui/material/colors';

// Border rangi bahoga qarab o'zgaradi
const getBorderColor = (score: number | null) => {
  if (score === 0 || score === null) return red[500]; // 0 yoki null bo'lsa qizil border
//   if (score > 0 && score < 50) return yellow[700]; // 0 dan baland va 50 dan past bo'lsa sariq
//   return green[500]; // 50 dan yuqori bo'lsa yashil
};

// Custom toolbar for search functionality
function CustomToolbar() {
  return (
    <Box sx={{ p: 1 }}>
      <GridToolbarQuickFilter />
    </Box>
  );
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'avatar',
    headerName: 'Students',
    width: 150,
    renderCell: (params) => (
      <Box display="flex" alignItems="center">
        <Avatar src={params.value} sx={{ width: 40, height: 40, mr: 2 }} />
        <span>{params.row.firstName} {params.row.lastName}</span>
      </Box>
    ),
  },
  {
    field: 'score',
    headerName: 'Score',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight: 2,
            border: `4px solid ${getBorderColor(params.row.score)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score !== null ? params.row.score : 0}
            sx={{ color: getBorderColor(params.row.score), mr: 2 }}
          />
          <span>{params.row.score !== null ? `${params.row.score}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1, lastName: 'Alimova', firstName: 'Sevara', age: 14, score: 82, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2, lastName: 'Yunusxo\'jayeva', firstName: 'Sohiba', age: 31, score: 100, lessonNumber: 2,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3, lastName: 'Maripov', firstName: 'Xusniddin', age: 31, score: 50, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4, lastName: 'Kim', firstName: 'Alina', age: 11, score: 0, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5, lastName: 'Olimboyeva', firstName: 'Ozoda', age: 23, score: 49, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
];

export default function CheckLessonDemo() {
  return (
    <div className='max-w-[1400px] m-auto md:px-4'>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center my-7'>
          <button className=' bg-[#0340F0] text-xl text-white py-2 w-[200px] rounded-l-2xl focus:bg-[#033ef0a7]'>Unchecked</button>
          <button className=' bg-[#0340F0] text-xl text-white py-2 w-[200px] rounded-r-2xl focus:bg-[#033ef0a7]'>Done</button>
        </div>
      </div>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
          components={{ Toolbar: CustomToolbar }} // Add the custom toolbar for search
        />
      </Box>
    </div>
  );
}
