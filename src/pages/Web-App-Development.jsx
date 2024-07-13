import React from "react";
import './Web-App-Development.css';
import BookDemo from "./BookDemo";

const WebApp = () => {
    return (
        <>
            <div className="web-app-development">
                <h1>Web App <span>Development</span></h1>
                <h2>Learn to create dynamic websites using HTML, CSS, JavaScript, and server-side technologies. Explore databases, frameworks, and best practices for building responsive, secure, and scalable web applications.</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default WebApp;