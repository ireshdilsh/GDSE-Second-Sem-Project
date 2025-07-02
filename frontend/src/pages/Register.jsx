import React from 'react'
import '../styles/register.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <div className="register-form">
                <img src={logo} alt="logo" />
                <p id='title'>Join SkillSpark – Learn. Teach. Grow.</p>
                <p id='description'>Create your free account to start learning new skills or sharing your own.
                </p>

                <div className="goto-register">
                    <p></p>
                    <Link to="/navigate/user/auth/login">signin here</Link>
                </div>
            </div>
        </div>
    )
}
