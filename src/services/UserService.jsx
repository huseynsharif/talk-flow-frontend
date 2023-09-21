import axios from "axios";

const getToken = () => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token");
}

export class UserService {
    addUser(user) {
        try {
            const response =  axios.post(
                    "http://localhost:8080/api/auth/add",
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
            const response =  axios.post(
                    "http://localhost:8080/api/auth/login",
                    loginRequest
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }

    getall() {
        try {

            getToken();

            const response =  axios.get(
                    "http://localhost:8080/api/users/getall",
                    {headers: {
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer ' + getToken()
                        
                    }}
                );
    
            return response;
        } catch (error) {
            throw error;
        }
    }


}