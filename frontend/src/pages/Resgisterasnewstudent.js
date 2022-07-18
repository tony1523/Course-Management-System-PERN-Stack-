
import React,{useState} from 'react';
import GlobalAPI from '../apis/globalApi';
import { useNavigate } from "react-router-dom";


export default function Resgisterasnewstudent() {
  const navigate = useNavigate();
  

  const[error, setError]= useState("");

const[studentID, setStudentID]= useState("");
const[fName, setFname]= useState("");
const[lName, setLname]= useState("");
const[email, setEmail]= useState("");
const[birthDate, setBirthDate]= useState("");
const[sex, setSex]= useState("");


const[courseOne, setCourseOne]= useState("");
const[courseTwo, setCourseTwo]= useState("");
const[courseThree, setCourseThree]= useState("");
const[courseFour, setCourseFour]= useState("");

const onSubmitForm = async e=> {
  e.preventDefault();
  try {
    const info= await GlobalAPI.post("/Studentadded",{
   student_id: studentID,
  first_name: fName,
  last_name:lName,
  email:email,
  birth_date:birthDate,
 });
 if(courseOne!==""){
 const course1= await GlobalAPI.post("/Studentadded/0",{
  student_id: studentID,
 course_id: courseOne,
});
console.log(course1);
}
if(courseTwo!==""){
  const course2= await GlobalAPI.post("/Studentadded/1",{
    student_id: studentID,
   course_id: courseTwo,
  });
  console.log(course2);
}
if(courseThree!==""){
const course3= await GlobalAPI.post("/Studentadded/2",{
  student_id: studentID,
 course_id: courseThree,
});
console.log(course3);
}
if(courseFour!==""){
const course4= await GlobalAPI.post("/Studentadded/3",{
  student_id: studentID,
 course_id: courseFour,
});
console.log(course4);
}
 
 console.log(info);
 
 navigate('../Studentadded');

  } catch (err) {
    setError(err.message)
    console.error(err.message);
  }
}



  return (
    <div>
     <p>{error}</p>
    <h1 className="m-5">Register a New Student</h1>
    <form className="" action="studentadded" onSubmit={onSubmitForm}>
      <div className="justify-content-around d-flex flex-row">
        <div className="">
          <p>
          <input id="student_id" placeholder="Student ID (Numbers)" type="text" name="student_id" size="30" value={studentID} pattern="[\d]+" onChange={e => setStudentID(e.target.value)} required/>
          </p>
    
          <p>
          <input id="first_name" placeholder="First Name" type="text" name="first_name" size="30" value={fName} pattern="[a-zA-Z]+" onChange={e => setFname(e.target.value)} required/>
          </p>
    
          <p>
          <input id="last_name" placeholder="Last Name" type="text" name="last_name" size="30" value={lName} pattern="[a-zA-Z]+" onChange={e => setLname(e.target.value)} required/>
          </p>
    
          <p>
          <input id="email" placeholder="Email" type="text" name="email" size="30" value={email} pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"onChange={e => setEmail(e.target.value)}required/>
          </p>
    
          <p>
          <input id="birth_date" placeholder="Birth Date (YYYY-MM-DD)"pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))" type="text" name="birth_date" size="30" value={birthDate} onChange={e => setBirthDate(e.target.value)}required/>
          </p>
    
      <p>
          <input id="sex" placeholder="Sex (M or F)" pattern='[MF]' type="text" name="sex" size="30" maxLength="1" value={sex} onChange={e => setSex(e.target.value)}/>
          </p>
    
    
            </div>
        <div className="">
    
          <p>Course 1:
          <input type="text" id="course-1" name="course-1" pattern="^[A-Za-z0-9_-]*$"size="6" maxlength="6"value={courseOne} onChange={e => setCourseOne(e.target.value)}required/>
          </p>
    
          <p>Course 2:
          <input type="text" id="course-2" name="course-2" pattern="^[A-Za-z0-9_-]*$" size="6" maxlength="6"value={courseTwo} onChange={e => setCourseTwo(e.target.value)}/>
          </p>
    
          <p>Course 3:
          <input type="text" id="course-3" name="course-3" pattern="^[A-Za-z0-9_-]*$" size="6" maxlength="6"value={courseThree} onChange={e => setCourseThree(e.target.value)}/>
          </p>
    
          <p>Course 4:
          <input type="text" id="course-4" name="course-4" pattern="^[A-Za-z0-9_-]*$" size="6" maxlength="6"value={courseFour} onChange={e => setCourseFour(e.target.value)}/>
          </p>
    
          <button className=" w-25 position-absolute btn-lg btn btn-primary" style={{'bottom':'20%', 'left':'50%', 'transform':'translateX(-50%)','backgroundColor':'pink!important'}}  type="submit" >Register now</button>
    
        </div>
        <div className="small">
          <p>Please choose at least 1 subject from the following list and <strong>enter their codes</strong></p>
          <ul>
            <li>CS110 - Intro to Computers</li>
            <li>CS348 - Information Systems</li>
            <li>CS250 - Computer Architecture</li>
            <li>CS448 - Intro to Data Bases</li>
            <li>MA511 - Linear Algebra</li>
            <li>CS503 - Operating System</li>
            <li>MA525 - Intro to Complex Analysis</li>
            <li>ECE264 - Advanced C Programming</li>
            <li>ECE255 - Intro to Electric Analysis & Design</li>
          </ul>
        </div>
      </div>
    </form>
    
    
    </div>
  )
}
