import React from "react";
import './Cloud-Computing.css';
import BookDemo from "./BookDemo";

const Cloud = () => {
    return (
        <>
            <div className="Cloud-Computing">
                <h1>Cloud <span>Computing</span></h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatum voluptas doloremque autem nobis ea provident iure maxime quas quasi quia expedita, dolore esse saepe itaque, aperiam ut ipsa natus?</h2>
                <p>We are updating soon !</p>
            </div>
            <div className="book">
                <BookDemo/>
            </div>
        </>
    );
};

export default Cloud;