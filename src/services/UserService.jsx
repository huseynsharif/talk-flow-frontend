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

    verifyAccountWithLink(value) {
        try {
            const response = axios.get(
                API_BASE_URL + `/users/verificate-user-with-link?userId=${value.userId}&token=${value.token}`,
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


    forgotPasswordEmailVerification(email) {
        try {
            const response = axios.post(
                API_BASE_URL + `/users/send-forgot-password-email?email=${email}`,
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

    restorePassword(value) {
        try {
            const response = axios.post(
                API_BASE_URL + `/users/restore-password`, value
            );

            return response;

        } catch (error) {
            throw error;
        }
    }
}