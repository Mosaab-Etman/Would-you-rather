import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../Actions/questions'
import { getUsers } from '../Actions/users'
import QuestionCard from '../Components/QuestionCard'
import './Home.scss'

const Home = ({ authedUser, getUsers, questions, getQuestions}) => {

    const [ questionsCategory, setQuestionsCategory ] = useState('unAnswered')

    useEffect(() => {
        getUsers()
        getQuestions()
            
    // eslint-disable-next-line
    }, [])
    
    const answeredQuestionsKeys = Object.keys(authedUser.answers)
    const answeredQuestions = Object.values(questions).filter(question => {
        return answeredQuestionsKeys.includes(question.id)
    })
    const unAnsweredQuestions = Object.values(questions).filter(question => {
        return !answeredQuestionsKeys.includes(question.id)
        })

    const unAnsweredSorted = unAnsweredQuestions.sort((a, b) => {
        return b.timestamp - a.timestamp
    })

    const shownQuestions = questionsCategory === 'answered' ? answeredQuestions : unAnsweredSorted
    
    return (
        <React.Fragment>
            {<div className="questions-list">
            <div className="questions_btns">
                <button 
                className={`ui ${questionsCategory === 'answered' ? 'primary' : null} button`}
                onClick={() => setQuestionsCategory('answered')}>
                    Answered
                </button>
                <button 
                className={`ui ${questionsCategory === 'unAnswered' ? 'primary' : null} button`}
                onClick={() => setQuestionsCategory('unAnswered')}>
                    UnAswered
                </button>
            </div>
            <div className="ui cards">
                {shownQuestions.map(question => {
                    return <QuestionCard question={question} key={question.id}/>
                })}
            </div>
        </div>}
        </React.Fragment>
        
    )
}

const mapStateToProps = state => {
    const authedUser = state.users[state.authedUserId]
    const { questions } = state
    return { authedUser ,questions }
}

export default connect(mapStateToProps, { getQuestions, getUsers })(Home)
