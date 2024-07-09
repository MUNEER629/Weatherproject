import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { CiLock } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
    const nav = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [signupInputs, setSignupInputs] = useState({
        name: '', email: '', password: '', phone: '',
    });
    const [loginInputs, setLoginInputs] = useState({
        email: '', password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isSignup) {
            setSignupInputs((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else {
            setLoginInputs((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            const phone = /^[0-9]{10}$/;

            if (!phone.test(signupInputs.phone)) {
                toast.error("Phone number must be exactly 10 digits");
                return;
            }
            const email = /^[^@]+@gmail\.com$/;
            if (!email.test(signupInputs.email)) {
                toast.error("Check email format");
                return;
            }

            toast.success("Registered successfully");
            setIsSignup(false);
        } else {
            if (signupInputs.email === loginInputs.email && signupInputs.password === loginInputs.password) {
                alert("login successfully");
                nav('/weather');
            } else {
                toast.error("Check Email and password");
            }
        }
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setSignupInputs({ name: '', email: '', password: '', phone: '' });
        setLoginInputs({ email: '', password: '' });
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    flexDirection={"column"}
                    maxWidth={400}
                    margin={'auto'}
                    justifyContent={'center'}
                    marginTop={5}
                    padding={5}
                    borderRadius={5}
                    boxShadow={"5px 5px 15px "}
                    sx={{
                        ":hover": {
                            boxShadow: '10px 10px 20px',
                        },
                    }}
                >
                    <Box display="flex" justifyContent="center" width={300} marginBottom={2}>
                        <CiLock style={{ height: '30px', width: '30px', marginBottom: '-100px' }} />
                    </Box>
                    <Typography variant='h4' padding={3} textAlign={'center'}>
                        {isSignup ? "Signup" : "Login"}
                    </Typography>
                    {isSignup && (
                        <>
                            <TextField
                                onChange={handleChange}
                                name='name'
                                value={signupInputs.name}
                                margin='normal'
                                type='text'
                                variant='outlined'
                                placeholder='Name'
                                required
                            />
                            <TextField
                                onChange={handleChange}
                                name='phone'
                                value={signupInputs.phone}
                                margin='normal'
                                type='number'
                                variant='outlined'
                                placeholder='Phone Number'
                                required
                            />
                        </>
                    )}
                    <TextField
                        onChange={handleChange}
                        name='email'
                        value={isSignup ? signupInputs.email : loginInputs.email}
                        margin="normal"
                        type="email"
                        variant='outlined'
                        placeholder='Email'
                        required
                    />
                    <TextField
                        onChange={handleChange}
                        name='password'
                        value={isSignup ? signupInputs.password : loginInputs.password}
                        margin="normal"
                        type="password"
                        variant='outlined'
                        placeholder='Password'
                        required
                    />
                    <Button
                        type='submit'
                        sx={{ marginTop: 1 }}
                        variant='contained'
                    >
                        {isSignup ? "Signup" : "Login"}
                    </Button>
                    <Button
                        onClick={resetState}
                        sx={{ marginTop: 1 }}
                    >
                        {isSignup ? "Already have an account" : "Don't have an account"}
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default Auth;
