interface FormValues {
    name: string;
    email: string;
    problemDescription: string;
}

export default function ContactForm() {

    function submitAssignment(e: React.FormEvent<HTMLFormElement>) {
        // const nrSubmissions = formData.get("submissionLimit");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues: FormValues = {
            name: formData.get("name") as string,
            email: formData.get("description") as string,
            problemDescription: formData.get("problemDescription") as string,
        };
        console.log(formValues);
        alert(`You created an assignment with \n ${formValues.name} \n ${formValues.email} \n ${formValues.problemDescription}`);
    }
    return (
        <>
        <div className="container">
            <h1>Contact Form</h1>
            <form onSubmit ={submitAssignment}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="problemDescription">Problem Description:</label>
                    <textarea id="problemDescription" name="problemDescription" required></textarea>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}