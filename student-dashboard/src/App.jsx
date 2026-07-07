import {useState} from "react";

import Navbar from "./components/Navbar";

import StudentCard from "./components/StudentCard";

import StudentList from "./components/StudentList";

import StudentForm from "./components/StudentForm";

import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";

import studentsData from "./data/student";
import "./App.css";

function App(){

    const [students,setStudents]=useState(studentsData);

    const addStudent=(student)=>{

        setStudents([...students,student]);

    }

    const deleteStudent=(id)=>{

        setStudents(

            students.filter(student=>student.id!==id)

        )

    }

    let message="";

    if(students.length===0){

        message="No Students Found";

    }

    else if(students.length<=5){

        message="Small Batch";

    }

    else{

        message="Large Batch";

    }

    let batch="";

    switch(true){

        case students.length===0:

            batch="No Students Found";

            break;

        case students.length<=5:

            batch="Small Batch";

            break;

        default:

            batch="Large Batch";

    }

    return(

        <>

        <Navbar total={students.length}/>

        <Home message={message}/>

        <p>{students.length>5?"Large Batch":"Small Batch"}</p>

        <StudentForm addStudent={addStudent}/>

        <StudentList>

        {

            students.map(student=>

            <ErrorBoundary key={student.id}>

                <StudentCard

                student={student}

                onDelete={deleteStudent}

                />

            </ErrorBoundary>

            )

        }

        </StudentList>

        </>

    )

}

export default App;