"use client";
import { io } from "socket.io-client";

function Connectws() {
	return io("http://localhost:3600");
}

export default Connectws;
	