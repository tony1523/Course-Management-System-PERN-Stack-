import '../portal.css';
import {useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import { Link } from "react-router-dom";

export default function Instructorportal() {
  const {value2, setValue2} = useContext(GlobalContext);
  return (
    <div className='centerelements'><h1><br /><br />Bishop's University<br />Instructor Portal</h1>
      <div className="mt-5">
      <nav>
      <input className="p-1" placeholder="Enter instructor ID" type="text" name="studentid" size="30" value={value2} onChange={(e) => setValue2(e.target.value)}/>
        <Link to="../instructordashboard"className="btn btn-primary btnsubmit"onClick={()=> setValue2(value2)}>Submit</Link>
        </nav>
      </div>
    </div>
  )
}
