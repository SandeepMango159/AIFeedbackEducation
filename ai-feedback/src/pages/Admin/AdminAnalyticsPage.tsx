import chart from "../../assets/chart.png";

export default function AdminAnalyticsPage() {
    return (
        <>
            <h1>This is the analytics page</h1>
            <p> 
                <label>Filter Assignments</label>
                <input></input>
            </p>
            <p> 
                <label>Filter Students</label>
                <input></input>
             </p>
    
            <p>
                a chart for average improvement per student or per assignment
                <img src={chart} alt="Chart" className="chart-img"
                    style={{
                        width: "50%",
                        display: "block", /* Ensures images don't have extra space below */
                        margin: "auto", /* Centers images horizontally */
                    }}></img>
            </p>
            <p>
            a chart for abslute improvement (which is the difference between the first and the latest submissioin) per student or per average per assignment
                <img src={chart} alt="Chart" className="chart-img"
                    style={{
                        width: "50%",
                        display: "block", /* Ensures images don't have extra space below */
                        margin: "auto", /* Centers images horizontally */
                    }}></img>
            </p>
            <p>
            a chart showing the final scores and or average per assignment
                <img src={chart} alt="Chart" className="chart-img"
                    style={{
                        width: "50%",
                        display: "block", /* Ensures images don't have extra space below */
                        margin: "auto", /* Centers images horizontally */
                    }}></img>
            </p>
            <p>
            a chart showing average feedback scores per assignment
                <img src={chart} alt="Chart" className="chart-img"
                    style={{
                        width: "50%",
                        display: "block", /* Ensures images don't have extra space below */
                        margin: "auto", /* Centers images horizontally */
                    }}></img>
            </p>
        </>
    )
}