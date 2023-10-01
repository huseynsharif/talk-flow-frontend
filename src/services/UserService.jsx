import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";



const getToken = () => {

    return localStorage.getItem("token");

}

export class UserService {
    addUser(user) {
        try {
            const response = axios.post(
                API_BASE_URL + "/auth/add",
                user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            return response;
        } catch (error) {
            throw error;
        }
    }

    login(loginRequest) {
        try {
            const response = axios.post(
                API_BASE_URL + "/auth/login",
                loginRequest
            );
            
            return response;
            
        } catch (error) {
            throw error;
        }
    }
}