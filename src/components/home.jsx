import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div style={{backgroundColor:'black'}}> 
      
      
      
      <button style={{backgroundColor:'black',color:'white',padding:'14px 20px',borderColor:'wheat'}} onClick={logout}>Login</button>
     
    <div style={{backgroundImage:`url(beach.jpg)`, color:'white',backgroundRepeat:'no-repeat', backgroundSize:'cover',height : '900px', justifyContent:'center', alignItems:'center',display:'flex'}}>
      <h2 style={{color:'black'}}>Welcome to MALDIVES {user}!</h2>
            {/* <p style={{color:'black' }}>This is he official Website for Tourists.</p> */}
      
    
    </div>
    </div>
    </>
  );
};

export default Home;
