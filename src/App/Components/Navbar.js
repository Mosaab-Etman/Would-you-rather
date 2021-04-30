import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { authUser } from '../Actions/users'
import './Navbar.scss'

const Navbar = ({ authedUser, authUser }) => {

    const location = useLocation()

    return (
        <div className="ui menu">
            <div className="ui container">
                <Link to="/" className={`item ${location.pathname === "/" && 'active'}`}>
                    Home
                </Link>
                <Link to="/add" 
                className={`item ${location.pathname === "/new-question" && 'active'}`}>
                    New Question
                </Link>
                <Link to="/leader-board" 
                className={`item ${location.pathname === "/leader-board" && 'active'}`}>
                    Leader Board
                </Link>
                <div className="right menu">
                    <div className="item">{`Hello ${authedUser.name}`}</div>
                    <div className="item">
                        <img className="menu_img" src={authedUser.avatarURL} alt="user"/>
                    </div>
                    <div className="item logout-btn" onClick={() => authUser(null)}>Logout</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const authedUser = state.users[state.authedUserId]
    return { authedUser }
}

export default connect(mapStateToProps, { authUser })(Navbar)



