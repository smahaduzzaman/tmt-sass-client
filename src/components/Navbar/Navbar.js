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
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // padding: '0 10px',
            // backgroundColor: 'lightblue',
            backgroundColor: '#ccc',
            color: 'white',
            height: '50px'
        }}>
            <div>
                <a href="/">tmt</a>
            </div>
            <div>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    listStyle: 'none',
                    width: '300px'
                }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add-task">Add Task</a></li>
                    <li><a href="/my-task">My Task</a></li>
                    <li><a href="/completed-task">Completed Task</a></li>
                    <li><a href="/all-tasks">All Tasks</a></li>
                </ul>
            </div>
            <div>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    listStyle: 'none',
                    width: '300px'
                }}>
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