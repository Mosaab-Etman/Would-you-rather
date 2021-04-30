import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../../_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export const getQuestions = () => {
    return async (dispatch) => {
        const response = await _getQuestions()

        dispatch({type: GET_QUESTIONS, payload: response})
    }
}

export const saveQuestion = (question) => {
    return async (dispacth) => {
        const response = await _saveQuestion(question)

        dispacth({type: SAVE_QUESTION, payload: response})
    }
}

export const saveQuestionAnswer = (answerInfo) => {
    return async (dispacth) => {
        const response = await _saveQuestionAnswer(answerInfo)
        
        dispacth({type: SAVE_QUESTION_ANSWER, payload: response})
    }
}

