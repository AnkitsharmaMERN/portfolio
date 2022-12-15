import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'



const Portfolio = () => {
    return (
        <div className='Portcontainer'>
            <h1 className='PortHeading1'>Latest Works</h1>
            <h3 className='PortHeading3'>
                <ul>
                    <li>
                        The Front-end use of React.js and maintaining parent and child elements by using state and props in react.js
                    </li>
                    <li>
                        In React.js to build High-quality, scalable and reusable components and front-end solution.
                    </li>
                    <li>
                        I have Done Some project in MERN STACK
                    </li>
                </ul>

            </h3>
            <div className='buttonContainer'>
                <a href='https://github.com/AnkitsharmaMERN'>
                    <button className='Portbtn'> Github </button>
                </a>
                <button className='Portbtn'> Website </button>
                <button className='Portbtn'>Contact Me</button>
            </div>
            <div className='PortCardContainer'>
                <div className='PortCard'>
                    <img className='PortImage' src='./pictures/depositphotos_60236645-stock-photo-note-book.jpg' />
                    <h2 className='Portheading2'>INotebook</h2>
                    <p className='PoetP'>This is the my first project of Notebook</p>
                </div>
                <div className='PortCard'>
                    <img className='PortImage' src='./pictures/todo-list-javascript-project.png' />
                    <h2 className='Portheading2'>ToDo List</h2>
                    <p className='PoetP'>This is my Second project of Todo List </p>
                </div>
                <div className='PortCard'>
                    <img className='PortImage' src='./pictures/unnamed.webp' />
                    <h2 className='Portheading2'>Movie App</h2>
                    <p className='PoetP'>This is my third project of movie website</p>
                </div>

            </div>

            <button className='PortRbtn'>Download Resume</button>




        </div>
    )
}

export default Portfolio