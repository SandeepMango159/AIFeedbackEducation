import { Link } from "react-router-dom";
import "./TeacherAssignment.css";

interface Props {
    nr: number  
}

export default function TeacherAssignment({nr}: Props) {
    return (
        <div className="assignment">
            <h2 className="assignment-title">Assignment {nr}</h2>
                <div className="assignment-info">
                    <div className="assignment-info-field">
                        <span className="field-label">Submitted:</span>
                        <span className="field-value">240</span>
                    </div>
                    <div className="assignment-info-field">
                        <span className="field-label">Left:</span>
                        <span className="field-value">60</span>
                    </div>
                    <div className="assignment-info-field">
                        <span className="field-label">Final submissions:</span>
                        <span className="field-value">120</span> 
                    </div>
                    <div className="assignment-info-field">
                        <span className="field-label">Due date:</span>
                        <span className="field-value">12/12/2026</span> 
                    </div>
                </div>
                <div className="assignment-buttons">
                    <a href="#" className="button check-submissions">Check Submissions</a>
                    <Link 
                        to={"/teacherdashboard/assignments-form"}
                        className="button edit-delete">
                        Edit/Delete
                    </Link>
                </div>
        </div>
    )
}