require("dotenv").config();
const express =  require("express");
const app =express();
const cors =require("cors");
const db= require("./db");


//middleware
app.use(cors());
app.use(express.json());

app.post("/Studentadded", async(req,res)=>{
    try {
        
        const student= await db.query("INSERT INTO students (student_id, first_name, last_name, email, birth_date) VALUES ($1, $2, $3, $4, $5) returning *",[req.body.student_id,req.body.first_name,req.body.last_name,req.body.email,req.body.birth_date]);
        res.status(200).json({
            status: "success",
            data:{
                studentInfo:student.rows
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.post("/Studentadded/0", async(req,res)=>{
    try {
        
        const enroll= await db.query('INSERT INTO enroll (student_id, course_id) VALUES ($1, $2)returning *',[req.body.student_id,req.body.course_id]);
        const grades= await db.query('INSERT INTO grade (student_id, course_id, value) VALUES ($1, $2,$3)returning *',[req.body.student_id,req.body.course_id,0]);
        res.status(200).json({
            status: "success",
            data:{
                Enroll:enroll.rows,
                Grades:grades.rows
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.post("/Studentadded/1", async(req,res)=>{
    try {
        
        const enroll= await db.query('INSERT INTO enroll (student_id, course_id) VALUES ($1, $2)returning *',[req.body.student_id,req.body.course_id]);
        const grades= await db.query('INSERT INTO grade (student_id, course_id, value) VALUES ($1, $2,$3)returning *',[req.body.student_id,req.body.course_id,0]);
        res.status(200).json({
            status: "success",
            data:{
                Enroll:enroll.rows,
                Grades:grades.rows
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.post("/Studentadded/2", async(req,res)=>{
    try {
        
        const enroll= await db.query('INSERT INTO enroll (student_id, course_id) VALUES ($1, $2)returning *',[req.body.student_id,req.body.course_id]);
        const grades= await db.query('INSERT INTO grade (student_id, course_id, value) VALUES ($1, $2,$3)returning *',[req.body.student_id,req.body.course_id,0]);
        res.status(200).json({
            status: "success",
            data:{
                Enroll:enroll.rows,
                Grades:grades.rows
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.post("/Studentadded/3", async(req,res)=>{
    try {
        
        const enroll= await db.query('INSERT INTO enroll (student_id, course_id) VALUES ($1, $2)returning *',[req.body.student_id,req.body.course_id]);
        const grades= await db.query('INSERT INTO grade (student_id, course_id, value) VALUES ($1, $2,$3)returning *',[req.body.student_id,req.body.course_id,0]);
        res.status(200).json({
            status: "success",
            data:{
                Enroll:enroll.rows,
                Grades:grades.rows
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.get("/Studentdashboard/:id", async(req,res)=>{
    try { 
        const studentInfo= await db.query("select * from students where student_id = $1",[req.params.id]);
        const grades= await db.query("select grade.course_id,courses.course_name,grade.value from grade INNER JOIN courses ON courses.course_id = grade.course_id where student_id=$1",[req.params.id]);
        console.log(studentInfo.rows[0]);
        console.log(grades.rows[0]);
        res.status(200).json({
            status: "success",
            results:studentInfo.rows.length+grades.rows.length,
            data:{
                studentInfo:studentInfo.rows,
                Grades:grades.rows

            },
        });
        
    } catch (err) {
        console.error(err.message);
    }
})
app.get("/Registeredstudents/:id", async(req,res)=>{
    try { 
        const results= await db.query("select students.student_id,students.first_name,students.last_name,students.email,courses.course_name,courses.course_id from grade INNER JOIN courses ON courses.course_id = grade.course_id INNER JOIN enroll ON courses.course_id = enroll.course_id INNER JOIN students ON students.student_id = grade.student_id where instructor_id=$1 GROUP BY (students.student_id,courses.course_name,courses.course_id)",[req.params.id]);
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            results:results.rows.length,
            data:{
                results:results.rows
            },
        });
        
    } catch (err) {
        console.error(err.message);
    }
})
app.get("/Instructordashboard/:id", async(req,res)=>{
    try { 
        const instructorInfo= await db.query("select instructor_id, first_name, last_name from instructors where instructor_id =$1",[req.params.id]);
        const studentGrades= await db.query("select students.student_id,students.first_name,students.last_name,grade.course_id,courses.course_name,grade.value from grade INNER JOIN courses ON courses.course_id = grade.course_id INNER JOIN enroll ON courses.course_id = enroll.course_id INNER JOIN students ON students.student_id = grade.student_id where instructor_id=$1 GROUP BY(students.student_id,grade.course_id,courses.course_name,grade.value)",[req.params.id]);
        console.log(instructorInfo.rows[0]);
        console.log(studentGrades.rows[0]);
        res.status(200).json({
            status: "success",
            results:instructorInfo.rows.length+studentGrades.rows.length,
            data:{
                instructorInfo:instructorInfo.rows,
                studentGrades:studentGrades.rows

            },
        });
        
    } catch (err) {
        console.error(err.message);
    }
})
app.put("/Editgrade/:id/:courseid/:grade", async(req,res)=>{
    try {
        
        const results= await db.query("Update grade set value=$1 WHERE student_id=$2 AND course_id=$3 returning*",[req.params.grade,req.params.id,req.params.courseid]);
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            results:results.rows.length,
            data:{
                Results:results.rows,
                
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})
app.delete("/Unregister/:id/:courseid", async(req,res)=>{
    try {
        
        const enroll= await db.query("DELETE FROM enroll WHERE student_id=$1 AND course_id=$2 returning*",[req.params.id,req.params.courseid]);
        const grade= await db.query("DELETE FROM grade WHERE student_id=$1 AND course_id=$2 returning*",[req.params.id,req.params.courseid]);
        console.log(enroll.rows[0]);
        console.log(grade.rows[0]);
        res.status(200).json({
            status: "success",
            results:enroll.rows.length+grade.rows.length,
            data:{
                enroll:enroll.rows,
                grade:grade.rows            
            },
        });
    } catch (err) {
        console.error(err.message);
    }
})



const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("server has started on port 5000");
})