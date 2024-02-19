import "./App.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentdashboardPage from "./pages/Student/StudentdashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import TeacherdashboardPage from "./pages/Teacher/TeacherdashboardPage";
import TeacherAssignmentsViewPage from "./pages/Teacher/TeacherAssignmentsViewPage";
import TeacherAssignmentsFormPage from "./pages/Teacher/TeacherAssignmentsFormPage";
import TeacherAssignmentsSubmissionsPage from "./pages/Teacher/TeacherAssignmentsSubmissionsPage";
import TeacherStudentAssignmentChatMonitoringPage from "./pages/Teacher/TeacherStudentAssignmentChatMonitoringPage";
import TeacherAnalyticsPage from "./pages/Teacher/TeacherAnalyticsPage";
import StudentAssigntmentViewPage from "./pages/Student/StudentAssigntmentViewPage";
import StudentAnalyticsPage from "./pages/Student/StudentAnalyticsPage";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/Settings";

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
					element: <TeacherAssignmentsSubmissionsPage></TeacherAssignmentsSubmissionsPage>,
				},
				{
					path: "/teacherdashboard/assignments-submissions/:assignmentId/view-conversation",
					element: <TeacherStudentAssignmentChatMonitoringPage></TeacherStudentAssignmentChatMonitoringPage>
				},
				{
					path: "/teacherdashboard/analytics",
					element: <TeacherAnalyticsPage></TeacherAnalyticsPage>
				},
				{
					path: "/studentdashboard",
					element: <StudentdashboardPage></StudentdashboardPage>,
				},
				{
					path: "/studentdashboard/assignments-submissions/:assignmentId",
					element: <StudentAssigntmentViewPage></StudentAssigntmentViewPage>
				},
				{
					path: "/studentdashboard/analytics",
					element: <StudentAnalyticsPage></StudentAnalyticsPage>
				},
				{
					path: "/help",
					element: <HelpPage></HelpPage>				
				},
				{
					path: "/settings",
					element: <SettingsPage></SettingsPage>
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
