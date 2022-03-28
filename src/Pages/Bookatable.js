import React from 'react';
import { useState, useEffect } from "react";
import '../Styles/Bookatable.css';

function Bookatable() {

    const initialValues = { name: "", email: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("You successfully created your booking");
            window.location.reload(false);
        }
    },[handleSubmit]);

    return (
        <>
            <div className="bookatable">
                <h1>BOOK A TABLE</h1>
                <p className='desc'>Whatever the occasion, we're certain that you can make it special at <br />YUMS.</p>
                <div className="formDiv">
                    <form autoComplete='off'>
                        <p>Name*</p>
                        <label>
                            <input type="text" name="name" placeholder='Your name' value={formValues.username} onChange={handleChange} />
                        </label>
                        <p className='errorName'>{formErrors.name}</p>
                        <p className='lastName'>Last name</p>
                        <label>
                            <input type="text" name="lastname" placeholder='Your last name' />
                        </label>
                        <p className='yourEmail'>Your email*</p>
                        <label>
                            <input type="text" name="email" placeholder='Your email address' value={formValues.email} onChange={handleChange} />
                        </label>
                        <p className='errorEmail'>{formErrors.email}</p>
                        <div className="textareaDiv">
                            <p className='message'>Message*</p>
                            <label>
                                <textarea name="message" placeholder='Enter your message' value={formValues.message} onChange={handleChange} />
                            </label>
                            <p className='errorMessage'>{formErrors.message}</p>
                        </div>
                    </form>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className="messageContainer">
                <h1>BE PART OF THE BHANDARI FAMILY:WE'VE<br />
                    CELEBRATED OUR CUSTOMERS'<br />
                    BIRTHDAYS, ENGAGEMENT PARTIES AND<br />
                    HEN DOS AT HERE YUMS.
                </h1>
            </div>
        </>
    )
}

export default Bookatable