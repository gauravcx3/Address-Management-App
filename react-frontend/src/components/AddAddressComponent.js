import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import AddressService from '../services/AddressService'
import AuthService from "../services/auth.service";

const AddAddressComponent = () => {

    const userId = AuthService.getCurrentUser().id;
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [postalCode, setPostalCode] = useState('')
    // const [userId, setUserId] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateAddress = (e) => {
        e.preventDefault();
        const address = { addressLine1, addressLine2, postalCode };

        if (id) {
            AddressService.updateAddress(id, address).then((response) => {
                navigate('/addresses')
            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            AddressService.createAddress(userId, address).then((response) => {
                navigate('/addresses');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if (id) {
            AddressService.getAddressById(id).then((response) => {
                setAddressLine1(response.data.addressLine1)
                setAddressLine2(response.data.addressLine2)
                setPostalCode(response.data.postalCode)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const title = () => {
        if (id) {
            return 'Edit Address'
        }
        return 'Add Address'
    }
    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>{title()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Address Line1:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Address Line1'
                                        name='addressLine1'
                                        className='form-control'
                                        value={addressLine1}
                                        onChange={(e) => setAddressLine1(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Address Line2:</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Address Line2'
                                        name='addressLine2'
                                        className='form-control'
                                        value={addressLine2}
                                        onChange={(e) => setAddressLine2(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Postal Code:</label>
                                    <input
                                        type="number"
                                        placeholder='Enter Postal Code'
                                        name='postalCode'
                                        className='form-control'
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                                <br />
                                <button className='btn btn-success big-button' onClick={(e) => saveOrUpdateAddress(e)}>Save</button>
                                <Link to="/addresses" className='btn btn-danger big-button'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAddressComponent