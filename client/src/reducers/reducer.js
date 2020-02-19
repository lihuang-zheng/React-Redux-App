// import actions
import { GET_DOG_DATA } from "../actions"

//initial state
const initialState = {
    dogImg: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOG_DATA:
            return {
                dogImg: action.payload
            }

        default:
            return state
    }
}

export default reducer