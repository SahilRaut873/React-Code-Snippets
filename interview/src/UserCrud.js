import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Fake API

function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // 1️⃣ GET - Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2️⃣ POST - Add New User
  const addUser = async () => {
    try {
      const response = await axios.post(API_URL, newUser);
      setUsers([...users, response.data]); // Update UI
      setNewUser({ name: "", email: "" }); // Clear form
    } catch (err) {
      console.log("Error adding user:", err.message);
    }
  };

  // 3️⃣ PUT - Update User
  const updateUser = async (id) => {
    try {
      const updatedUser = { name: "Updated Name", email: "updated@example.com" };
      const response = await axios.put(`${API_URL}/${id}`, updatedUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
    } catch (err) {
      console.log("Error updating user:", err.message);
    }
  };

  // 4️⃣ DELETE - Remove User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.log("Error deleting user:", err.message);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users CRUD App</h2>

      {/* Add User Form */}
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} 
            <button onClick={() => updateUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersCRUD;
