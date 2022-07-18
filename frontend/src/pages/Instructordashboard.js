import { Link,useNavigate } from 'react-router-dom';
import React, { useEffect, useContext,useState } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import GlobalAPI from '../apis/globalApi';

export default function Instructordashboard() {
  const {value2,instructorInfo,setInstructorInfo,grade,setGrade} = useContext(GlobalContext);
  const[newGrade, setNewGrade]= useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GlobalAPI.get(`/Instructordashboard/${value2}`);

        if(response.data.results>0){
          setInstructorInfo(response.data.data.instructorInfo[0]);
        setGrade(response.data.data.studentGrades);
        }else{
          setInstructorInfo("");
        setGrade("");
        }
        

        console.log(response);
       
      } catch (error) { 
        console.error(error.message);
      }
    }
    fetchData();// eslint-disable-next-line
  }, []);
  const handleEdit = async (sid,cid)=> {
    try {

     const response= GlobalAPI.put(`/Editgrade/${sid}/${cid}/${newGrade}`);
      navigate('../Editgrade');
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div><h1>Hello {instructorInfo.first_name}! Welcome to your dashboard.</h1>
      <div className="mb-5 mx-auto card w-50" style={{ 'width': '18rem' }}>
        <div className="text-center text-muted card-header">
          Personal details
        </div>
        <ul className="list-group list-group-flush">
          <li className="d-flex list-group-item">Instructor ID <span className="ml-auto font-weight-bold">{instructorInfo.instructor_id}</span></li>
          <li className="d-flex list-group-item">First name <span className="ml-auto font-weight-bold">{instructorInfo.first_name}</span></li>
          <li className="d-flex list-group-item">Last name <span className="ml-auto font-weight-bold">{instructorInfo.last_name}</span></li>
        </ul>
      </div>
      
        <h1 className="m-4">Student Grades</h1>
        <div>
        <table className="table table-striped w-100 mx-auto">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Current Grade</th>
              <th style={{ "textAlign": "center" }} scope="col">Edit Grade</th>

            </tr>
          </thead>
          <tbody>
          {grade && grade.map(g =>{
            return(
            <tr key={g.student_id+g.course_id}>
              <td>{g.student_id}</td>
              <td>{g.first_name}</td>
              <td>{g.last_name}</td>
              <td>{g.course_id}</td>
              <td>{g.course_name}</td>
              <td style={{ "textAlign": "center" }}>{g.value}</td>
              <td style={{ "textAlign": "center" }}>
                <form className="m-1">
                  
                  <input type="text" name="grade" id="grade" onChange={(e) => setNewGrade(e.target.value)} />
                  <button className="btn-primary btnsubmit" onClick={()=>handleEdit(g.student_id,g.course_id)} type="submit" style={{ "border": "none" }}>Edit</button>
                 
                </form>
              </td>
            </tr>
            )

            
            })}
          </tbody>


        </table>
        </div>
        <div className="m-1">
          <nav>
            <Link to="../Registeredstudents" className="btn btn-primary btnsubmit" style={{ "border": "none" }}>Manage Students</Link>
          </nav>
          
          
        </div>
        &nbsp;<Link to="../instructorportal"className="btn btn-primary btnsubmit">Go back</Link>
      
    </div>
  )
}
