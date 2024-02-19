import { Link } from "react-router-dom";

export default function TeacherdashboardPage() {

    // const assignments = [1, 2, 3];

    return (
		<>
			<h1>Teacher Dashboard Page</h1>
            <div>
                <Link
                    to={"/teacherdashboard/assignments-view"}>
                    View Assignments
                </Link>
            </div>
            <div>
                <Link
                    to={"/teacherdashboard/analytics"}>
                    View Analytics
                </Link>
            </div>
		</>
	);

}