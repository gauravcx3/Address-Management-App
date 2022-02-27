import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAddressComponent from './components/ListAddressComponent';
import AddAddressComponent from './components/AddAddressComponent';
import AddUserComponent from './components/AddUserComponent';
import { Link } from 'react-router-dom'

import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
function App() {
    // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    // const [showAdminBoard, setShowAdminBoard] = useState(false);
    // const [currentUser, setCurrentUser] = useState(undefined);
    // useEffect(() => {
    //   const user = AuthService.getCurrentUser();
    //   if (user) {
    //     setCurrentUser(user);
    //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    //   }
    // }, []);
    // const logOut = () => {
    //   AuthService.logout();
    // };
    return (
      <div>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}
        <div className="container mt-3">
          <Router>
          <Routes>
            {/* <Route path={["/", "/home"]} element={Home} />
            <Route path="/login" element={Login} /> */}
            <Route path="/register" element={Register} />
            {/* <Route path="/profile" element={Profile} />
            <Route path="/user" element={BoardUser} />
            <Route path="/mod" element={BoardModerator} />
            <Route path="/admin" element={BoardAdmin} /> */}
            </Routes>
          </Router>
        </div>
      </div>
    );
  };
  export default App;


// function App() {
//     return (
//         <Router>
//                 <HeaderComponent />
//                     <Routes>
//                         <Route path="/" element={<ListAddressComponent />} />
//                         <Route path="/addresses" element={<ListAddressComponent />} />
//                         <Route path="/add-address" element={<AddAddressComponent />} />
//                         <Route path="/edit-address/:id" element={<AddAddressComponent />} />
//                         <Route path="/users" element={<AddUserComponent />} />
//                     </Routes>
//                 <FooterComponent />
//         </Router>
//     );
// }

// export default App;
