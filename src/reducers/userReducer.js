export default function userReducer(state = [], action)
{
    //yes / or -> conditional statements......
    switch (action.type) {
        case 'userAction':
            return action.payload; break;

        default:
            return state    

    }
}