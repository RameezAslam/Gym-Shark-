import React, { useState } from 'react'
import '../css/login.css'
import gsLogo from '../images/gs-icon-black.png'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
            email,
            password
        }

        try {
            const response = await fetch("http://localhost:9000/api/login" , {
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
    <div className="login-main-container">
      <div className="login-container-wrapper">
        <div className='container login-container'>
            <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-column gap-3 align-items-center">
                        <div className='d-flex justify-content-center'>
                            <img src={gsLogo} alt="gym-shark-logo" />
                        </div>
                        <div>
                            <h1>GYMSHARK LOGIN</h1>
                        </div>
                        <p>
                            Shop your styles, save top picks to your wishlist, track those orders & train with us.
                        </p>
                    <form onSubmit={handleSubmit} className='w-100 '>

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

                        <a href="#" className='text-black fw-bold mt-3'>Forgot Password</a>
                        <button 
                            type='submit'
                            className='w-100 login-btn mt-3'
                            >
                                LOG IN
                        </button>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/signup" className='text-black fw-bold mt-3'>
                                Sign up
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

export default Login