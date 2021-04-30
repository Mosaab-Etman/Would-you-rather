import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import Login from './Components/Login'
import Question from './Components/Question'
import NewQuestion from './Views/NewQuestion'
import LeaderBoard from './Views/LeaderBoard'
import NotFound from './Views/NotFound'

const App = ({authedUserId}) => {

    return (
        <BrowserRouter>
            {authedUserId && <Navbar/>}
            <Switch>
                <Route path="/" exact render={() => {
                    return authedUserId ? <Home/> : <Redirect to="/login"/>
                }}/>
                <Route path="/questions/:id" render={(props) => {
                    return authedUserId ? <Question {...props}/> : <Login/>
                }}/>
                <Route path="/add" render={() => {
                    return authedUserId ? <NewQuestion/> : <Login/>
                }}/>
                <Route path="/leader-board" render={() => {
                    return authedUserId ? <LeaderBoard/> : <Login/>
                }}/>
                <Route path="/login" render={() => {
                    return authedUserId ? <Redirect to="/"/> : <Login/>
                }}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state =>  {
    return {
        authedUserId : state.authedUserId
    }
}

export default connect(mapStateToProps)(App)
