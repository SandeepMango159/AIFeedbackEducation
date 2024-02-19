import StudentAssignment, { StudentAssignmentProps } from "../../components/Student/StudentAssignment";
import StudentChatModule from "../../components/Student/StudentChatModule";

export default function StudentAssigntmentViewPage () {

    
    const assignmentExample: StudentAssignmentProps ={
        nr: 1,
        isFinalSubmission: true,
        currentGrade: 85,
        previousGrade: 75,
        improvement: 10,
    };

    return (
    <>
    <h1>This is the details page for an assignment</h1>

    <div>
        <StudentAssignment {...assignmentExample} ></StudentAssignment>
    </div>
    <p>Here are the instructions for the assignment </p>

    <h1>Here is the conversation for the assignment</h1>
    <StudentChatModule></StudentChatModule>
    </>
    )
}