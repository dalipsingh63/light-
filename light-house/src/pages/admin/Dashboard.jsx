



import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/user";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 📊 Graph data
  const graphData = users.map((_, index) => ({
    name: index + 1,
    totalUsers: index + 1,
  }));

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ===== Stats Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-gray-500 text-sm">
            Total Users
          </h2>
          <p className="text-3xl font-bold text-blue-600 mt-1">
            {users.length}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-gray-500 text-sm">
            Active Users
          </h2>
          <p className="text-3xl font-bold text-green-600 mt-1">
            {users.length}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-gray-500 text-sm">
            New Users
          </h2>
          <p className="text-3xl font-bold text-purple-600 mt-1">
            {users.length}
          </p>
        </div>
      </div>

      {/* ===== Users Growth Graph ===== */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          Users Growth
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading graph...</p>
        ) : (
          <div className="w-full h-[260px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="totalUsers"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};
