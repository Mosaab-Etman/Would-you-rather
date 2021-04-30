import { combineReducers } from 'redux'

import { users, authedUserId } from './users'
import { questions } from './questions'

export const reducers = combineReducers({
    users,
    authedUserId,
    questions
})