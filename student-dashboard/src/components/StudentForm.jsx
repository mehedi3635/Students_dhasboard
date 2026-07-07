import {useState} from "react";


function StudentForm({addStudent}){

    const [name,setName]=useState("");

    const [department,setDepartment]=useState("");

    const [cgpa,setCgpa]=useState("");

    const submitHandler=(e)=>{

        e.preventDefault();

        const student={

            id:Date.now(),

            name,

            department,

            cgpa:Number(cgpa),

            isActive:true

        }

        addStudent(student);

        setName("");

        setDepartment("");

        setCgpa("");

    }

    return(

        <form onSubmit={submitHandler}>

            <input

            value={name}

            onChange={(e)=>setName(e.target.value)}

            placeholder="Student Name"

            />

            <input

            value={department}

            onChange={(e)=>setDepartment(e.target.value)}

            placeholder="Department"

            />

            <input

            type="number"

            value={cgpa}

            onChange={(e)=>setCgpa(e.target.value)}

            placeholder="CGPA"

            />

            <button style={{background:"green",color:"white"}}>

                Add Student

            </button>

        </form>

    )

}

export default StudentForm;