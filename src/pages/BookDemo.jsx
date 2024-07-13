import { useState } from 'react';
import PopupForm from './PopupForm'; // Ensure this path is correct
import './BookDemo.css';

const BookDemo = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className="book-demo">
            <h2>Shielding the Digital World: A Comprehensive Course in IT.</h2>
            <button className="book-demo-btn" onClick={handleButtonClick}>
                Book a Free Demo
            </button>
            {isPopupVisible && <PopupForm onClose={handleClosePopup} />}
        </div>
    );
};

export default BookDemo;