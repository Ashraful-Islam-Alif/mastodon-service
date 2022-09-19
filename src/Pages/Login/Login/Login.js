import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);

        }
        else {
            toast('please enter your email address')
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <p>Loading........</p>
    }
    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    return (
        <div className=''>
            <div className='flex items-center justify-center flex-col h-screen '>
                <div style={{
                    backgroundImage: `url("https://i.ibb.co/bbXyXDs/1900901.webp")`
                }} className='bg-gray-400 shadow-xl rounded-xl py-24 px-5 '>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-center text-4xl font-bold text-white py-6 '>Please Login</h2>
                        <Form.Group className="mb-3 p-2 text-black" controlId="formBasicEmail">
                            <Form.Label className='text-white'>Email address</Form.Label>
                            <Form.Control className='px-12 p-2 pl-3 rounded-lg bg-gray-300' ref={emailRef} type="email" placeholder="enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3 p-2 text-black" controlId="formBasicPassword">
                            <Form.Label className='text-white'>Password</Form.Label>
                            <Form.Control className='px-12 p-2 pl-3 rounded-lg bg-gray-300' ref={passwordRef} type="password" placeholder="enter password" required />
                        </Form.Group>
                        <Button type="submit" className='w-50 mx-auto d-block btn btn-success text-white ml-2 px-32 p-2 mb-3'>
                            Login
                        </Button>
                    </Form>

                    <div className='p-2'>
                        {errorElement}
                        <p className='text-white py-2'>Forget Password? <Link to='' className='text-white underline' onClick={resetPassword}>Reset</Link></p>
                        <p className='text-white py-2'>New to Mastodon? <Link to='/register' className='text-white underline' onClick={navigateRegister}>Create Account</Link></p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;