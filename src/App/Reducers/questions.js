import { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../Actions/questions'

export const questions = (state = {}, action) => {
    switch(action.type) {
        case GET_QUESTIONS:
            return {...state, ...action.payload}
        case SAVE_QUESTION:
            return {...state, [action.payload.id]: action.payload}
        case SAVE_QUESTION_ANSWER:
            return {...state, ...action.payload.questions}
        default:
            return state
    }
}