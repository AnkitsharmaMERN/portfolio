import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div className='ServiceContainer'>
            <h1 className='Serviceheading_1'>Services Offers</h1>
            <div className='Aboutheading'>
                <h4> EXPERIENCE: (2 year)</h4>
                <ul>
                    <li>
                        Worked as a Desktop  Support Engineer at Sysnet Global Technology  , Sonipat (Haryana) (1 year)
                    </li>
                    <li>
                        Worked as a IT Support Engineer at TCI Express (Transport Corporation of India), Gurugram (Haryana) (1 year)
                    </li>
                </ul>
            </div>
            <div className='cardcontainer '>
                <div className='row'>
                    <div className='Card'>
                        <span className=''>
                            <i class="fa-brands fa-react Serviceicon"></i>
                            </span>
                        <h3 className='ServiceHeading3'>Web Devlopment</h3>
                        <p className='Servicepara'>The front-end use HTML5,CSS3, React.js jQuery and Bootstrap to build a single page web app that communicate with back-end via REST-ful API.
                        </p>
                    </div>
                    <div className='Card'>
                        <span>
                        <i class="fa-sharp fa-solid fa-computer Serviceicon"></i>
                        </span>
                        <h3 className='ServiceHeading3'>IT Support</h3>
                        <p className='Servicepara'>In This field Identifying issues ,Repairing problems,Updating systems,Troubleshooting computers and basic networks
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='Card'>
                        <span>
                        <i class="fa-sharp fa-solid fa-globe Serviceicon"></i>
                        </span>
                        <h3 className='ServiceHeading3'>Networking</h3>
                        <p className='Servicepara'>Computer networks connect nodes like computers, routers, and switches using cables, fiber optics, or wireless signals.
                            </p>
                    </div>
                    <div className='Card'>
                        <span>
                        <i class="fa-sharp fa-solid fa-server Serviceicon"></i>
                        </span>
                        <h3 className='ServiceHeading3'>Server</h3>
                        <p className='Servicepara'>
                            In Server (MCSA) Installing and Manage Active Directory Domain controllers, Adding server ,Active directory Users, Groups, File Permission
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services