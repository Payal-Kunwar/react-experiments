import { useParams } from 'react-router-dom'
export default function() {
    const { userid } = useParams()
    return (
        <>
            <h1>User is {userid}</h1>
        </>
    )
}