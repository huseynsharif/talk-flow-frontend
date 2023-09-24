import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";


const defaultUrl = API_BASE_URL + "/api/";

const getToken = () => {

    return localStorage.getItem("token");

}

export class UserService {
    addUser(user) {
        try {
            const response = axios.post(
                defaultUrl + "auth/add",
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
                defaultUrl + "auth/login",
                loginRequest
            );

            return response;
        } catch (error) {
            throw error;
        }
    }
}