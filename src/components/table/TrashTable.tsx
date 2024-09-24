import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { green, yellow, red } from '@mui/material/colors';

// Border rangi bahoga qarab o'zgaradi
const getBorderColor = (score: number | null) => {
  if (score === 0 || score === null) return red[500]; // 0 yoki null bo'lsa qizil border
  if (score > 0 && score < 50) return yellow[700]; // 0 dan baland va 50 dan past bo'lsa sariq
  return green[500]; // 50 dan yuqori bo'lsa yashil
};

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'avatar',
    headerName: 'Students',
    width: 150,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" width={800}>
        <Avatar src={params.value} sx={{ width: 40, height: 40, mr: 2 }} />
        <span>{params.row.firstName} {params.row.lastName}</span>
      </Box>
    ),
  },
  {
    field: 'score',
    headerName: 'Lesson1',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score !== null ? params.row.score : 0}
            sx={{ color: getBorderColor(params.row.score), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score2',
    headerName: 'Lesson2',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score2)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score2 !== null ? params.row.score2 : 0}
            sx={{ color: getBorderColor(params.row.score2), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score2}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score3',
    headerName: 'Lesson3',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score3)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score3 !== null ? params.row.score3 : 0}
            sx={{ color: getBorderColor(params.row.score3), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score3}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score4',
    headerName: 'Lesson4',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score4)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score4 !== null ? params.row.score4 : 0}
            sx={{ color: getBorderColor(params.row.score4), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score4}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score5',
    headerName: 'Lesson5',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score5)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score5 !== null ? params.row.score5 : 0}
            sx={{ color: getBorderColor(params.row.score5), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score5}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score6',
    headerName: 'Lesson6',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score6)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score6 !== null ? params.row.score6 : 0}
            sx={{ color: getBorderColor(params.row.score6), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score6}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score7',
    headerName: 'Lesson7',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score7)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score7 !== null ? params.row.score7 : 0}
            sx={{ color: getBorderColor(params.row.score7), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score7}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score8',
    headerName: 'Lesson8',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score8)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score8 !== null ? params.row.score8 : 0}
            sx={{ color: getBorderColor(params.row.score8), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score8}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score9',
    headerName: 'Lesson9',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score9)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score8 !== null ? params.row.score9 : 0}
            sx={{ color: getBorderColor(params.row.score9), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score9}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  },
  {
    field: 'score10',
    headerName: 'Lesson10',
    width: 120,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" justifyContent="center" >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: '50%',
            paddingRight:2,
            border: `4px solid ${getBorderColor(params.row.score10)}`,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={params.row.score10 !== null ? params.row.score10 : 0}
            sx={{ color: getBorderColor(params.row.score10), mr: 2  }}
          />
          <span>{params.row.score !== null ? `${params.row.score10}%` : 'N/A'}</span>
        </Box>
      </Box>
    ),
  }
];

