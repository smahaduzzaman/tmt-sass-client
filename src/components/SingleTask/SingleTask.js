import React, { useState } from 'react';

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
                }
            });
        // window.location.reload();
    };


    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '5px',
            padding: '20px',
            margin: '20px',
            boxShadow: '5px 5px 5px lightgray',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'start',
            width: '300px',
        }}>
            <div style={{
                marginBottom: '10px',
            }}>
                <h2>{task.taskName}</h2>
                <p>Date: {task.date}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
            }}>
                <p>Start Time: {task.startTime}</p>
                <p>End Time: {task.endTime}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
            }}>
                <p>Duration: {task.duration}</p>
                <p>Location: {task.location}</p>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <p>{task.addNote}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'start',
                marginBottom: '10px',
            }}>
                <button style={{ marginRight: '10px' }}>Details</button>
                {/* <button onClick={() => handleUpdateTask(task)} style={{ marginRight: '10px' }}>Edit</button> */}
                <a href={`/edit-task/${task._id}`}><button style={{ marginRight: '10px' }}>Edit</button></a>
                <button onClick={() => handleDeleteTask(task._id)} style={{ marginRight: '10px' }}>Delete</button>
                {/* <button>Completed</button> */}
            </div>
        </div>
    );
};

export default SingleTask;