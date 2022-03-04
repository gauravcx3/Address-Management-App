import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};
const Login = () => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    navigate("/addresses");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };
    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'> Login </h2>
                        <div className='card-body'>        
                        <Form onSubmit={handleLogin} ref={form}>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className='form-label'>Username</label>
                                <Input
                                    type="text"
                                    placeholder='Enter Username'
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className='form-label'>Password</label>
                                <Input
                                    type="password"
                                    placeholder='Enter Password'
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required]}
                                />
                            </div>
                            <br />
                            <div className="form-group mb-2">
                                <button className="btn btn-success big-button" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Login</span>
                                </button>
                                <Link to="/home" className='btn btn-danger big-button'>Cancel</Link>
                            </div>
                            {message && (
                                <div className="form-group mb-2">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;