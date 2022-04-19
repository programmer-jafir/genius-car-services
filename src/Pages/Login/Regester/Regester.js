import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Regester.css'

const Regester = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <from onSubmit={handleRegister}>
                <input type="name" name="name" id="" placeholder='Your Name' />
                
                <input type="email" name="" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </from>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Regester;