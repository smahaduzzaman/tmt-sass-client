import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ task }) => {
    const [updatedTask, setUpdatedTask] = useState({
        // taskName: task.taskName,
        // date: task.date,
        // startTime: task.startTime,
        // endTime: task.endTime,
        // duration: task.duration,
        // location: task.location,
        // addNote: task.addNote,
        // image: task.image,
    });

    const handleUpdateTask = (id) => {
        console.log(id);
        fetch(`https://tmt-sass-server.vercel.app/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: true }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    }

    const handleDeleteTask = (id) => {
        console.log(id);
        fetch(`https://tmt-sass-server.vercel.app/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    alert('Task deleted successfully');
                    window.location.reload();
                }
            });

    };

    return (
        <div className='single-task'>
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
                <a href="/details"><button>Details</button></a>
                {/* <button onClick={() => handleUpdateTask(task)} style={{ marginRight: '10px' }}>Edit</button> */}
                <a href={`/edit-task/${task._id}`}><button>Edit</button></a>
                <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                <button onClick={() => handleUpdateTask(task._id)}>Completed</button>
            </div>
        </div>
    );
};

export default SingleTask;