import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";

const getToken = () => {

    return localStorage.getItem("token");

}

export class RoomService{
    findById(roomId){
        return axios.get(API_BASE_URL+`/rooms/find-by-id?roomId=${roomId}`)
    }

    findRoomIdByRoomName(roomName){
        return axios.get(API_BASE_URL+`/rooms/find-roomId-by-room-name?roomName=${roomName}`,
        {
            headers: {
                'Authorization': 'Bearer ' + getToken(),
                'Content-Type': 'application/json'

            }
        }
        )
    }
}