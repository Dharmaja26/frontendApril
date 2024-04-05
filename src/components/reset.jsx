import axios from 'axios';
import { useEffect, useState } from 'react';
function Reset(){
    const [email, setEmail] =useState(''); 
    const [new_password, setPassword] =useState(''); 
    const[confirm_password, setConfirmPassword] =useState('');
    const[error,setError] =useState('');

    useEffect ( ()=>{ 
        console. log( 'email is:', email);
        console. log ('password is:', new_password); 
    }, [email, new_password]) 

    const handleSubmit = async () => {
     
     
            setError('Password updated successfully');
            const response = await axios. post('http://localhost:2000/forgot',{
                email,new_password 
            })
     
              if(response.data){
console.log(response.data);
            }
        //  else {
        //     setError('Password dont match')
        // }
    
            
        }

    return (
        <center>
      <div style={{borderStyle:'solid',borderRadius:'15px',height:'500px', width:'700px', backgroundImage:`url(beach2.jpg)`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
   
        <h2 style={{textAlign:"center",color:'white'}}>Reset account Password</h2>
     <div><input type="email" name="email" placeholder="Enter Mail id" onChange={(e)=>setEmail(e.target.value)} style={{width:'500px', padding:'12px 20px'}}></input><br></br></div>
        <input type="password" name="pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} style={{width:'500px', padding:'12px 20px'}}></input><br></br>
        <input type="password" name="cpass" placeholder="Confirm Password" onChange={(e)=>setPassword(e.target.value)} style={{width:'500px', padding:'12px 20px'}}></input>
        <br></br>
        <button type="button" value="Update Password" onClick={handleSubmit}  style={{backgroundColor:'green',color:'white',padding:'14px 20px'}}>Update Password</button>
        <div style={{color:'red', border:'20px', borderRadius:'15px'}}>{error}</div>
      </div>
      </center>
    )
    }
    export default Reset;
  
