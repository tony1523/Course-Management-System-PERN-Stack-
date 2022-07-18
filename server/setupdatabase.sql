CREATE TABLE students (
  student_id VARCHAR(30) NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  birth_date DATE NOT NULL
);

CREATE TABLE instructors (
  instructor_id VARCHAR(30) NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

INSERT INTO instructors VALUES ('1224345','Tommy','Allen'),
('1654997','Bobby','Johnson'),
('1728375','Ryan','Silverspoon');




CREATE TABLE courses (
  course_id VARCHAR(30) NOT NULL PRIMARY KEY,
  course_name VARCHAR(60) NOT NULL,
  instructor_id VARCHAR(60) NOT NULL
);

INSERT INTO courses VALUES ('CS110','Intro to Computers','1224345'),
('CS348','Information Systems','1654997'),
('CS250','Computer Architecture','1654997'),
('CS448','Intro to Data Bases','1224345'),
('MA511','Linear Algebra','1728375'),
('CS503','Operating System','1224345'),
('MA525','Intro to Complex Analysis','1728375'),
('ECE264','Advanced C Programming','1654997'),
('ECE255','Intro to Electric Analysis & Design','1728375');

CREATE TABLE enroll (
  student_id VARCHAR(30) NOT NULL,
  course_id VARCHAR(30) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students (student_id)
    ON DELETE CASCADE,
  
);

CREATE TABLE grade (
  student_id VARCHAR(30) NOT NULL,
  course_id VARCHAR(30) NOT NULL,
  value VARCHAR(3) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students (student_id)
    ON DELETE CASCADE,
 (
);
