import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import GlobalAPI from '../apis/globalApi';
import {GlobalContext} from '../context/GlobalContext';



export default function Studentdashboard() {
  
  const {value,studentInfo,setStudentInfo,courseInfo,setCourseInfo} = useContext(GlobalContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GlobalAPI.get(`/Studentdashboard/${value}`);
        
        if(response.data.results>0){
          setStudentInfo(response.data.data.studentInfo[0]);
          setCourseInfo(response.data.data.Grades);
        }else{
          setStudentInfo("");
          setCourseInfo("");
        }
        

        console.log(response);
       
      } catch (error) { 
        console.error(error.message);
      }
    }
    fetchData();// eslint-disable-next-line
  }, []);


  return (
    <div><h1>Hello {studentInfo.first_name}! Welcome to your dashboard.</h1>
      <div className="mb-5 mx-auto card w-50" style={{ 'width': '18rem' }}>
        <div className="text-center text-muted card-header">
          Personal details
        </div>
        <ul className="list-group list-group-flush">
          <li className="d-flex list-group-item">Student ID <span className="ml-auto font-weight-bold">{studentInfo.student_id}</span></li>
          <li className="d-flex list-group-item">First name <span className="ml-auto font-weight-bold">{studentInfo.first_name}</span></li>
          <li className="d-flex list-group-item">Last name <span className="ml-auto font-weight-bold">{studentInfo.last_name}</span></li>
          <li className="d-flex list-group-item">Email <span className="ml-auto font-weight-bold">{studentInfo.email}</span></li>
          <li className="d-flex list-group-item">Birth date <span className="ml-auto font-weight-bold">{studentInfo.birth_date}</span></li>
        </ul>
      </div>
      <div>
        <h1 className="m-4">Grades</h1>
        <table className="table table-striped w-100 mx-auto">
          <thead>
            <tr>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {courseInfo && courseInfo.map(course =>{
              return( <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.value}</td>
              </tr>)
           })}
          </tbody>
        </table>
        &nbsp;<Link to="/"className="btn btn-primary btnsubmit">Go back</Link>
      </div>


    </div>
  )
}
