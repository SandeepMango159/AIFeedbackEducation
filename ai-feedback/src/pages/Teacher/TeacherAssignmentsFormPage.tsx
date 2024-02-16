import TeacherAssignmentForm from "../../components/Teacher/TeacherAssignmentForm";
import TeacherChatModule from "../../components/Teacher/TeacherChatModule";


export default function TeacherAssignmentsFormPage() {
 
    
    return (
        <>
        <TeacherAssignmentForm></TeacherAssignmentForm>
        <TeacherChatModule initialMessages={["You've created an assignment, this is what I understood from it... ...Is this correct?", "No, this is wrong, let me explain... ... Get it now?"]}></TeacherChatModule>
        </>
    )

}