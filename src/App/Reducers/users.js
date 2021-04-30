import { GET_USERS, AUTH_USER } from '../Actions/users'
import { SAVE_QUESTION_ANSWER } from '../Actions/questions'

export const users = (state = {}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, ...action.payload}
        case SAVE_QUESTION_ANSWER:
            return {...state, ...action.payload.users}
        default:
            return state
    }
}

export const authedUserId = (state = null, action) => {
    switch(action.type) {
        case AUTH_USER:
            return action.payload
        default:
            return state
    }
}
