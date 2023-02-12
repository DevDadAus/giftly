import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import Login from "./components/Login/Login";

function App() {
    const [token, setToken] = React.useState(null);
    if(!token) {
        return <Login setToken={setToken}/>
    }
    return (
      <Router>
          <Home>
              <Toaster
                  position={"top-center"}
                  reverseOrder={false}
              />
              <Routes>
                  <Route path={'/'} element={<Dashboard/>} />
                  <Route path={'/MyProfile'} element={<MyProfile/>} />
              </Routes>
          </Home>
      </Router>
    );
}

export default App;
