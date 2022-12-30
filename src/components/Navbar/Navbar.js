import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvier';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/">tmt</a>
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add-task">Add Task</a></li>
                    <li><a href="/my-task">My Task</a></li>
                    <li><a href="/completed-task">Completed Task</a></li>
                    <li><a href="/all-tasks">All Tasks</a></li>
                </ul>
            </div>
            <div className='menu-right'>
                <ul>
                    {
                        user?.uid ?
                            <li><a onClick={handleLogOut} href="/">Logout</a></li>
                            :
                            <>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;