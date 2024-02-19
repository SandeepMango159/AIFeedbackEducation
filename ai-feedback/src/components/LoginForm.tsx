import { Link } from "react-router-dom";

interface FormValues {
    name: string;
    password: string;
}

export default function LoginForm() {

    function submitAssignment(e: React.FormEvent<HTMLFormElement>) {
        // const nrSubmissions = formData.get("submissionLimit");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues: FormValues = {
            name: formData.get("name") as string,
            password: formData.get("problemDescription") as string,
        };
        console.log(formValues);
        alert(`You created an assignment with \n ${formValues.name} \n ${formValues.password}`);
    }
    return (
        <>
        <div className="container">
            <h1>Login</h1>
            <form onSubmit ={submitAssignment}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" required></input>
                </div>
                <input type="submit" value="Submit"/>
                <Link 
                        to={"/register"}
                        >
                        Don&apos;t have an account yet? Register
                </Link>
            </form>
        </div>
        </>
    )
}