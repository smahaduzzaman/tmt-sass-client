import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditTask = () => {
    const task = useLoaderData();
    const { taskName, date, startTime, endTime, duration, location, addNote } = task;
    const [updatedTask, setUpdatedTask] = useState({
        taskName: taskName,
        date: date,
        startTime: startTime,
        endTime: endTime,
        duration: duration,
        location: location,
        addNote: addNote
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const saveUpdatedTask = (e) => {
        e.preventDefault();
        console.log(updatedTask);
        fetch(`https://tmt-sass-server.vercel.app/update/${task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <form>
            <input
                onChange={handleChange}
                type="text"
                name='taskName'
                placeholder="Your task name"
                value={updatedTask.taskName ? updatedTask.taskName : ""} />
            <br /><br />
            <input
                onChange={handleChange}
                type="date"
                name='date'
                value={updatedTask.date ? updatedTask.date : ""} />
            <br /><br />
            Start Time: <input
                onChange={handleChange}
                type="time"
                name='startTime'
                value={updatedTask.startTime ? updatedTask.startTime : ""} />
            End Time: <input
                onChange={handleChange}
                type="time"
                name='endTime'
                value={updatedTask.endTime ? updatedTask.endTime : ""} />
            <br /><br />
            Task Duration: <input
                onChange={handleChange}
                type="text"
                name='duration'
                placeholder="Duration"
                value={updatedTask.duration ? updatedTask.duration : ""} />
            <br /><br />
            <input
                onChange={handleChange}
                type="text"
                name='location'
                placeholder="Location"
                value={updatedTask.location ? updatedTask.location : ""} />
            <br /><br />
            <input
                onChange={handleChange}
                type="text"
                name='addNote'
                placeholder="Add Notes"
                value={updatedTask.addNote ? updatedTask.addNote : ""} />
            <br /><br />
            <input
                type="file"
                // name="image"
                accept="image/png, image/jpeg"
            // enctype="multipart/form-data"
            // onChange={handleChange}
            // defaultValue={task.image ? task.image : ""}
            /><br /><br />
            <input
                type="submit"
                value="Save Changes"
                onClick={saveUpdatedTask}
            />
        </form>)
};

export default EditTask;