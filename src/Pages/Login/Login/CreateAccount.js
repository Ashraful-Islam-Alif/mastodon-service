import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';


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
        return <p>Loading........</p>
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
        navigate('/home')
    }
    return (
        <div className='flex items-center justify-center flex-col h-screen '>
            <div className='bg-gray-400 p-12 shadow-xl rounded-xl'>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-center text-3xl font-bold text-lime-300 py-4'>Create <span className='text-emerald-300'>Account</span></h2>
                        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control className='p-2 rounded-lg bg-gray-300' ref={nameRef} type="text" placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='p-2 rounded-lg bg-gray-300' ref={emailRef} type="email" placeholder="enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='p-2 rounded-lg bg-gray-300' ref={passwordRef} type="password" placeholder="enter password" required />
                        </Form.Group>
                        <input className='ml-2' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className={agree ? "text-lime-300 ps-2 ml-2" : "ps-2 ml-2 text-red-600 mb-3"}>Accept Mastodon Terms and Conditions</label>
                        <br />
                        <Button disabled={!agree} variant="warning" type="submit" className='w-50 mx-auto d-block btn btn-success text-white ml-2'>
                            Register
                        </Button>
                    </Form>
                </div>
                <div className='p-2 '>
                    <p>Already have an account? <Link to='/login' className='text-lime-300 text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;