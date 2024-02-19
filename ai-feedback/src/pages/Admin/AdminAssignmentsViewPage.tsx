import TeacherAssignment from "../../components/Teacher/TeacherAssignment";

export default function AdminAssignmentsViewPage() {

    return (
    <>
        <h1>Admin asignments page </h1>
        <p>Admin can see all assignments from all teachers/courses/students etc</p>

        {/* Verander nog naar effectieve admin assignment component  */}
        <div className="assignment-container">       
            <TeacherAssignment nr={1}></TeacherAssignment>
            <TeacherAssignment nr={2}></TeacherAssignment>
            <TeacherAssignment nr={3}></TeacherAssignment>
        </div>
    </>
    )
}