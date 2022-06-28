import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Projects} from './components/Projects/Projects'
import {Contacts} from './components/Contacts/Contacts'
import {Footer} from './components/Footer/Footer'
import {AboutMe} from './components/AboutMe/AboutMe'
import {Skills} from './components/Skills/Skills'

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App
