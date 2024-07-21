import React, { useState } from "react";
import './BookDemo.css';
import PopupForm from "./PopupForm";

const BookDemo = () => {
    const [isPopup, setIsPopup] = useState(false);

    const handleClose = () => {
        setIsPopup(false);
    };

    return (
        <div className="book-demo">
            {isPopup && <PopupForm onClose={handleClose} />}
            <h2>Shielding the Digital World: A Comprehensive Course in IT.</h2>
            <button onClick={() => setIsPopup(true)} className="book-demo-btn">Book a Free Demo</button>
        </div>
    );
};

export default BookDemo;