import { Link } from "react-router-dom";
import TeacherAssignmentSubmissionProps from "../props/TeacherAssignmentSubmissionProps";

import "./TeacherAssignmentSubmission.css"


export default function TeacherAssignmentSubmission(
    {studentName, isFinalSubmission, currentGrade, previousGrade, improvement, submissionCount} :TeacherAssignmentSubmissionProps) {

    return (
    <>
        <div className="submission-card">
            <h2>{studentName}</h2>
            <div className="submission-info">
                <div className="submission-info-field">
                    <span className="field-label">Final Submission:</span>
                    <span>{isFinalSubmission ? 'Yes' : 'No'}</span>
                    <p className="field-value">Description: Whether or not this is the final submission</p>
                </div>
                <div className="submission-info-field">
                    <span className="field-label">Current Grade:</span>
                    <span  className="field-value">{currentGrade}</span>
                    <p className="field-value">Description: Indicates the current submission&apos;s grade by the AI (maybe /100) </p>
                </div>       
                <div className="submission-info-field">
                    <span className="field-label">Previous Grade:</span>
                    <span  className="field-value">{previousGrade}</span>
                    <p className="field-value">Description: Indicates the previous submission&apos;s grade by the AI (maybe /100) </p>
                </div>        
                <div className="submission-info-field">
                    <span className="field-label">Improvement:</span>
                    <span  className="field-value">{improvement}%</span>
                    <p className="field-value">Description: Shows the improvement against the previous submission&apos;s grade by the AI in % </p>
                </div>
                <div>
                    <span className="field-label">Submissions Count:</span>
                    <span  className="field-value">{submissionCount}</span>
                    <p className="field-value">Description: The amount of times the user has submitted</p>
                </div>
            </div>
            <Link 
                // zonder "/" voor de path dan gaat die naar deze link relatief tov de huidige, ok 
                to={"view-conversation"}>
                View Conversation
            </Link>
        </div>

    </>
    )
}