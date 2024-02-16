import "./App.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentdashboardPage from "./pages/Student/StudentdashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import StudentdashboardAssignmentPage from "./pages/Student/StudentdashboardAssignmentPage";
import Layout from "./components/Layout";
import TeacherdashboardPage from "./pages/Teacher/TeacherdashboardPage";
import TeacherAssignmentsViewPage from "./pages/Teacher/TeacherAssignmentsViewPage";
import TeacherAssignmentsFormPage from "./pages/Teacher/TeacherAssignmentsFormPage";
import TeacherAssignmentsSubmissionsPage from "./pages/Teacher/TeacherAssignmentsSubmissionsPage";

// zet hier routes ff in
const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout></Layout>,
			errorElement: <NotFoundPage></NotFoundPage>,
			children: [
				{
					path: "/",
					element: <HomePage></HomePage>,
					errorElement: <NotFoundPage></NotFoundPage>,
				},
				{
					path: "/teacherdashboard",
					element: <TeacherdashboardPage></TeacherdashboardPage>,
				},
				{
					path: "/teacherdashboard/assignments-view",
					element: <TeacherAssignmentsViewPage></TeacherAssignmentsViewPage>,
				},
				{
					path: "/teacherdashboard/assignments-form",
					element: <TeacherAssignmentsFormPage></TeacherAssignmentsFormPage>,
				},
				{
					path: "/teacherdashboard/assignments-submissions/:assignmentId",
					element: <TeacherAssignmentsSubmissionsPage></TeacherAssignmentsSubmissionsPage>
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
			]
		}
	],
	{
		basename: "/AIFeedbackEducation/",
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
