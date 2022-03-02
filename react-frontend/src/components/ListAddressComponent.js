import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddressService from '../services/AddressService'
import AuthService from "../services/auth.service";

export const ListAddressComponent = () => {

    const [address, setAddresses] = useState([])
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        getAllAddresses(currentUser.id);
    }, [])

    const getAllAddresses = () => {
        AddressService.getAllAddresses(currentUser.id).then((response) => {
            setAddresses(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteAddress = (addressId) => {
        AddressService.deleteAddress(addressId).then((response) => {
            getAllAddresses();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <br />
            <h2 className='text-center'>Saved Addresses</h2>
            <Link to="/add-address" className='btn btn-primary mb-2 big-button'>Add Address</Link>
            <table className='table table-bordered table-striped'>
                <thead className='text-center'>
                    <tr>
                        <th>Id</th>
                        <th>Address Line1</th>
                        <th>Address Line2</th>
                        <th>Postal Code</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        address.map(
                            address =>
                                <tr key={address.id}>
                                    <td>{address.id}</td>
                                    <td>{address.addressLine1}</td>
                                    <td>{address.addressLine2}</td>
                                    <td>{address.postalCode}</td>
                                    <td>
                                        <Link className='btn btn-info big-button' to={`/edit-address/${address.id}`}>Update</Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger big-button' onClick={() => deleteAddress(address.id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAddressComponent
