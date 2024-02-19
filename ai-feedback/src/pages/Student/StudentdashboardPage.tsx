import StudentAssignment, { StudentAssignmentProps } from "../../components/Student/StudentAssignment";

export default function StudentdashboardPage() {

	const assignments : StudentAssignmentProps[] = [  
        {
			nr: 1,
            isFinalSubmission: true,
            currentGrade: 85,
            previousGrade: 75,
            improvement: 10,
        },
        {
            nr: 2,
			isFinalSubmission: false,
            currentGrade: 70,
            previousGrade: 65,
            improvement: 5,
        },
        {
			nr: 3,
			isFinalSubmission: true,
            currentGrade: 92,
            previousGrade: 88,
            improvement: 4,
        }
    ];

	return (
		<>
			<h1>Student Dashboard Page</h1>
			<h1>View assignments here</h1>

		<div className="assignment-container">
		{assignments.map((assignment, index) => (
            <StudentAssignment key={index} {...assignment}></StudentAssignment>
		))}
        </div>

     
		</>
	);
}
