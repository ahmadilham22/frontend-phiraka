// import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9000/api/users', {
        username,
        password,
        nama,
      });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <h4 className="mb-4">FORM PENAMBAHAN USER</h4>
      <hr />
      <form className="row" onSubmit={saveUser}>
        <div className="col-lg-12 mb-3 d-flex align-items-center">
          <div className="col-5">
            <label className="form-label">Nama</label>
          </div>
          <div className="col-2">
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="form-control border-black"
              id="nama"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-3 d-flex align-items-center">
          <div className="col-5">
            <label className="form-label">Username</label>
          </div>
          <div className="col-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control border-black"
              id="username"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-3 d-flex align-items-center">
          <div className="col-5">
            <label className="form-label">Password</label>
          </div>
          <div className="col-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control border-black"
            />
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-secondary col-lg-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
