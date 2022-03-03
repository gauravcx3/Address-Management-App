import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom'
import AuthService from "../services/auth.service";

const Home = () => {
    const user = AuthService.getCurrentUser();
    const logOut = () => {
        AuthService.logout();
      };
    const logIn = () => {
        if (user) {
            return <button className='btn btn-danger big-button' onClick={logOut}>Logout</button>
        }
        return <Link to="/login" className='btn btn-success big-button'> Login </Link>
    }
    const viewReg = () => {
        if (user) {
            return <Link to="/addresses" className='btn btn-info big-button'> View Addresses </Link>
        }
        return <Link to="/register" className='btn btn-info big-button'> Register </Link>
    }
    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'> Home </h2>
                        <div className='card-body'>
                            <form>
                            {logIn()}
                            <br />
                            <br />
                                <h4 className='text-center'> OR </h4>
                                <br />
                                {viewReg()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;