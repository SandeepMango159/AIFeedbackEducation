import { NavLink, Outlet } from "react-router-dom";

export default function StudentdashboardPage() {
	const assignments = [1, 2, 3];

	return (
		<>
			<h1>Student Dashboard Page</h1>
			<div>
				{assignments.map((assignment) => (
					<p key={assignment}>
						<NavLink 
                            to={`/studentdashboard/assignment/${assignment}`}
                            className={({ isActive }) => {
                                return isActive ? 'text-primary-700' : '';
                            }}
                        >
							Assignment {assignment}
						</NavLink>
					</p>
				))}
			</div>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	);
}
