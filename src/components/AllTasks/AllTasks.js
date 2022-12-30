import React, { useEffect, useState } from 'react';
import SingleTask from '../SingleTask/SingleTask';

const AllTasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    console.log(allTasks)

    useEffect(() => {
        fetch('https://tmt-sass-server.vercel.app/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllTasks(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className='tasks-container'>
            {
                allTasks.map(task => <SingleTask
                    key={task._id}
                    task={task}
                ></SingleTask>)
            }
        </div>
    );
};

export default AllTasks;