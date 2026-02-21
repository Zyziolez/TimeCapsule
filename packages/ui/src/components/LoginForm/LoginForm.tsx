import React, { useState } from 'react';
import './LoginForm.css';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button/Button';

interface LoginFormProps {
    actionFunction?: (email: string, password: string, isRegister: boolean) => void;
    register?: boolean;
    
}

export const LoginForm = ({ actionFunction, register }: LoginFormProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMesage, setErrorMessage] = useState('')
    const [isRegister, setIsRegister] = useState(register)
    let specialCharacters = '1234567890!@#$%^&*()`~[]{};:,.<>?\\|'


    const handleLoginRegister = () => {
        if(email === '' || password === '') {
            setErrorMessage("Please fill in all fields")
            return
        }
        if(email.length < 5) {
            setErrorMessage("Your email address is too short")
            return
        }
        if (password.length < 6) {
            setErrorMessage("Your password is too short")
            return
        }
        if(!specialCharacters.split('').some(char => password.includes(char))) {
            setErrorMessage("Your password must contain at least one special character")
            return
        }
        if(isRegister) {
            if(password !== confirmPassword) {
                setErrorMessage("Passwords do not match")
                return
            }

            if(actionFunction){
                actionFunction(email, password, true)

            }
            
        }else{
            if(actionFunction){
                actionFunction(email, password, false)
            }
        }
    }
    
    return(
        <div className='login-form-wrapper' >
            <form className="login-form" onSubmit={(e) => {}}>
                <div className='login-form-header' >
                    <Button label='< Back' variant="transparent" size='xs' />
                    <h2>{isRegister ? "Register" : "Login"}</h2>
                    <Button label='' variant="transparent" size='xs' />
                </div>
                <TextInput label="Email" sendButton={false} type="email" placeholder="example@email.com" isRequired onChange={(value) => setEmail(value)} />
                <TextInput label="Password" sendButton={false} type="password" placeholder="Enter your password" isRequired onChange={(value) => setPassword(value)} />
                {isRegister ?  <TextInput label="Password" sendButton={false} type="password" placeholder="Repeat password" isRequired onChange={(value) => setConfirmPassword(value)} /> : null }
                <label className='error-information' >{errorMesage}</label>
                <Button onClick={() => setIsRegister(e => !e)} label={isRegister ? "Already have an account?" : "Don't have an account?"} variant="transparent" size="md" />
                <Button label={isRegister ? "Register" : "Login"} variant="primary" size="md" onClick={handleLoginRegister} />
            </form>
        </div>
    )
}