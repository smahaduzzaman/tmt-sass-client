// import logo from './logo.svg';
// import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { useState } from 'react';
import './style.css'
import "./sass/main.scss"

function App({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className='App'>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
        <RouterProvider router={router}>
          {children}
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
