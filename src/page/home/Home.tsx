import axios from "axios";
import { useEffect, useState } from "react";

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  // Add other fields if there are any
}

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  

  const getAllstudent = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZDNjMjAwNS0yMDA3LTRjMGYtYTJjMy0wNmRmMTNjN2ZkOGYiLCJpYXQiOjE3MjU3NTAyNTEsImV4cCI6MTcyNjM1NTA1MSwicm9sZXMiOlsiUk9MRV9BRE1JTiJdfQ.Z4aW8rpmAgKEKa2z6a0LmT2PDzUzsIlP0xiGWSfYR2s"; // Replace with your actual token
      const response = await axios.get<Student[]>("http://164.90.187.178:8080/api/v1/admin/get-all-student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllstudent();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Student List</h1>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Avatar</th>
              <th className="py-3 px-5 text-left">Name</th>
              <th className="py-3 px-5 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-100 transition-colors">
                  <td className="py-3 px-5">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
                    />
                  </td>
                  <td className="py-3 px-5 font-medium text-gray-700">{student.name}</td>
                  <td className="py-3 px-5 text-gray-600">{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-3 px-5 text-center text-gray-500" colSpan={3}>
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
