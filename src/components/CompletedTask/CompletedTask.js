import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvier';

const CompletedTask = () => {
    const { user } = useContext(AuthContext)
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`https://tmt-sass-server.vercel.app/complete-task/${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user?.email])


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
                        <a href="/">Back to Home</a>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CompletedTask;