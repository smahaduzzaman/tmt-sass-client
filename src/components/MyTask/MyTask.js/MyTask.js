import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvier';

const MyTask = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://tmt-sass-server.vercel.app/tasks/${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])

    // useEffect(() => {
    //     fetch(`https://tmt-sass-server.vercel.app/tasks?email=${user?.email}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 401 || res.status === 403) {
    //                 return logOut();
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setTasks(data);
    //         })
    // }, [user?.email, logOut])

    return (
        <div>
            {
                tasks.map(task => <div className='single-task'>
                    <div className='task-title'>
                        <h2>{task.taskName}</h2>
                        <p>Date: {task.date}</p>
                    </div>
                    <div className='task-time'>
                        <p>- Start Time: {task.startTime}</p>
                        <p>- End Time: {task.endTime}</p>
                    </div>
                    <div className='duration-location'>
                        <p>- Duration: {task.duration}</p>
                        <p>- Location: {task.location}</p>
                    </div>
                    <div className='note'>
                        <p>{task.addNote}</p>
                    </div>
                    <div className='task-buttons'>
                        <a href="/"><button>Back to Home</button></a>
                        <button>Completed</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyTask;