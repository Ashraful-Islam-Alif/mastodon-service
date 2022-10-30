import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from './Loading';


const CreateAccount = () => {
    const [agree, setAgree] = useState(false)
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin = event => {
        navigate('/login')
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/')
    }
    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/KDhVqRG/HMD4dj.webp")`
        }} className='flex items-center justify-center flex-col h-screen '>
            <div style={{
                backgroundImage: `url("https://i.ibb.co/KDhVqRG/HMD4dj.webp")`
            }} className='bg-gray-200 shadow-xl rounded-xl py-20 px-5 '>
                <Form onSubmit={handleSubmit}>
                    <h2 className='text-center text-4xl font-bold text-white py-4'>Create Account</h2>
                    <Form.Group className="mb-3 p-2 text-black" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Your Name</Form.Label>
                        <Form.Control className='px-12 p-2 pl-3 rounded-lg bg-gray-300' ref={nameRef} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3 p-2 text-black" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control className='px-12 p-2 pl-3 rounded-lg bg-gray-300' ref={emailRef} type="email" placeholder="Enter Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 p-2 text-black" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control className='px-12 p-2 pl-3 rounded-lg bg-gray-300' ref={passwordRef} type="password" placeholder="Enter Password" required />
                    </Form.Group>
                    <input className='ml-2' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms" className={agree ? "text-white ps-2 ml-2" : "ps-2 ml-2 text-red-600 mb-3"}>Accept Mastodon Terms and Conditions</label>
                    <br />
                    <Button disabled={!agree} variant="warning" type="submit" className='w-50 mx-auto  ml-2 px-28 p-2 mb-3 text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl  py-2.5 text-center mr-2 '>
                        Register
                    </Button>
                </Form>
                <div className='p-2 text-white'>
                    <p>Already have an account? <Link to='/login' className='underline' onClick={navigateLogin}>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;