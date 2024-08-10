import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); 
                },
                (error) => {
                    setStateMessage('Something went wrong, please try again later');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );

        e.target.reset();
    };

    return (
        <form onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="user_name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="user_email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />

            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
    );
};

export default ContactForm;
