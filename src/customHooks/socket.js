import { io } from 'socket.io-client';
import { SOCKET_BASE_URL } from '../constants/apiConstants';

export const socket = io(SOCKET_BASE_URL + "?room=test", {
    autoConnect: false,
  });