import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  

  return (
    <center>
      <table>
    <div style={{borderStyle:'solid', height:'500px', width:'700px', backgroundImage:`url(drink.jpg)`,backgroundRepeat:'no-repeat', backgroundSize:'cover',justifyContent:'center',alignItems:'center'}}>
      <h2 style={{color:'white'}}>REGISTER</h2>
      <tr>
    <input style={{ padding:'12px 20px'}}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder='First Name'
        />
      </tr>
      <tr>
      <input
          type="text" placeholder='Last name'
          value={lastName} style={{padding:'12px 20px'}}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </tr>

      <tr>
        <input style={{padding:'12px 20px'}} placeholder='Email ID'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </tr>

      <tr>

        <input style={{ padding:'12px 20px'}} placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      </tr>
     
      <tr>
        <input style={{padding:'12px 20px'}}
          type="password"  placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
    

      </tr>
      <button onClick={handleSubmit} style={{backgroundColor:'aqua',color:'black',padding:'14px 20px', textAlign:'center'}}>Register</button>
      <button onClick={handleSubmit} style={{backgroundColor:'aqua',color:'black',padding:'14px 20px', textAlign:'center'}}>cancel</button>
    </div>
    </table>
    </center>
  );
};

export default Register;
