import React from "react";
import './UI-UX Engineering.css'
import BookDemo from "./BookDemo";

const UIUX = () => {
    return (
        <>
            <div className="ui-ux">
                <h1>UI-UX <span>Engineering</span></h1>
                <h2>UI Engineering covers design principles, user experience, and front-end development. Students learn to create intuitive interfaces using HTML, CSS, and JavaScript while focusing on accessibility, responsiveness, and performance optimization.</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default UIUX;