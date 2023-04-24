import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='Container'>
      <div className='LeftContainer'>
        <h4 className='heading'>THIS IS ME</h4>
        <h1 className='heading_1'>ANKIT SHARMA</h1>
        <h4 className='heading'>I am looking for an opportunity to be a part of a dynamic and progressive 
        organization in Full Stack Web Development (with proficiency in MERN stack). 
        I am excited to join a challenging work environment where I can enhance my skills and gain 
        valuable experience while contributing to the company's growth and success.	</h4>
       <Link to='/Contact'><button type='button' className='btn'>HIRE ME</button></Link>
      </div>
      <div className='RightContainer'>
        <img className='image' alt='img' src='../pictures/IMG_20220522_181801_752.jpg' />
      </div>

    </div>
  )
}

export default Home
