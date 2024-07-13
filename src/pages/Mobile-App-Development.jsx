import React from "react";
import './Mobile-App-Development.css';
import BookDemo from "./BookDemo";

const Mobile = () => {
    return (
        <>
            <div className="mobile-app-development">
                <h1>Mobile App <span>Development</span></h1>
                <h2>Mobile app development courses teach programming, design, and deployment for iOS and Android platforms. Topics include UI/UX, APIs, databases, testing, and app store submission processes.</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default Mobile;