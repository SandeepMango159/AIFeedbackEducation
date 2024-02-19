import { NavLink } from "react-router-dom";

export default function NavigationBar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink 
                        to={"/"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Home
                        </NavLink>
					</li>
					<li>
						<NavLink 
                        to={"/teacherdashboard"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Teacher Dashboard
                        </NavLink>
					</li>
					<li>
						<NavLink
                        to={"/studentdashboard"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Student Dashboard
                        </NavLink>
					</li>
					<li>
						<NavLink 
                        to={"/help"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Help
                        </NavLink>
					</li>
					<li>
						<NavLink 
                        to={"/settings"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Settings
                        </NavLink>
					</li>
					<li>
						<NavLink 
                        to={"/admindashboard"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Admin Dashboard
                        </NavLink>
					</li>
					<li>
						<NavLink 
                        to={"/login"}
						className={({ isActive }) => {
							return isActive ? 'current' : '';
						}}>
                            Login
                        </NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
