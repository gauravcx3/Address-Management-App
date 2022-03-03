import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddressService from '../services/AddressService'
import AuthService from "../services/auth.service";

export const ListAddressComponent = () => {

    const [address, setAddresses] = useState([])
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();

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

    const logOut = () => {
        AuthService.logout();
        navigate('/home');
      };

    return (
        <div className='container'>
            <br />
            <h2 className='text-center'>Saved Addresses</h2>
            <table className='big-button table table-bordered'>
            <tbody>
                <tr>
                    <td>
                        <Link to="/add-address" className='btn btn-primary big-button'>Add Address</Link>
                    </td>
                    <td>
                    <button className='btn btn-danger big-button' onClick={logOut}>Logout</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className='table table-bordered table-striped table-dark table-hover'>
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
