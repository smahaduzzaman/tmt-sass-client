import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvier';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                alert("Login Successfully")
                console.log(result.user);
                setLoginUserEmail(result.user.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            })
    }



    return (
        <div style={{
            height: '100vh',
        }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="" placeholder='Enter email' required /><br /><br />
                <input type="password" name="password" id="" placeholder='Enter Password' required /><br /><br />
                <button type="submit">Login</button>
            </form>
            <br />
            <div>
                <button onClick={handleGoogleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;