import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/about.css'

export default function About() {

    const navigate = useNavigate();

    return (
        <div className="about-page">
            <nav className='about-navbar'>
                <div className="left-side" onClick={() => navigate('/')}>
                    <h1><h1><h4>Lexora</h4></h1></h1>
                    <p>About us</p>
                </div>
                <div className="right-side">
                    <button id='sign-in'>Sign in</button>
                    <button id='sign-up'>Sign up</button>
                </div>
            </nav>

            <div className="about-body">
                <h1>Everyone has a <br /> story to tell</h1>
                <p className='about-desc'>Medium is a home for human stories and ideas. Here, anyone can share <br /> knowledge and wisdom with the world—without having to build <br /> a mailing list or a following first. The internet is noisy and chaotic; <br /> Medium is quiet yet full of insight. It's simple, beautiful, collaborative, <br /> and helps you find the right readers for whatever you have to say.</p>
                <p className='about-desc-secnd-title'>Ultimately, our goal is to deepen our collective <br /> understanding of the world through the power of <br /> writing.</p>
                <p className='about-desc'>We believe that what you read and write matters. Words can divide or <br /> empower us, inspire or discourage us. In a world where the most <br /> sensational and surface-level stories often win, we're building a system <br /> that rewards depth, nuance, and time well spent. A space for thoughtful <br /> conversation more than drive-by takes, and substance over packaging.</p>
                <p className="about-desc">Over 100 million people connect and share their wisdom on Lexora <br /> every month. They're software developers, amateur novelists, product <br /> designers, CEOs, and anyone burning with a story they need to get out <br /> into the world. They write about what they're working on, what's keeping <br /> them up at night, what they've lived through, and what they've learned <br /> that the rest of us might want to know too.</p>
                <p className="about-desc">Instead of selling ads or selling your data, we're supported by a growing <br /> community of over a million Lexora members who believe in our <br /> mission. If you're new here, start reading. Dive deeper into whatever <br /> matters to you. Find a post that helps you learn something new, or <br /> reconsider something familiar—and then write your story.</p>
            </div>
        </div>
    )
}
