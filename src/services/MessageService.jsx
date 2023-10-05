import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";

const getToken = () => {

    return localStorage.getItem("token");

}

export class MessageService {

    getAllByRoomId(id) {
        return axios.get(API_BASE_URL + `/messages/getall-by-roomid?id=${id}`, {
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Content-Type': 'application/json'

            }
        })
    }

}