import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvier';

const Register = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://tmt-sass-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="" placeholder='Enter name' required /><br /><br />
                <input type="email" name="email" id="" placeholder='Enter email' required /><br /><br />
                <input type="password" name="password" id="" placeholder='Enter Password' required /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;