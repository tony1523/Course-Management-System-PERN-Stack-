import { useNavigate,Link} from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import GlobalAPI from '../apis/globalApi';

export default function Registeredstudents() {
  const navigate = useNavigate();
  const {value2,registeredStudents,setRegisteredStudents} = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GlobalAPI.get(`/Registeredstudents/${value2}`);
        setRegisteredStudents(response.data.data.results);

        console.log(response);
       
      } catch (error) { }
    }
    fetchData();// eslint-disable-next-line
  }, []);
  const handleDelete = async (sid,cid)=> {
    try {
     const response= GlobalAPI.delete(`/Unregister/${sid}/${cid}`);
      navigate('../Unregister');
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (

    <div>
      <form className="" >
      <div>

        <h1 className="m-4">All your registered students</h1>
        
        <table className="table table-striped w-100 mx-auto">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Course Code</th>
              <th scope="col">Course Name</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody> 
            {registeredStudents && registeredStudents.map(r =>{
            return(
             <tr key={r.student_id+r.course_id}>
              <td>{r.student_id}</td>
              <td>{r.first_name}</td>
              <td>{r.last_name}</td>
              <td>{r.email}</td>
              <td>{r.course_id}</td>
              <td>{r.course_name}</td>
              <td><div className="m-1">
                
                <button className="btn btn-primary btnsubmit" style={{ "border": "none" }} onClick={()=>handleDelete(r.student_id,r.course_id)}type="submit">Unregister</button>
               
                </div>
              </td>

            </tr> 
            )
            })}
          </tbody>


        </table>
      </div>
    </form>
      &nbsp;<Link to="../instructordashboard"className="btn btn-primary btnsubmit">Go back</Link>


    </div>
  )
}
