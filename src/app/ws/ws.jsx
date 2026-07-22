"use client";
import { io } from "socket.io-client";

function Connectws() {
	return io("https://wishpringroom-socket.onrender.com");
}

export default Connectws;
