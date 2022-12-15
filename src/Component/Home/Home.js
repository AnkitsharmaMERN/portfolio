import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='Container'>
      <div className='LeftContainer'>
        <h4 className='heading'>THIS IS ME</h4>
        <h1 className='heading_1'>ANKIT SHARMA</h1>
        <h4 className='heading'>To get a career start position, in either of the domain (Full Stack Web Development (MERN STACK) or System Security ) 
        in a dynamic and progressive organization that have the challenging environment 
        and that can enhance my caliber with increase in experience and skills.	</h4>
       <Link to='/Contact'><button type='button' className='btn'>HIRE ME</button></Link>
      </div>
      <div className='RightContainer'>
        <img className='image' src='../pictures/IMG_20220522_181801_752.jpg' />
      </div>

    </div>
  )
}

export default Home
