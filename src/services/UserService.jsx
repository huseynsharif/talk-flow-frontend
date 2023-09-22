import axios from "axios";


const defaultUrl = "http://192.168.0.103:8080/api/";

const getToken = () => {

    const token =  localStorage.getItem("token");

    if(token==null){
        return null;
    }
    else{
        return token.slice(1, -1)
    }

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

    getall() {
        try {

            console.log(getToken());

            const response = axios.get(
                defaultUrl + "users/getall",
                {
                    headers: {
                        'Authorization': 'Bearer ' + getToken(),
                        'Content-Type': 'application/json'
                        
                    }
                }
            );

            return response;
        } catch (error) {
            throw error;
        }
    }


}