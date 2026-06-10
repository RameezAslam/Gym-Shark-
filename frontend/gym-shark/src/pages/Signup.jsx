import React, { useState } from 'react'
import '../css/signup.css'
import gsLogo from '../images/gs-icon-black.png'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        const emailRegex = /.+\@.+\..+/;
        if(!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if(!passwordRegex.test(password)) {
            newErrors.password = "Password must be 6+ characters with uppercase, lowercase, special character & number"
        }
         setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!validateForm()) {
            return;
        }

        const userData = {
            firstName,
            lastName,
            DOB,
            email,
            password
        }

        try {
            const response = await fetch("http://localhost:9000/api/signup" , {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

  return (
    <div className="signup-main-container">
      <div className="signup-container-wrapper">
        <div className='container signup-container'>
          <div className="row">
            <div className="col-12">
             <div className="d-flex flex-column gap-3 align-items-center">
                <div className='d-flex justify-content-center'>
                    <img src={gsLogo} alt="gym-shark-logo" />
                </div>
                <div>
                    <h1>GYMSHARK SIGNUP</h1>
                </div>
                <p>
                    One account, across all apps, just to make things a little easier.
                </p>
            <form onSubmit={handleSubmit} className='w-100 '>

                <div className="form-floating mb-3">
                    <input 
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type="text" 
                        className="form-control" id="floatingFirstName" placeholder='First Name' />
                    <label htmlFor="floatingFirstName">First Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text" 
                        className="form-control" id="floatingLastName" placeholder='Last Name' />
                    <label htmlFor="floatingLastName">Last Name</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input 
                        onChange={(e) => setDOB(e.target.value)}
                        value={DOB}
                        type="date" 
                        className="form-control dob" id="floatingDOB" placeholder='DOB' />
                    <label htmlFor="floatingDOB">Date of Birth</label>
                </div>

                {/* Email field with error display */}
            <div className="form-floating mb-3">
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email" 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="floatingEmail" 
                    placeholder="abc@example.com" />
                <label htmlFor="floatingEmail">Email address*</label>
                {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
            </div>

               {/* Password field with error display */}
            <div className="form-floating mb-3 input-password-container">
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="floatingPassword" 
                    placeholder="Password" />
                <label htmlFor="floatingPassword">Password*</label>
                {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                <div onClick={() => setShowPassword(!showPassword)} className='eye-icon-container'>
                    {showPassword ? <FaEyeSlash className='eye-icon' /> : <FaEye className='eye-icon' />}
                </div>
            </div>

                <div className="form-check text-start">
                    <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                    <label className="form-check-label" htmlFor="checkDefault">
                        Tick here to receive emails about our products, apps, sales, exclusive content and more.
                        See our <a href="#" className='text-black fw-bold'>Privacy Policy</a> and <a href="#" className='text-black fw-bold'>California Notice</a>
                    </label>
                </div>
                <button 
                    type='submit'
                    className='w-100 signup-btn'
                    >
                        CREATE ACCOUNT
                </button>
                <p>
                    Already have an account? {" "}
                    <Link to="/login" className='text-black fw-bold'>
                        Log in
                    </Link>
                </p>
            </form>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup