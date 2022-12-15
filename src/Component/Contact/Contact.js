import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1 className='ContactHeading1'>Contact Us</h1>
      <h5 className='containerheading5'>This is the about of Contact US</h5>
      <div className='Contact'>
        <div className='contactLeftContainer'>
          <img className='Contactimg' src='./pictures/4949462_19739.jpg' />
        </div>
        <div className='contactrightContainer'>
          <div className='inputcontainer'>
            <div className='Inputfield'>
              <input type='text' className='Inputheading' placeholder='Full Name'></input>
              <div className='inputLine'></div>
            </div>
            <div className='Inputfield'>
              <input type='Email' className='Inputheading' placeholder='Email'></input>
              <div className='inputLine'></div>
            </div>
            <div className='Inputfield'>
              <input type='Number' className='Inputheading' placeholder='Ph.no'></input>
              <div className='inputLine'></div>
            </div>
            <div className='Inputfield'>
              <input type ='Number' className='Inputheading' placeholder='Whatsapp no'></input>
              <div className='inputLine'></div>
            </div>

            <a href='https://mail.google.com/' target='_blank'>
              <button className='Contactbtn'> Contact us</button>
            </a>
          </div>
          <div className='Iconcontainer'>
            <h1 className='ContactHeading'>Contact</h1>
            <h5 className='containerheading5'>Sharmaankit.as1995 @gmail.com</h5>
            <h1 className='ContactHeading'>Address</h1>
            <h5 className='containerheading5'>Sonipat State:- Haryana (India)</h5>
            <div className='IconContainer'>
              <span className='iconImg'>
                <a href='https://www.facebook.com/people/Ankit-Sharma/100004227007840/' target='_blank'>
                  <i class="fa-brands fa-facebook-f icon"></i>
                </a>
              </span>
              <span className='iconImg'>
                <a href='https://www.instagram.com/signupankitsharma/' target='_blank'>
                  <i class="fa-brands fa-instagram icon"></i>
                </a>
              </span>
              <span className='iconImg'>
                <a href='https://www.linkedin.com/in/ankit-sharma-6a9813241/' target='_blank'>
                <i class="fa-brands fa-linkedin icon"></i>
                </a>
              </span>
              <span className='iconImg'>
                <a href='https://github.com/AnkitsharmaMERN' target='_blank'>
                <i class="fa-brands fa-github icon"></i>
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact