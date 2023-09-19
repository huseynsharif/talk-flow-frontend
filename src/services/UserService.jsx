import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/json'
    },
};

export class UserService {

    addUser(user) {
        try {
            const response =  axios.post(
                    "http://localhost:8080/api/users/add",
                    user,
                    config,
                    {
                        withCredentials: true
                    }
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }

    login(loginRequest) {
        try {
            const response =  axios.post(
                    "http://localhost:8080/api/users/add",
                    loginRequest,
                    config,
                    {
                        withCredentials: true
                    }
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }


}