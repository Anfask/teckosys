import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import Swal from 'sweetalert';
import './Contact.css';
import { firebaseConfigContact } from '../firebase';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAisfBz-8yWzuN1mxkfxGb2c8sbJwahUhE",
  authDomain: "contact-teckosys.firebaseapp.com",
  databaseURL: "https://contact-teckosys-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-teckosys",
  storageBucket: "contact-teckosys.appspot.com",
  messagingSenderId: "4710640683",
  appId: "1:4710640683:web:b95ef1e40b70385adb8e6e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); 
const app = initializeApp(firebaseConfigContact); 
const database = getDatabase(app);

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Field validation
        if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.location) {
            Swal("Error", "All fields are required!", "error");
            return;
        }

        if (!validateEmail(formData.email)) {
            Swal("Error", "Please enter a valid email address!", "error");
            return;
        }

        if (!/^\d{10}$/.test(formData.contactNumber)) {
            Swal("Error", "Please enter a valid 10-digit contact number!", "error");
            return;
        }

        const reference = ref(database, 'contacts/' + Date.now());
        set(reference, formData)
            .then(() => {
                Swal("Success", "We will contact you back soon!", "success");
                setFormData({
                    fullName: '',
                    email: '',
                    contactNumber: '',
                    location: ''
                });
            })
            .catch((error) => {
                Swal("Error", "Error saving data: " + error.message, "error");
            });
    };

    return (
        <div className="contact">
            <h1>Contact <span>Us</span></h1>
            <p className="contact-subtitle">Get in touch with us.</p>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Your Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="info-item">
                        <i className="icon emai-icon"></i>
                        <div>
                            <p>Mail us at:</p>
                            <p>hello@teckosys.in</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="icon ph-icon"></i>
                        <div>
                            <p>Call us now:</p>
                            <p>+91 9074 260 340</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="icon loctn-icon"></i>
                        <div>
                            <p>Find Us:</p>
                            <p>3rd floor xyz Building, Kallara</p>
                            <p>Pangode, Trivandrum, Kerala 695609, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
