import { useState } from 'react'
import './login.css'
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="loginpopup-titel">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Enter valid password' required />
                </div>
                <button>{currState === "Sign Up" ? "CreateAccount" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Agree with Privacy and policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already Have an account? <span onClick={() => setCurrState("Login")}>Login </span></p>
                }
            </form>
        </div>
    )
}
LoginPopUp.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
};
export default LoginPopUp