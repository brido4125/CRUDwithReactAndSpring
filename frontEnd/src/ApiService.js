import axios from 'axios'

const USER_API_BASR_URL = "http://localhost:8080/users";

class ApiService {
    fetchUsers(){
        return axios.get(USER_API_BASR_URL);
    }

    fetchUserByID(userID){
        return axios.get(USER_API_BASR_URL + '/' + userID);
    }
    deleteUser(userID){
        return axios.delete(USER_API_BASR_URL + '/' + userID)
    }
    addUser(user){
        return axios.post(USER_API_BASR_URL,user);
    }
    editUser(user){
        return axios.put(USER_API_BASR_URL + '/' + user.id, user);
    }

}

export default new ApiService();