interface FormValues {
    name: string;
    email: string;
    password: string;
}

export default function RegisterForm() {

    function submitAssignment(e: React.FormEvent<HTMLFormElement>) {
        // const nrSubmissions = formData.get("submissionLimit");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues: FormValues = {
            name: formData.get("name") as string,
            email: formData.get("description") as string,
            password: formData.get("problemDescription") as string,
        };
        console.log(formValues);
        alert(`You created an assignment with \n ${formValues.name} \n ${formValues.email} \n ${formValues.password}`);
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
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" required></input>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}