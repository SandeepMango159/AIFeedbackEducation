import { useParams } from "react-router-dom";
import TeacherAssignmentSubmissionProps from "../../components/props/TeacherAssignmentSubmissionProps";
import TeacherAssignmentSubmission from "../../components/Teacher/TeacherAssignmentSubmission";



export default function TeacherAssignmentsSubmissionsPage( ) {

    // param from link 
    const params = useParams<{assignmentId: string }>();

    // gewoon ff mockup assignment submissions maken 
    const submissions : TeacherAssignmentSubmissionProps[] = [  
        {
            studentName: "John Doe",
            isFinalSubmission: true,
            currentGrade: 85,
            previousGrade: 75,
            improvement: 10,
            submissionCount: 3
        },
        {
            studentName: "Alice Smith",
            isFinalSubmission: false,
            currentGrade: 70,
            previousGrade: 65,
            improvement: 5,
            submissionCount: 2
        },
        {
            studentName: "Bob Johnson",
            isFinalSubmission: true,
            currentGrade: 92,
            previousGrade: 88,
            improvement: 4,
            submissionCount: 4
        }
    ];


    return (
    <>
        <h1>Teacher assignments submissions page</h1>
        <p>You are visiting the teacher assignments submissions page for assignment {params.assignmentId} where you can see all the students progress etc on an assignment</p>

        {submissions.map((submission, index) => (
                <TeacherAssignmentSubmission key={index} {...submission} ></    TeacherAssignmentSubmission>
        ))}


    </>
    )
}