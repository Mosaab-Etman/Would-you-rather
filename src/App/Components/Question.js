import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getQuestions, saveQuestionAnswer } from '../Actions/questions'
import { getUsers } from '../Actions/users'
import NotFound from '../Views/NotFound'
import './Question.scss'

const Question = (props) => {

    const { id, authedUser, questions, question, author, users,  getQuestions, getUsers, saveQuestionAnswer} = props
    const [ answer, setAnswer ] = useState(null)

    useEffect(() => {
        getQuestions()
        getUsers()
    // eslint-disable-next-line
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        saveQuestionAnswer({
            authedUser, 
            qid: question.id,
            answer
        })
    }

    // Form of answering the question
    const renderForm = () => (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
            <h3>Would you rather</h3>

            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" id="optionOne" name="question"
                    onClick={() => setAnswer('optionOne')}/>
                    <label htmlFor="optionOne">{question && question.optionOne.text}</label>
                </div>
            </div>

            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" id="optionTwo" name="question"
                    onClick={() => setAnswer('optionTwo')}/>
                    <label htmlFor="optionTwo">{question &&  question.optionTwo.text}</label>
                </div>
            </div>

            <button type="submit" className="ui primary button">submit</button>
        </form>
    )

    // precetanges of the results 
    const totalVotes = question && question.optionOne.votes.length + question.optionTwo.votes.length
    const voteOnePrecentage = Math.ceil(question && (question.optionOne.votes.length / totalVotes) * 100)
    const voteTwoPrecentage = Math.ceil(question && (question.optionTwo.votes.length / totalVotes) * 100)

    // results of the answered question
    const renderResults = () => (
        <div className="results">
            <h2>Results</h2>
            <div className={`result ${question.optionOne.votes.includes(authedUser) && 'voted'}`}>
                <p>{`Would you rahter ${question.optionOne.text}`}</p>
                <div className="result-numbers">
                    <p>{`${voteOnePrecentage} %`}</p>
                    <p>{`${question.optionOne.votes.length} out of ${totalVotes}`}</p>
                </div>
                
            </div>

            <div className={`result ${question.optionTwo.votes.includes(authedUser) && 'voted'}`}>
                <p>{`Would you rahter ${question.optionTwo.text}`}</p>
                <div className="result-numbers">
                    <p>{`${voteTwoPrecentage} %`}</p>
                    <p>{`${question.optionTwo.votes.length} out of ${totalVotes}`}</p>
                </div>
            </div>
        </div>
        
    )

    return (
        <React.Fragment>
        {questions && Object.keys(questions).includes(id) ? <div className="ui card question">
            <h3 className="question_header">{`${question && question.author} asks:`}</h3>
            <div className="question_body">
                <div className="ui padded grid">
                    <div className="image-wrapper eight wide column">
                        <img src={author && author.avatarURL} alt="user"/>
                    </div>
                    <div className="eight wide column">
                        {question && Object.keys(users[authedUser].answers).includes(question.id) ? renderResults() : renderForm()}
                    </div>
                </div>
            </div>
        </div> : <NotFound/>}
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {

    const { id } = ownProps.match.params
    const question = state.questions[id]
    const author = question ? state.users[question.author] : null

    return {
        id,
        authedUser: state.authedUserId,
        questions: state.questions,
        question,
        author,
        users: state.users
    }
}

export default connect(mapStateToProps, { getQuestions, getUsers, saveQuestionAnswer })(Question)
