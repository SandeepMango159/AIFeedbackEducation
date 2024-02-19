import { Link } from "react-router-dom";

export interface StudentAssignmentProps {
    nr: number
    isFinalSubmission: boolean;
    currentGrade: number;
    previousGrade: number;
    improvement: number;
}

export default function StudentAssignment({nr, isFinalSubmission, currentGrade, previousGrade, improvement}: StudentAssignmentProps) {

    return (
    <>
     <div className="assignment">
        <h2 className="assignment-title">Assignment {nr}</h2>
            <div className="assignment-info">
                <div className="assignment-info-field">
                <span className="field-label">Final Submission:</span>
                    <span>{isFinalSubmission ? 'Yes' : 'No'}</span>
                    <p className="field-value">Description: Whether or not this is the final submission</p>
                </div>
                <div className="assignment-info-field">
                    <span className="field-label">Submissions Left:</span>
                    <span className="field-value">60</span>
                    <p className="field-value">Description: Number of submissions left</p>

                </div>
                <div className="assignment-info-field">
                <span className="field-label">Current Grade:</span>
                    <span  className="field-value">{currentGrade}</span>
                    <p className="field-value">Description: Indicates the current submission&apos;s grade by the AI (maybe /100) </p>
                </div>
                <div className="assignment-info-field">
                <span className="field-label">Previous Grade:</span>
                    <span  className="field-value">{previousGrade}</span>
                    <p className="field-value">Description: Indicates the previous submission&apos;s grade by the AI (maybe /100) </p>
                </div>
                <div className="assignment-info-field">
                <span className="field-label">Improvement:</span>
                    <span  className="field-value">{improvement}%</span>
                    <p className="field-value">Description: Shows the improvement against the previous submission&apos;s grade by the AI in % </p>
                </div>
                <div className="assignment-info-field">
                    <span className="field-label">Due date:</span>
                    <span className="field-value">12/12/2026</span> 
                </div>
                <div className="assignment-buttons">
                    <Link
                    to={`/studentdashboard/assignments-submissions/${nr}`} className="button check-submissions">
                        Check Details
                    </Link>
                </div>
            </div>
    </div>
    </>
        
    )
}
