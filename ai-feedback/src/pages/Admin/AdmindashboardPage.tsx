import { Link } from "react-router-dom";


export default function AdmindashboardPage() {

    return(
        <>
        <h1>Admin Dashboard</h1>
        <div>
            <Link
                to={"/admindashboard/assignments-view"}>
                View Assignments
            </Link>
        </div>
        <div>
            <Link
                to={"/admindashboard/ai-tools"}>
                AI Tools
            </Link>
        </div>
        
        </>
        
    )
}