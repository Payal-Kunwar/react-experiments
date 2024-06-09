import { useLoaderData } from 'react-router-dom'


export default function() {
    const data = useLoaderData()
    return (
        <>
            <div>
                {
                    data.map(item => 
                        <h1>{item.name}</h1>
                    )
                }
            </div>
        </>
    )
}

export const fetchPeople = async() => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return result.json()
}