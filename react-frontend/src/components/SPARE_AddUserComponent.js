import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import UserService from '../services/UserService'

const AddUserComponent = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    // const { id } = useParams();

    const saveUser = (e) => {
        e.preventDefault();
        const user = { username, password }

        UserService.createUser(user).then((response) => {
            navigate('/addresses');
        }).catch(error => {
            console.log(error)
        })
    }

    // useEffect((id) => {
    //     if (id) {
    //         UserService.getAddressById(id).then((response) => {
    //             setAddressLine1(response.data.addressLine1)
    //             setAddressLine2(response.data.addressLine2)
    //             setPostalCode(response.data.postalCode)
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     }
    // }, [])

    // const title = () => {
    //     if (id) {
    //         return 'Login'
    //     }
    //     return 'Register'
    // }
    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Register</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Register Username:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Username'
                                        name='username'
                                        className='form-control'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Create Password:</label>
                                    <input
                                        type="password"
                                        placeholder='Enter New Password'
                                        name='password'
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <br />
                                <button className='btn btn-success big-button' onClick={(e) => saveUser(e)}>Save</button>
                                <Link to="/addresses" className='btn btn-danger big-button'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserComponent