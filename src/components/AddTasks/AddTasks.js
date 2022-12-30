import React, { useState } from 'react';

const AddTask = () => {
    const [addTasks, setAddTasks] = useState([]);

    const handleAddTask = (event) => {
        event.preventDefault();
        const taskName = event.target.taskName.value;
        const date = event.target.date.value;
        const startTime = event.target.startTime.value;
        const endTime = event.target.endTime.value;
        const duration = event.target.duration.value;
        const location = event.target.location.value;
        const addNote = event.target.addNote.value;
        const image = event.target.image.files[0];
        console.log(taskName, date, startTime, endTime, duration, location, addNote, image);
        const newTask = {
            taskName: taskName,
            date: date,
            startTime: startTime,
            endTime: endTime,
            duration: duration,
            location: location,
            addNote: addNote,
            image: image
        }
        console.log(newTask);
        setAddTasks(newTask);

        fetch('https://tmt-sass-server.vercel.app/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(err => {
                console.log(err);
            });
        event.target.reset();
        // window.location.reload();
    }

    return (
        <form
            onSubmit={handleAddTask}
            className="form-container"
        // style={{ marginTop: "2rem" }}
        >
            <input
                type="text"
                name='taskName'
                placeholder="Your task name"
            />
            <br /><br />
            <input
                type="date"
                name='date'
            />
            <br /><br />
            Start Time: <input
                type="time"
                name='startTime'
                style={{ marginRight: "0.5rem" }}
            />
            End Time: <input
                type="time"
                name='endTime'
                className='endTime'
            />
            <br /><br />
            Task Duration: <input
                type="text"
                name='duration'
                placeholder="Duration"
            />
            <br /><br />
            <input
                type="text"
                name='location'
                placeholder="Location"
            />
            <br /><br />
            <input
                type="text"
                name='addNote'
                placeholder="Add Notes"
            />
            <br /><br />
            <input
                type="file"
                name='image'
                accept="image/png, image/jpeg"
            // enctype="multipart/form-data"
            /><br /><br />
            {/* <input type="submit" value="Submit" /> */}
            <input
                type="submit"
                value="Submit"
                onKeyPress={handleAddTask}
            />
        </form>
    );
};

export default AddTask;