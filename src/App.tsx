import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Home from './routes/Home';
import UserProfile from './routes/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user-profile/:userLogin" element={<UserProfile />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>

  );  
}

export default App;
