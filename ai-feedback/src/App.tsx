import "./App.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentdashboardPage from "./pages/StudentdashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentdashboardAssignmentPage from "./pages/StudentdashboardAssignmentPage";

// zet hier routes ff in
const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <HomePage></HomePage>,
			errorElement: <NotFoundPage></NotFoundPage>,
		},
		{
			path: "/studentdashboard",
			element: <StudentdashboardPage></StudentdashboardPage>,
			children: [
				{
					path: "/studentdashboard/assignment/:assignmentId",
					element: <StudentdashboardAssignmentPage></StudentdashboardAssignmentPage>,
				},
			]
		},
	],
	{
		basename: "/AIFeedbackEducation",
	},
);

function App() {

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
