import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvier';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [signUpError, setSignUpError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleRegister = (event) => {
        event.preventDefault();
        setSignUpError('');
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const role = event.target.role.value;
        console.log(name, email);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully');
                const userInfo = {
                    name

                }
                updateUser(userInfo)
                    .then(result => {
                        saveUserToDatabase(name, email);
                    })
                    .catch(error => {
                        console.log(error.message);
                        toast.error(error.message);
                    })
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error.message);
                setSignUpError(error.message);
            })
    }

    const saveUserToDatabase = (name, email) => {
        const user = { name, email };
        fetch('https://tmt-sass-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('User Saved to Database');
                setCreatedUserEmail(email);
            })
    }

    return (
        <div className='register-container'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter name' required /><br /><br />
                <input type="email" name="email" id="" placeholder='Enter email' required /><br /><br />
                <input type="password" name="password" id="" placeholder='Enter Password' required /><br /><br />
                <button type="submit">Register</button>
            </form>
            <div className='to-login'>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
            <div>
                <p style={{ color: 'red' }}>{signUpError}</p>
            </div>
        </div>
    );
};

export default Register;