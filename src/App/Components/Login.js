import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUsers, authUser } from '../Actions/users'
import './Login.scss'

const Login = (props) => {

    const { users, getUsers, authUser } = props
    const [ selectedUser, setSelectedUser ] = useState(null)

    useEffect(() => {

        getUsers()

    // eslint-disable-next-line
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        authUser(users[selectedUser])
    }

    return (
        
        <div className="ui placeholder segment">
            <h2 className="ui center aligned icon header">
                Welcome to would you rather game
                <i className="sign in alternate icon"></i>
            </h2>
        
            <form className="ui form login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="field">
                    <select className="ui dropdown" 
                    onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="">Select User</option>
                        {Object.values(users).map(user =>  (
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                            )
                        )}
                    </select>
                </div>
                <button className="positive ui button" type="submit">Submit</button>
            </form>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, { getUsers, authUser })(Login)
