import React from 'react'
import '../styles/register.css'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

    const navigate = useNavigate()

    const gotoEmailWithSinUp = () => {
        navigate('/sign/up/with/email')
    }

    return (
        <div>
            <div className="register-form">
                <img src={logo} alt="logo" />
                <p id='title'>Join SkillSpark – Learn. Teach. Grow.</p>
                <p id='description'>Create your free account to start learning new skills or sharing your own.
                </p>
                <button id='google'>Continue With Google</button>
                <button id='email' onClick={gotoEmailWithSinUp}>Continue With Email</button>
                <div className="goto-login">
                    <p>if you have an account ?</p>
                    <Link to="/navigate/user/auth/login">signin here</Link>
                </div>
            </div>
        </div>
    )
}
