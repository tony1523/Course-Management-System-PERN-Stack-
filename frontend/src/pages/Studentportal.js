import '../portal.css'; 
import {useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import { Link } from "react-router-dom";



export default function Studentportal() {
  
  const {value, setValue} = useContext(GlobalContext);

  return (
    
    <div className='centerelements'><h1><br /><br />Bishop's University<br />Student Portal</h1>
      <div className="mt-5" >
        
        <nav>
        <input className="p-1" placeholder="Enter student ID" type="text" name="studentid" size="30" value={value} onChange={(e) => setValue(e.target.value)}/>
        <Link to="studentdashboard"className="btn btn-primary btnsubmit"onClick={()=> setValue(value)}>Submit</Link>
      </nav>
        
      </div>
      <br />
 
      <Link to="Registerasnewstudent">Register as a new student</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="Instructorportal">Instructor's Portal</Link></div>
      
  )
  
}

