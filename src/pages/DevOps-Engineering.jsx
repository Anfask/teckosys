import React from "react";
import './DevOps-Engineering.css';
import BookDemo from './BookDemo'

const Devops = () => {
    return (
        <>
            <div className="Devops-Engineering">
                <h1>DevOps <span>Engineering</span></h1>
                <h2>DevOps engineering courses teach practices integrating development and operations. Topics include continuous integration, automated testing, infrastructure as code, containerization, and cloud platforms to streamline software delivery and improve collaboration.</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default Devops;