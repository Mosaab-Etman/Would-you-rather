import React from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

const QuestionCard = ({question, users}) => {

    const history = useHistory()

    const viewQuestion = (id) => {
        history.push(`/questions/${id}`)
    }

    return (
        <div className="card">
            <div className="content">
                <img className="right floated mini ui image" 
                src={users[question.author].avatarURL} alt="avatar"/>
                <div className="header">
                    {`${question.author} asks:`}
                </div>
                <div className="description">
                <p>Would you rather</p>
                    {question.optionOne.text}
                </div>
            </div>
            <div className="extra content">
                <div className="ui brown inverted button" onClick={() => viewQuestion(question.id)}>View poll</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { users: state.users }
}
export default connect(mapStateToProps)(QuestionCard)
