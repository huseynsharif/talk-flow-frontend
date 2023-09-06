import axios from "axios";

export class UserService {

    addUser(user) {
        return axios.post("http://localhost:8080/api/users/add", user);
    }

}