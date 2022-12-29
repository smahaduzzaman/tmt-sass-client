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
        <div className='navbar'>
            <div className='brand'>
                <a href="/">tmt</a>
            </div>
            <div>
                <ul className='nav-list1'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add-task">Add Task</a></li>
                    <li><a href="/my-task">My Task</a></li>
                    <li><a href="/completed-task">Completed Task</a></li>
                    <li><a href="/all-tasks">All Tasks</a></li>
                </ul>
            </div>
            <div>
                <ul className='nav-list2'>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a onClick={handleLogOut} href="/">Logout</a></li>
                    <li><a href="/register"><FaUserCircle /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;