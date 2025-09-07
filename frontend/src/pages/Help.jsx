import React from 'react'
import '../styles/Help.css'

export default function Help() {
    return (
        <div>
            <nav>
                <div className="left-side">
                    <h1>Lexora</h1>
                    <p>Help Center</p>
                </div>
                <div className="right-side">
                    <a href="">Back to Lexora.com</a>
                    <button>Submit a request</button>
                </div>
            </nav>

            <footer>
                <a href="">Status</a>
                <a href="">Writers</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">About</a> 
            </footer>
        </div>
    )
}
