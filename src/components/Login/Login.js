import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvier';
import useToken from '../../hooks/useToken';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Login Successfully")
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                toast(error.message);
                setLoginError(error.message);
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                toast("Login Successfully")
                console.log(result.user);
                setLoginUserEmail(result.user.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                toast(error.message);
                setLoginError(error.message);
            })
    }

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='Enter email' required /><br /><br />
                <input type="password" name="password" id="" placeholder='Enter Password' required /><br /><br />
                <button type="submit">Login</button>
            </form>
            <br />
            <div className='google'>
                <button onClick={handleGoogleLogin}><FcGoogle /> Login With Google</button>
            </div>
            <div className='to-register'>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
            <div>
                <p style={{ color: 'red' }}>{loginError}</p>
            </div>
        </div>
    );
};

export default Login;