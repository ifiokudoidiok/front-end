import React from "react";
import styled from 'styled-components'
import Roller from './rolerIndicator'
import useForm from './useForm';
import {validation, validationChecker } from './Validation';


const Login = () => {

    const login = () => {
        resetForm();
    }

    const { 
        values, 
        errors, 
        isLoading,
        visibility,
        handleChange, 
        handleSubmit, 
        resetForm,
        toggleVisibility
    } = useForm(login, validation);

    const { email, password } = values;
    const { 
        initialEmailState, 
        initialPasswordState,
        emailMatch,
        minMaxMatch,
        numberRequired,
        lowerCaseRequired,
        upperCaseRequired,
        specialCharRequired
    } = errors;

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="email">
                <span>Email</span>
                <input id="email" type="email" value={email || ''} onChange={handleChange} required />
                <ul className="input-requirements">
					<li className={validationChecker(initialEmailState, emailMatch)}>Contains valid email address</li>
                </ul>
            </label>

            <label htmlFor="password">
                <span className="password-label">
                    <span>Password</span>
                    <button type="button" onClick={toggleVisibility}>{visibility ? 'Hide password' : 'Show password'}</button>
                </span>
                <input id="password" type={visibility ? 'text' : 'password'} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$" value={password || ''} onChange={handleChange} required />

                <ul className="input-requirements">
					<li className={validationChecker(initialPasswordState, minMaxMatch)}>At least 6 characters long (and less than 100 characters)</li>
					<li className={validationChecker(initialPasswordState, numberRequired)}>Contains at least 1 number</li>
					<li className={validationChecker(initialPasswordState, lowerCaseRequired)}>Contains at least 1 lowercase letter</li>
					<li className={validationChecker(initialPasswordState, upperCaseRequired)}>Contains at least 1 uppercase letter</li>
					<li className={validationChecker(initialPasswordState, specialCharRequired)}>Contains a special character (e.g. @ !)</li>
				</ul>
            </label>
            <button type="submit" className="submit-btn">
                {isLoading ? <Roller /> : 'Submit'}
            </button>
        </StyledForm>
    )
}

export default Login;


const StyledForm = styled.form`
    background-color: #fff;
    max-width: 600px;
    margin: 10% auto;
    padding: 3rem;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.3);
    border-bottom: 5px solid #ffdb3a;
    .input-requirements {
        font-size: 1rem;
        font-style: italic;
        text-align: left;
        list-style-type: none;
        color: rgb(150,150,150);
        padding: 0;
        margin: 0;
        margin-top: .5rem;
        li {
            &.invalid {
                color: #e74c3c;
            }
            &.valid {
                color: #2ecc71;
                &:after {
                    display: inline-block;
                    padding-left: 10px;
                    content: '\\2713';
                }
            }
        }
    }
 
    label {
        display: flex;
        flex-direction: column;
        width: 100%; 
        margin-bottom: 1.5rem;   
        & > span {
            font-size: 1.3rem;
            margin-bottom: .5rem;
            font-weight: 600;
            color: rgba(0,0,0,.4);
            &.password-label {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                button {
                    color: #000;
                    font-size: .7rem;
                    background: transparent;
                    margin: 0;
                    padding: 0;
                    font-weight: 600;
                    border: none;
                    outline: none;
                }
            }
        }
        input {
            outline: none;
            border: 1px solid #ddd;
            padding: 0 1rem;
            min-height: 40px;
            border-radius: 5px;
            font-size: 1.4rem;
            background: transparent;
            &:-webkit-autofill { 
                -webkit-box-shadow:200px 200px 100px white inset; 
                box-shadow:200px 200px 100px white inset; 
            }
            &:valid { border-color: #419BA0; }
            & + .input-requirements {
                overflow: hidden;
                max-height: 0;
                transition: max-height .25s ease-out;  
            }
              
            &:focus + .input-requirements {
                max-height: 1000px; /* any large number (bigger then the .input-requirements list) */
                transition: max-height 1s ease-in;
            }
              
        }
        .error-msg {
            margin-top: .5rem;
            color: red;
        }
    }
    button.submit-btn {
        outline: 0;
        border: none;
        background: #419BA0 none;
        color: #fff;
        font-weight: 700;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        user-select: none;
        transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
        -webkit-tap-highlight-color: transparent;
        padding: .5rem 2rem;
        min-height: 40px;
        min-width: 200px;
        font-size: 1.5rem; 
        &:hover {
            background-color: #63ADB1;
            background-image: none;
            -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            color: rgba(255, 255, 255, .8);
        }
    }
`

