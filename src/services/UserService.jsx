import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export class UserService {
    addUser(user) {
        try {
            const response =  axios.post(
                    "http://localhost:8080/api/users/add",
                    user,
                    config
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }

    login(loginRequest) {
        try {
            const response =  axios.post(
                    "http://localhost:8080/api/users/login",
                    loginRequest,
                    config
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }


}