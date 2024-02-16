interface FormValues {
    dueDate: Date;
    submissionLimit: number;
    description: string;
}



export default function TeacherAssignmentForm() {

    function submitAssignment(e: React.FormEvent<HTMLFormElement>) {
        // const nrSubmissions = formData.get("submissionLimit");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues: FormValues = {
            dueDate: new Date(formData.get("dueDate") as string),
            submissionLimit: parseInt(formData.get("submissionLimit") as string, 10),
            description: formData.get("description") as string
        };
        console.log(formValues);
        alert(`You created an assignment with \n ${formValues.dueDate} \n ${formValues.submissionLimit} \n ${formValues.description}`);
    }

    return (
        <>
        <div className="container">
            <h1>Create Assignment</h1>
            <form onSubmit ={submitAssignment}>
                <div className="form-group">
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="submissionLimit">Number of Submissions Allowed:</label>
                    <input type="number" id="submissionLimit" name="submissionLimit" min="1" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description/Instructions:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}