// import { useParams } from "react-router-dom"

import { Link } from "react-router-dom";
import TeacherAssignment from "../../components/Teacher/TeacherAssignment";

export default function TeacherAssignmentsViewPage() {

    return (
        
        <>
        <h1>Teacher Assignment Page</h1>
        <Link 
                to={"/teacherdashboard/assignments-form"}>
                <button 
            className="create-assignment-button"
            style={{
                padding: "8px 16 px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px"
            }}
                >Create Assignment
            </button>
        </Link>
        
        <div className="assignment-container">       
            <TeacherAssignment nr={1}></TeacherAssignment>
            <TeacherAssignment nr={2}></TeacherAssignment>
            <TeacherAssignment nr={3}></TeacherAssignment>
        </div>

        <div className="assignment-container">
            <TeacherAssignment nr={4}></TeacherAssignment>
            <TeacherAssignment nr={5}></TeacherAssignment>
            <TeacherAssignment nr={6}></TeacherAssignment>
        </div>
        </>
    )

}