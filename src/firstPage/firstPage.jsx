import React, { useState } from 'react'
import './firstPage.css'
import { IoCloseCircle } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FirstPage = () => {

    const [signUpOpen, setSignUpOpen] = useState(false);
    const [signInOpen, setSignInOpen] = useState(false);
    const [alertTeg, setAlertTeg] = useState(false);

    const signUp = () => {
        setSignUpOpen(true);
    }

    const closeElement = () => {
        setSignUpOpen(false);
        setSignInOpen(false);
    }

    const sendData = async () => {
        const userObj = {
            userName: document.getElementById('userName').value,
            userGmail: document.getElementById('userGmail').value,
            userPassword: document.getElementById('userPassword').value
        }
        await (await axios.post('http://localhost:3000/user', userObj)).data;
        setAlertTeg(true)

        document.getElementById('userName').value = '';
        document.getElementById('userGmail').value = '';
        document.getElementById('userPassword').value = '';

        const alertTime = setTimeout(() => {
            setAlertTeg(false);
            setSignUpOpen(false);
        }, 2000)

        return () => clearInterval(alertTime);
    }

    const signIn = () => {
        setSignInOpen(true)
    }
    const navigate = useNavigate();

    const login = async () => {
        const userName = document.getElementById('userNameData').value;
        const userPassword = document.getElementById('userPasswordData').value;

        const mydata = await (await axios.get('http://localhost:3000/user')).data;

        const filterData = mydata.filter((e) => e.userName === userName
            && e.userPassword === userPassword);
        filterData.length ? navigate(`/${filterData[0].id}`)
            : alert("isdifadeçi tapılmadı kışh kışh")
    }

    return (
        <div className='first-page'>
            <div>
                <button onClick={signIn}>
                    Sign In
                </button>
                <button onClick={signUp}>
                    Sign Up
                </button>
            </div>

            {
                signUpOpen ? <div className='sign-up'>
                    <IoCloseCircle className='close-sign-up' onClick={closeElement} />
                    <form action="">
                        <input type="text" placeholder='username' id='userName' />
                        <input type="email" placeholder='gmail' id='userGmail' />
                        <input type="text" placeholder='password' id='userPassword' />
                        <input type="button" value="sign up" onClick={sendData} />
                    </form>
                </div>
                    :
                    <></>
            }

            {
                signInOpen ? <div className='sign-up'>
                    <IoCloseCircle className='close-sign-up' onClick={closeElement} />
                    <form action="">
                        <input type="text" placeholder='username' id='userNameData' />
                        <input type="text" placeholder='password' id='userPasswordData' />
                        <input type="button" value="sign in" onClick={login} />
                    </form>
                </div>
                    :
                    <></>
            }

            {
                alertTeg && <span className='alert-teg'>
                    əlavə edildi
                </span>
            }
        </div>
    )
}

export default FirstPage