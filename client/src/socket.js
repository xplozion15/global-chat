import { io } from "socket.io-client";
import { API_BASE_URL } from "./config/api";
const URL = `${API_BASE_URL}`;
const socket = io(URL, {
  withCredentials: true,
});

export { socket };
