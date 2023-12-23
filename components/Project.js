import { FaArrowRight } from "react-icons/fa6";

const Project=()=>
{

    return (
        <>
        <h1 className="project-head" id="Projects">Projects</h1>

        <div className="project row ">

        <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Edemy</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>MERN</p>
                    </div>
                    <div className="project-text col-8">
                        An udemy clone developed using the MERN Stack and integrates
                         Razorpay for payments and csurf for cross-site-request-forgery protection.
                         Platform where instructors can create and upload lessons.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="https://github.com/Sushanthsush43/Edemy-UdemyClone" 
                            target="_blank" rel="noopener noreferrer">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/project3.png"
                      alt="project-img" />
                </div>
            </div>


            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Weather Forecast</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>React</p>
                    </div>
                    <div className="project-text col-8">
                        Weather Forecast is a web app developed using React, 
                        which displays hourly forecasts, air quality, and other related information.
                        It allows users to search for locations and features dynamic backgrounds based
                        on weather conditions, along with theme-change capabilities.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="https://github.com/Sushanthsush43/Weather_Hub_ReactJS" 
                            target="_blank" rel="noopener noreferrer">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/project1_m1.png"
                      alt="project-img" />
                </div>
            </div>

            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Doctors Appointment App</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>Python</p>
                    </div>
                    <div className="project-text col-8">
                    The doctor appointment app is a user-friendly mobile application designed to streamline the process of scheduling medical appointments,
                     allowing users to easily browse through available healthcare providers,select preferred dates and times, and book appointments seamlessly.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="https://github.com/Sushanthsush43/Doctor_Appointment_Booking_Android_App" 
                            target="_blank" rel="noopener noreferrer">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/project5.jpg"
                      alt="project-img" />
                </div>
            </div>

            
            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Library Management System</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>Python</p>
                    </div>
                    <div className="project-text col-8">
                        Library Management System is an desktop application developed
                        using Python and uses MySQL as database.The app sports an admin and client
                        side.Has penalty system for late returns and an easy to use interface.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="https://github.com/Sushanthsush43/Libary_Management_System_Python" 
                            target="_blank" rel="noopener noreferrer">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/project2.png"
                      alt="project-img" />
                </div>
            </div>

            
            
            
            <div className="project-set row">
                <div className="project-info row">
                    <div className="project-name col-4">
                        <p className="p1" style={{fontSize:"3.2vw",fontWeight:"bold",margin:"0"}}>Explore MIT</p>
                        <p className="p2" style={{fontSize:"1.1vw",fontStyle:"italic"}}>Android</p>
                    </div>
                    <div className="project-text col-8">
                    Explore MIT is a venue booking Android app featuring both admin and user interfaces.
                     The user-friendly app allows users to easily book venues,
                     while administrators have the capability to accept or reject requests
                      and perform various other functions.
                        <div className="view-project" style={{marginTop:"5px"}}>
                            <a href="https://github.com/Sushanthsush43/Venu_Booking_Android_App" 
                            target="_blank" rel="noopener noreferrer">View Project <FaArrowRight /> </a> 
                        </div>
                    </div>
                </div>
                <div className="project-pic mt-2">
                    <img src="/imgs/project4.png"
                      alt="project-img" />
                </div>
            </div>

        </div>

        </>
    )

}

export default Project;