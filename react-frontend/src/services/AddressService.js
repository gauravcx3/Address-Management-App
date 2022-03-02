import axios from 'axios';


const ADDRESS_BASE_REST_API_URL = "http://localhost:8080/api/test/addresses";

class AddressService{
    getAllAddresses(userId){
        return axios.get(ADDRESS_BASE_REST_API_URL + '/user/' + userId);
    }

    createAddress(userId, address){
        return axios.post(ADDRESS_BASE_REST_API_URL + '/add/' + userId, address);
    }

    getAddressById(addressId){
        return axios.get(ADDRESS_BASE_REST_API_URL + '/edit/' + addressId);
    }

    updateAddress(addressId, address){
        return axios.put(ADDRESS_BASE_REST_API_URL + '/edit/' + addressId, address)
    }

    deleteAddress(addressId){
        return axios.delete(ADDRESS_BASE_REST_API_URL + '/delete/' + addressId)
    }
}

export default new AddressService();