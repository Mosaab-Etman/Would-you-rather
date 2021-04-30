import { _getUsers } from '../../_DATA'

export const GET_USERS = 'GET_USERS'
export const AUTH_USER = 'AUTH_USER'

export const getUsers = () => {
    return async dispatch => {
        const response = await _getUsers()

        dispatch({type: GET_USERS, payload: response})
    }
} 

export const authUser = user => {
    return {
        type: AUTH_USER,
        payload: user ? user.id : null
    }
}