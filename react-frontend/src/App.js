import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAddressComponent from './components/ListAddressComponent';
import AddAddressComponent from './components/AddAddressComponent';

// import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
// import AuthVerify from "./common/AuthVerify";
// import EventBus from "./common/EventBus";


const App = () => {
    return (
        <div>
            <HeaderComponent />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addresses" element={<ListAddressComponent />} />
                <Route path="/add-address" element={<AddAddressComponent />} />
                <Route path="/edit-address/:id" element={<AddAddressComponent />} />
                <Route path="/user" element={<BoardUser />} />
            </Routes>
            <FooterComponent />
        </div>
        // {/* <AuthVerify logOut={logOut}/> */}
    );
};
export default App;
