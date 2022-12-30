import React from 'react';
import AddTask from '../AddTasks/AddTasks';
import AllTasks from '../AllTasks/AllTasks';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            {/* <AddTask></AddTask> */}
            <Login></Login>
            <AllTasks></AllTasks>
        </div>
    );
};

export default Home;