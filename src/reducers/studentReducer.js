export default function studentReducer(state = [], action)
{
    //yes / or -> conditional statements......
    switch (action.type) {
        case 'studentAction':
            return action.payload; break;

        default:
            return state    

    }
}