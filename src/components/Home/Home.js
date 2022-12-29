import React from 'react';
import AddTask from '../AddTasks/AddTasks';
import AllTasks from '../AllTasks/AllTasks';

const Home = () => {
    return (
        <div>
            <AddTask></AddTask>
            <AllTasks></AllTasks>
        </div>
    );
};

export default Home;