import axios from "axios";

export class UserService {

    addUser(user) {
        return axios.post("http://localhost:8080/api/users/add", user);
    }

    checkEmailAndPassword(values){
        return axios.get(`http://localhost:8080/api/users/findUserByEmailAndPassword?email=${values.email}&password=${values.password}`)
    }

}