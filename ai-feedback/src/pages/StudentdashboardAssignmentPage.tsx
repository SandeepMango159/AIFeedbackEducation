import { useParams } from "react-router-dom"

export default function StudentdashboardAssignmentPage() {

    // via useparams kan je zien welke params deze pagina krijgt als er daarnaartoe wordt geklikt in een router
    // via <{dsf:type}> weet de program al wa die kan verwachten (enkel in typescript) 
    const params = useParams<{assignmentId: string }>();

    console.log(params);
    

    return (
        <>
        <h1>Assignment Page</h1>
        <p>You clicked to see assignment {params.assignmentId} in detail</p>
        </>
    )

}