import axios from "axios";

const url="http://localhost:3003/users"

export default function userAction() {
    return({
        type:'userAction',
        payload:axios.get(url).then((result) => result.data)
    })
}