import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../Actions/users'
import Leader from '../Components/Leader'

const  LeaderBoard = ({ getUsers, users }) => {

    useEffect(() => {
        getUsers()
    // eslint-disable-next-line
    }, [])

    const scoredUsers = users && users.map(user => {
        return {...user, score: Object.keys(user.answers).length + user.questions.length}
    })

    const sortedUsers = scoredUsers.sort((a, b) => {
        return b.score - a.score
    })

    return (
        <div className="board">
            {users && sortedUsers.map((user, index) => {
                return <Leader user={user} key={user.id} index={index}/>
                }
            )} 
        </div>
    )
}

const mapStateToProps = state => {
    return { users: Object.values(state.users) }
}

export default connect(mapStateToProps, { getUsers })(LeaderBoard)
