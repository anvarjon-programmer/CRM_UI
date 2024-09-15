import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define TypeScript interfaces for the data structure
interface Lesson {
  date: string;
  percentage: number;
}

interface Student {
  id: number;
  name: string;
  image: string;
  lessons: Lesson[];
}

const StudentProgress: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get<Student[]>('http://localhost:3000/user');
        setStudents(response.data); // Update with your actual data format
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Students</th>
            {/* Add the dates dynamically, checking if there are any students first */}
            {students.length > 0 && students[0].lessons.map((lesson, index) => (
              <th key={index} className="p-2">{lesson.date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2 flex items-center">
                <img src={student.image} alt={student.name} className="w-8 h-8 rounded-full mr-2" />
                <span>{student.name}</span>
              </td>
              {/* Render percentages for each lesson, with a similar check */}
              {student.lessons.map((lesson, idx) => (
                <td key={idx} className="p-2 text-center">
                  <span
                    className={`inline-block p-2 rounded-full ${
                      lesson.percentage >= 80 ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                  >
                    {lesson.percentage}%
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProgress;
