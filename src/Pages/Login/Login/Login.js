import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from './google.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import Loading from './Loading';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import { useEffect } from 'react';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    // Google SignIn
    const [
        signInWithGoogle,
        userG,
        loadingG,
        errorG
    ] = useSignInWithGoogle(auth);

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

    const [token] = useToken(user || userG)

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

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || loadingG) {
        return <Loading></Loading>
    }
    if (error || errorG) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>
    }

    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/KDhVqRG/HMD4dj.webp")`
        }} className=''>
            <div className='flex items-center justify-center flex-col h-screen '>
                <div style={{
                    backgroundImage: `url("https://i.ibb.co/KDhVqRG/HMD4dj.webp")`
                }} className='bg-gray-400 shadow-xl rounded-xl py-8 px-5'>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='text-center text-4xl font-bold text-white py-2 md:py-6 '>Please Login</h2>
                        <Form.Group className="mb-3  p-2 text-black" controlId="formBasicEmail">
                            <Form.Label className='text-white'>Email address</Form.Label>
                            <Form.Control className='w-full max-w-xs rounded-lg px-8 p-2 pl-3 bg-gray-300' ref={emailRef} type="email" placeholder="Enter Email" required />

                        </Form.Group>

                        <Form.Group className="mb-3 p-2 text-black" controlId="formBasicPassword">
                            <Form.Label className='text-white'>Password</Form.Label>
                            <Form.Control className='w-full max-w-xs px-8 p-2 pl-3 rounded-lg bg-gray-300' ref={passwordRef} type="password" placeholder="Enter Password" required />

                        </Form.Group>
                        <Button type="submit" className='btn btn-block text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-lg text-center border-none'>
                            Login
                        </Button>
                        <div className='divider text-white'>OR</div>
                        <Button type="submit" className='btn btn-block text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-sm md:text-lg text-center border-none' onClick={() => signInWithGoogle()}>
                            <img style={{ width: 24 }} src={google} alt="" srcset="" />
                            <span> Continue with Google</span>
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