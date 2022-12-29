import React, { useEffect, useState } from 'react';
import SingleTask from '../SingleTask/SingleTask';

const AllTasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    console.log(allTasks)

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
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
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '20px',
            padding: '20px',
        }}>
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