const rows = [
  { 
    id: 1, lastName: 'Alimova', firstName: 'Sevara', age: 14, score: 82, score2: 88, score3: 88, score4: 87, score5: 39, score6: 76, score7: 86, score8: 54, score9: 72, score10: 90, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 2, lastName: 'Bekzodov', firstName: 'Javlon', age: 15, score: 75, score2: 68, score3: 90, score4: 74, score5: 48, score6: 82, score7: 78, score8: 67, score9: 62, score10: 81, lessonNumber: 2,
    avatar: "https://plus.unsplash.com/premium_photo-1674321446880-9096c7a83360?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 3, lastName: 'Karimov', firstName: 'Sanjar', age: 14, score: 89, score2: 84, score3: 72, score4: 63, score5: 58, score6: 93, score7: 77, score8: 66, score9: 81, score10: 75, lessonNumber: 3,
    avatar: "https://plus.unsplash.com/premium_photo-1693993383065-37ff8cfd83eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 4, lastName: 'Nabieva', firstName: 'Shahnoza', age: 16, score: 95, score2: 90, score3: 91, score4: 88, score5: 77, score6: 84, score7: 93, score8: 72, score9: 80, score10: 92, lessonNumber: 4,
    avatar: "https://plus.unsplash.com/premium_photo-1678797977765-e72c539b8ab6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 5, lastName: 'Qodirov', firstName: 'Aziz', age: 14, score: 83, score2: 70, score3: 79, score4: 82, score5: 59, score6: 68, score7: 84, score8: 75, score9: 67, score10: 86, lessonNumber: 5,
    avatar: "https://plus.unsplash.com/premium_photo-1694181682010-2b0d52d15815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 6, lastName: 'Mirzayev', firstName: 'Doston', age: 15, score: 74, score2: 81, score3: 85, score4: 73, score5: 46, score6: 77, score7: 66, score8: 83, score9: 58, score10: 80, lessonNumber: 6,
    avatar: "https://plus.unsplash.com/premium_photo-1694251760514-5a1f9f72f3b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 7, lastName: 'Yusupova', firstName: 'Madina', age: 14, score: 87, score2: 92, score3: 86, score4: 77, score5: 53, score6: 71, score7: 94, score8: 59, score9: 68, score10: 88, lessonNumber: 7,
    avatar: "https://plus.unsplash.com/premium_photo-1692886602685-f245482db07a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 8, lastName: 'Rakhimov', firstName: 'Komil', age: 16, score: 92, score2: 84, score3: 77, score4: 79, score5: 69, score6: 85, score7: 91, score8: 76, score9: 74, score10: 85, lessonNumber: 8,
    avatar: "https://plus.unsplash.com/premium_photo-1677880807037-d5b550e9b509?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 9, lastName: 'Usmonov', firstName: 'Sherzod', age: 15, score: 78, score2: 66, score3: 81, score4: 84, score5: 71, score6: 88, score7: 83, score8: 61, score9: 69, score10: 79, lessonNumber: 9,
    avatar: "https://plus.unsplash.com/premium_photo-1677844515613-06fa8426ba38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    id: 10, lastName: 'Shodmonova', firstName: 'Laylo', age: 14, score: 85, score2: 93, score3: 90, score4: 79, score5: 74, score6: 92, score7: 81, score8: 87, score9: 72, score10: 84, lessonNumber: 10,
    avatar: "https://plus.unsplash.com/premium_photo-1675857864964-cf9c144cd0a5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 11, lastName: 'Sobirov', firstName: 'Islom', age: 16, score: 80, score2: 73, score3: 82, score4: 65, score5: 62, score6: 83, score7: 90, score8: 78, score9: 85, score10: 70, lessonNumber: 1,
    avatar: "https://plus.unsplash.com/premium_photo-1673982796004-e8dbb358fd3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 12, lastName: 'Ergasheva', firstName: 'Oydin', age: 15, score: 94, score2: 88, score3: 83, score4: 90, score5: 79, score6: 91, score7: 85, score8: 82, score9: 86, score10: 95, lessonNumber: 2,
    avatar: "https://plus.unsplash.com/premium_photo-1661767473872-bd2cb9472ab7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 13, lastName: 'Shukurov', firstName: 'Mansur', age: 16, score: 73, score2: 69, score3: 87, score4: 76, score5: 60, score6: 74, score7: 67, score8: 63, score9: 68, score10: 77, lessonNumber: 3,
    avatar: "https://plus.unsplash.com/premium_photo-1678712339913-4d9a2c76b2ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 14, lastName: 'Saidov', firstName: 'Otabek', age: 14, score: 91, score2: 80, score3: 89, score4: 81, score5: 72, score6: 79, score7: 88, score8: 70, score9: 83, score10: 89, lessonNumber: 4,
    avatar: "https://plus.unsplash.com/premium_photo-1678380988897-f1bb0bff1c37?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  { 
    id: 15, lastName: 'Hojiev', firstName: 'Rustam', age: 15, score: 88, score2: 85, score3: 86, score4: 84, score5: 64, score6: 80, score7: 87, score8: 73, score9: 75, score10: 82, lessonNumber: 5,
    avatar: "https://plus.unsplash.com/premium_photo-1675152924315-3b3c4710c5ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  }
];


export default function DataGridDemo() {
  return (
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
      />
    </Box>
  );
}
