import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <center>
    <div style={{borderStyle:'solid',borderRadius:'15px',height:'500px', width:'700px', width:'700px', backgroundImage:`url(beach3.jpg)`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <h2 style={{color:'white'}}>LOGIN</h2>
      <div style={{gap:'10px',display:'flex',alignContent:'center',justifyContent:'center'}}>
        <input style={{ padding:'12px 20px '}}
          type="email" placeholder='Email ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input type="password"value={password} placeholder='Enter Password' style={{ padding:'12px 20px'}} onChange={(e) => setPassword(e.target.value)} required
        />
      </div>
      <button onClick={handleSubmit} style={{backgroundColor:'aqua',color:'black',padding:'14px 20px'}}>Login</button> 
      <button onClick={redirecter} style={{backgroundColor:'aqua',color:'black',padding:'14px 20px'}}>Register</button> 
{/*      
      <div>
      <a href="">Forget Password?</a>
    </div> */}

    </div>
    </center>
  );
};

export default Login;
