import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser, updateUser } from "../services/admin";
import { toast } from "react-toastify";

function AdminUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const result = await fetchUsers();
      setUsers(result.data);
    };
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const handleUpdate = async (id) => {
    // You can navigate to an update form or open a modal
    // For now, we'll just log the user id
    console.log(`Update user with ID: ${id}`);
    // Optionally, navigate to an update page:
    // window.location.href = `/update-user/${id}`;
  };

  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserList;
