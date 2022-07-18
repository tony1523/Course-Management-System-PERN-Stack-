import React,{useState, createContext} from "react";

 export const GlobalContext = createContext();

export const GlobalContextProvider =(props)=>{

const [value, setValue]= useState([]);
const [value2, setValue2]= useState([]);
const [studentInfo, setStudentInfo]= useState([]);
const [courseInfo, setCourseInfo]= useState([]);
const [instructorInfo, setInstructorInfo]= useState([]);
const [grade, setGrade]= useState([]);
const [registeredStudents, setRegisteredStudents]= useState([]);


    return(
        <GlobalContext.Provider value={{value,setValue,value2,setValue2,grade,setGrade,studentInfo,setStudentInfo,
        courseInfo,setCourseInfo,instructorInfo,setInstructorInfo,registeredStudents,setRegisteredStudents}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

