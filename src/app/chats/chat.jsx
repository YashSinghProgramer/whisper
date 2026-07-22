"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, MessageSquare } from "lucide-react";
import Connectws from "@/app/ws/ws";

function ChatApp() {
	const [username, setUsername] = useState("");
	const [isJoined, setIsJoined] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "Hey there! Welcome to the chat.",
			sender: "Bot",
			time: "10:00 AM",
		},
	]);
	const [inputText, setInputText] = useState("");
	const socket = useRef(null);

	// 1. WebSockets Connect Tabhi Hoga Jab User Join Karega
	useEffect(() => {
		if (!isJoined) return;

		// Connect to WebSocket
		socket.current = Connectws();

		socket.current.on("connect", () => {
			console.log("WebSocket Connected!");
			socket.current.emit("joinRoom", username);
			socket.current.on("notice", (username) => {
				console.log(`${username} joined the group`);
			});
			socket.current.on("chatmessage", (msg) => {
				setMessages((prev) => [...prev, msg]);
			});
		});

		// Receive incoming messages from server
		socket.current.on("receiveMessage", (newMessage) => {
			setMessages((prev) => [...prev, newMessage]);
		});

		// Cleanup on unmount or logout
		return () => {
			if (socket.current) {
				socket.current.disconnect();
			}
		};
	}, [isJoined, username]);

	// Name submit handler
	const handleJoin = (e) => {
		e.preventDefault();
		if (username.trim()) {
			setIsJoined(true);
		}
	};

	// Message send handler
	// React component me message bhejte waqt:
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!inputText.trim()) return;

		const newMessage = {
			id: Date.now(),
			text: inputText,
			sender: username,
			time: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		if (socket.current) {
			socket.current.emit("chatmessage", newMessage);
		}

		setInputText("");
	};

	// --- SCREEN 1: Name Input Screen ---
	if (!isJoined) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-slate-900 text-white p-4">
				<div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
					<div className="flex justify-center mb-4">
						<div className="p-3 bg-indigo-600 rounded-full">
							<MessageSquare size={32} />
						</div>
					</div>
					<h2 className="text-2xl font-bold text-center mb-2">Join the Chat</h2>
					<p className="text-slate-400 text-center text-sm mb-6">
						Apna naam daalo aur chat start karo
					</p>

					<form onSubmit={handleJoin} className="space-y-4">
						<div>
							<label className="block text-sm font-medium mb-1 text-slate-300">
								Your Name
							</label>
							<input
								type="text"
								placeholder="e.g. Rahul Sharma"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 text-white transition"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition duration-200 shadow-lg shadow-indigo-600/30">
							Start Chatting
						</button>
					</form>
				</div>
			</div>
		);
	}

	// --- SCREEN 2: Main Chat UI ---
	return (
		<div className="flex items-center justify-center min-h-screen bg-slate-900 p-2 sm:p-4">
			<div className="flex flex-col h-[85vh] w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
				{/* Header */}
				<div className="bg-slate-900/80 backdrop-blur px-6 py-4 border-b border-slate-700 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
							{username.charAt(0).toUpperCase()}
						</div>
						<div>
							<h3 className="font-semibold text-white">{username}</h3>
							<p className="text-xs text-emerald-400 flex items-center gap-1">
								<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
								Online
							</p>
						</div>
					</div>
					<button
						onClick={() => setIsJoined(false)}
						className="text-xs text-slate-400 hover:text-white transition bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
						Change Name
					</button>
				</div>

				{/* Message Area */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4">
					{messages.map((msg) => {
						const isMe = msg.sender === username;
						return (
							<div
								key={msg.id}
								className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
								<span className="text-xs text-slate-400 mb-1 px-1">
									{isMe ? "You" : msg.sender}
								</span>
								<div
									className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
										isMe
											? "bg-indigo-600 text-white rounded-tr-none"
											: "bg-slate-700 text-slate-100 rounded-tl-none"
									}`}>
									<p>{msg.text}</p>
									<span
										className={`block text-[10px] mt-1 text-right ${
											isMe ? "text-indigo-200" : "text-slate-400"
										}`}>
										{msg.time}
									</span>
								</div>
							</div>
						);
					})}
				</div>

				{/* Input Bar */}
				<form
					onSubmit={handleSendMessage}
					className="p-4 bg-slate-900 border-t border-slate-700 flex gap-2">
					<input
						type="text"
						placeholder="Type a message..."
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
					/>
					<button
						type="submit"
						className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl transition flex items-center justify-center shadow-lg shadow-indigo-600/20">
						<Send size={18} />
					</button>
				</form>
			</div>
		</div>
	);
}

export default ChatApp;
