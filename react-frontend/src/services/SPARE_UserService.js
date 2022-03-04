import axios from 'axios';

const ADDRESS_BASE_REST_API_URL = "http://localhost:8080/api/v1/users";

class UserService {
    // getAllAddresses(){
    //     return axios.get(ADDRESS_BASE_REST_API_URL);
    // }

    createUser(user) {
        return axios.post(ADDRESS_BASE_REST_API_URL, user);
    }

    // getAddressById(addressId){
    //     return axios.get(ADDRESS_BASE_REST_API_URL + '/' + addressId);
    // }

    // updateAddress(addressId, address){
    //     return axios.put(ADDRESS_BASE_REST_API_URL + '/' + addressId, address)
    // }

    // deleteAddress(addressId){
    //     return axios.delete(ADDRESS_BASE_REST_API_URL + '/' + addressId)
    // }
}

export default new UserService();