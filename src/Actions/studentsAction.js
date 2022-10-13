import axios from "axios";

const url="http://localhost:3003/users"

export default function studentAction() {
    return({
        type:'studentAction',
        payload:axios.get(url).then((result) => result.data)
    })
} 