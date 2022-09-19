import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';

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
        <div className='flex items-center justify-center flex-col h-screen '>
            <div className='bg-gray-400 p-12 shadow-xl rounded-xl'>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-center text-3xl font-bold text-lime-300 py-4'>Please <span className='text-emerald-300'>Login</span></h2>
                        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='p-2 rounded-lg bg-gray-300' ref={emailRef} type="email" placeholder="enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='p-2 rounded-lg bg-gray-300' ref={passwordRef} type="password" placeholder="enter password" required />
                        </Form.Group>
                        <Button type="submit" className='w-50 mx-auto d-block btn btn-success text-white ml-2'>
                            Login
                        </Button>
                    </Form>
                </div>
                <div className='p-2'>
                    {errorElement}
                    <p>Forget Password? <button className='btn btn-link text-lime-300 text-decoration-none' onClick={resetPassword}>Reset</button></p>
                    <p>New to Mastodon? <Link to='/register' className='text-lime-300 text-decoration-none' onClick={navigateRegister}>Create Account</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;