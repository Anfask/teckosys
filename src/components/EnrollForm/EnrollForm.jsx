import { useState } from 'react';
import { ref, push } from 'firebase/database';
import Swal from 'sweetalert2';
import { database } from '../../firebase';
import './EnrollForm.css';

const EnrollForm = ({ onClose, data }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        mobileNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const sanitizedCourse = stripHtmlTags(data);

            const formData = {
                course: sanitizedCourse,
                name: formState.name,
                email: formState.email,
                mobileNumber: formState.mobileNumber,
            };

            const dbRef = ref(database, 'EnrollCourse');
            push(dbRef, formData)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Course Submitted!',
                        text: 'We will get in touch with you soon.',
                    }).then(() => {
                        onClose();
                    });

                    setFormState({
                        name: '',
                        email: '',
                        mobileNumber: '',
                    });
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again later.'
                    });
                });
        }
    };

    const validateForm = () => {
        const { name, email, mobileNumber } = formState;

        if (!name || !email || !mobileNumber) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Form',
                text: 'Please fill in all required fields.'
            });
            return false;
        }

        if (!validateEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.'
            });
            return false;
        }

        if (!validateMobileNumber(mobileNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Mobile Number',
                text: 'Please enter a valid mobile number.'
            });
            return false;
        }

        return true;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateMobileNumber = (mobileNumber) => {
        const re = /^\d{10}$/;
        return re.test(mobileNumber);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Cyber security</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={formState.name} onChange={handleInputChange} required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="email">Email ID:</label>
                        <input type="email" name="email" value={formState.email} onChange={handleInputChange} required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input type="tel" name="mobileNumber" pattern="[0-9]{10}" value={formState.mobileNumber} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

const stripHtmlTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
};

export default EnrollForm;