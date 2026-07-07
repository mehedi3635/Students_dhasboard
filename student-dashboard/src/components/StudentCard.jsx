function StudentCard({student,onDelete}){

    return(

        <div className="card">

            <h2>{student.name}</h2>

            <p>Department : {student.department}</p>

            <p>CGPA : {student.cgpa}</p>

            <p>

                Status :

                {student.isActive ? " Active" : " Inactive"}

            </p>

            {student.cgpa>=3.75 &&

                <p>Excellent Student</p>

            }

            <p>

                {

                    (()=>{

                        if(student.cgpa>=3.50){

                            return "Good Result"

                        }

                        return "Need Improvement"

                    })()

                }

            </p>

            <button

            onClick={()=>onDelete(student.id)}

            >

                Delete

            </button>

        </div>

    )

}

export default StudentCard;