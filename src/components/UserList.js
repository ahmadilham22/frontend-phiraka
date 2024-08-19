// import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  // Get All
  useEffect(() => {
    axios
      .get('http://localhost:9000/api/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the user data!', error);
      });
  }, []);

  // Handle Update

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm('Anda yakin ingin menghapus user ini?')) {
      axios
        .delete(`http://localhost:9000/api/users/${id}`)
        .then((response) => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.error('There was an error deleting the user!', error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="">Daftar User</h1>
      <Link to={'add'} className="btn btn-primary">
        Tambah User
      </Link>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Create Time</th>
            <th scope="col">Fungsi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nama}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.create_time}</td>
              <td>
                <div className="">
                  <Link to={`edit/${user.id}`} className="btn btn-warning me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
