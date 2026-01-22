


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllUsers } from "../../services/user";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [location.pathname]); // ✅ route change pe refresh

  if (loading) {
    return (
      <div className="p-4 text-gray-500">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Users
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-left text-sm">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-50 text-sm"
                  >
                    <td className="p-3 border">
                      {index + 1}
                    </td>
                    <td className="p-3 border font-medium">
                      {user.name}
                    </td>
                    <td className="p-3 border break-all">
                      {user.email}
                    </td>
                    <td className="p-3 border">
                      <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">
                        {user.role || "User"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
