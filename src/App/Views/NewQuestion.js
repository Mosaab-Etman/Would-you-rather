import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { saveQuestion } from '../Actions/questions'
import './NewQuestion.scss'

const NewQuestion = ({author, saveQuestion}) => {

    const [ optionOneText, setOptionOneText ] = useState('')
    const [ optionTwoText, setOptionTwoText ] = useState('')

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        saveQuestion({ optionOneText, optionTwoText, author })
        history.push('/')
    }

    return (
        <div className="ui card">
            <div className="new-question_header">
                <h2>Create New Question</h2>
            </div>
            <form className="ui form new-question_body" 
            onSubmit={(e) => handleSubmit(e)}>
                <p>Complete the question:</p>
                <div className="field">
                    <label>Would you rather...</label>
                    <input className="optoin-one" type='text' value={optionOneText} required
                    onChange={(e) => setOptionOneText(e.target.value)}/>
                </div>
                <div className="field">
                    <label>OR</label>
                    <input className="optoin-two" type='text' value={optionTwoText} required
                    onChange={(e) => setOptionTwoText(e.target.value)}/>
                </div>
                <button className="ui blue button" type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return { author : state.authedUserId }
}

export default connect(mapStateToProps, { saveQuestion })(NewQuestion)
