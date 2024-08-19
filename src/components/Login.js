// import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:9000/api/auth/login', {
        username,
        password,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="">
        <h4 className="mb-4">FORM LOGIN</h4>
        <Link className="mb-4 justify-content-end btn btn-primary">
          REGISTER
        </Link>
      </div>
      <hr />
      <form className="row" onSubmit={saveUser}>
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

export default Login;
