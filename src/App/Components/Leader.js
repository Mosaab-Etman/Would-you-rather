import React from 'react'
import './Leader.scss'

const  Leader = ({ user, index }) => {

    // Medal color of the users in the leaderboard
    const renderColor = index === 0 ? 'gold' 
                        : index === 1 ? 'gray'
                        : 'brown'

    return (
        <div className="leader">
            <i className="fas fa-medal" style={{color: renderColor}}/>
            <div className="ui padded grid">

                <div className="five wide column">
                    <div className="leader-img">
                        <img src={user.avatarURL} alt="avatar"/>
                    </div>
                </div>

                <div className="eight wide column">
                    <div className="leader-info">
                        <h3>{user.name}</h3>
                        <div className="leader-numbers">
                            <p>Answered Questions</p>
                            <p>{Object.keys(user.answers).length}</p>
                        </div>
                        <hr/>
                        <div className="leader-numbers">
                            <p>Created Questions</p>
                            <p>{user.questions.length}</p>
                        </div>
                    </div>
                </div>

                <div className="three wide column">
                    <div className="leader-score">
                        <p>Score</p>
                        <p>{user.score}</p>
                    </div>
                </div>

            </div>
        </div>        
    )
}

export default Leader
