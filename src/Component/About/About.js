import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='AboutContainer'>
            <div className='AboutLeftContainer'>
                <img className='AboutImage' src='./pictures/person-doing-digital-survey-flat-icon-vector.webp' />
            </div>
            <div className='AboutRightContainer'>
                <h1 className='Aboutheading_1'>My Bio-Data</h1>
                <h3 className='Aboutheading'>QUALIFICATIONS:</h3>
                <h4 className='Aboutheading'>
                    <ul>
                        <li>
                            BCA (Bachelor of Computer Applications) from P.I.E.T (Panipat Institute of Engineering and Technology),
                            affiliated to Kurukshetra University, Kurukshetra (Haryana) in 2018.
                        </li>
                        <li>
                            10+2 securing 72.6% from Board of Education, Bhiwani, Haryana in 2014.
                        </li>
                        <li>
                            Matric securing 77% from Board of Education, Bhiwani, Haryana in 2012.
                        </li>
                    </ul>

                </h4>

                <div className='Subject'>
                    <h3>HTML</h3>
                </div>
                <div className='bar_line'>
                    <span className='barInner_line HTML'><p>95%</p></span>
                </div>
                <div className='Subject'>
                    <h3>CSS</h3>
                </div>
                <div className='bar_line'>
                <span className='barInner_line CSS'><p>90%</p></span>
                </div>
                <div className='Subject'>
                    <h3>JavaScript</h3>
                </div>
                <div className='bar_line'>
                    <span className='barInner_line JavaScript'><p>80%</p></span>
                </div>
                <div className='Subject'>
                    <h3>MERN</h3>
                </div>
                <div className='bar_line'>
                    <span className='barInner_line MERN'><p>70%</p></span>
                </div>
                <div className='Subject'>
                    <h3>NETWORKING</h3>
                </div>
                <div className='bar_line'>
                    <span className='barInner_line NETWORKING'><p>85%</p></span>
                </div>
                <div className='Subject'>
                    <h3>SERVER</h3>
                </div>
                <div className='bar_line'>
                    <span className='barInner_line SERVER'>
                        <p>75%
                            </p>
                        </span>
                </div>
                <button type='button' className='Aboutbtn'>Download cv</button>

            </div>

        </div>
    )
}

export default About