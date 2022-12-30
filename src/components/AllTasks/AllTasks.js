import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvier';
import SingleTask from '../SingleTask/SingleTask';

const AllTasks = () => {
    const [allTasks, setAllTasks] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(allTasks)

    useEffect(() => {
        fetch(`https://tmt-sass-server.vercel.app/tasks/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllTasks(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [user?.email])

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