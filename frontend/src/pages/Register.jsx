import React from 'react'
import '../styles/register.css'
import logo from '../assets/logo.png'

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
                   
                </div>
            </div>
        </div>
    )
}
