import axios from 'axios';

const ADDRESS_BASE_REST_API_URL = "http://localhost:8080/api/v1/addresses";

class AddressService{
    getAllAddresses(){
        return axios.get(ADDRESS_BASE_REST_API_URL);
    }

    createAddress(address){
        return axios.post(ADDRESS_BASE_REST_API_URL, address);
    }

    getAddressById(addressId){
        return axios.get(ADDRESS_BASE_REST_API_URL + '/' + addressId);
    }

    updateAddress(addressId, address){
        return axios.put(ADDRESS_BASE_REST_API_URL + '/' + addressId, address)
    }

    deleteAddress(addressId){
        return axios.delete(ADDRESS_BASE_REST_API_URL + '/' + addressId)
    }
}

export default new AddressService();