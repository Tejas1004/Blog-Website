import React, { useState } from 'react';
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", inputs);
      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };


  
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='Enter username' name='username' onClick={handleChange}/>
        <input type="password" placeholder='Enter Password' name='password' onClick={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p> }
        <span>Create Your Own Account !<Link to="/register">Register</Link> </span>
      </form>

    </div>
  )
}

export default Login