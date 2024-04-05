import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Forget(){
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const redirecter = () =>{
  dispatch({ type: 'SET_USER', payload: 'Password Changed Successfully' }); 
    navigator('/Reset')
  }
  return (
    <center>
    <div>
        <a href ="" onClick={redirecter}>Forget Password?</a>
    </div>
    </center>
  )
  }
  export default Forget;
