import { useParams } from "react-router-dom"

export function User() {

    const {user} = useParams();

    return (
        <div>User, user: {user}</div>
    )
}