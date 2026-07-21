"use client";
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import axios from "axios";
export default function AIChatUI() {
	useEffect(() => {
		const fetchdata = async () => {
			const token = localStorage.getItem("token");

			try {
				const response = await axios.get(
					"https://wishpringroom.onrender.com/profile",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				setname(response.data.user.username);
			} catch (error) {
				console.log(error);
			}
		};
		fetchdata();
	}, []);
	const [name, setname] = useState(null);
	const [messages, setMessages] = useState([
		{
			id: 1,
			sender: "ai",
			text: `Hello, kya haal hai tere? koi dost online nhi aaya kya? `,
		},
	]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const chatEndRef = useRef(null);

	// Automatically scroll down on new messages
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isTyping]);

	const handleSend = async (e) => {
		e.preventDefault();
		if (!input.trim() || isTyping) return;

		// 1. User ka message UI par add karein
		const userMessage = { id: Date.now(), sender: "user", text: input };
		setMessages((prev) => [...prev, userMessage]);

		const currentInput = input;
		setInput("");
		setIsTyping(true);

		try {
			// 2. Express Backend API ko call karein
			const response = await fetch(
				"https://wishpringroom.onrender.com/api/chat",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ message: currentInput }),
				},
			);

			const data = await response.json();

			if (data.success) {
				// 3. AI ka response UI par render karein
				const aiResponse = {
					id: Date.now() + 1,
					sender: "ai",
					text: data.reply,
				};
				setMessages((prev) => [...prev, aiResponse]);
			} else {
				throw new Error(data.error || "Something went wrong");
			}
		} catch (error) {
			console.error("API Error:", error);
			// Fallback message agar backend se response na aaye
			const errorMessage = {
				id: Date.now() + 1,
				sender: "ai",
				text: "Kshama karein, server se connect karne me dikkat aa rahi hai.",
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsTyping(false);
		}
	};

	return (
		<div className="flex flex-col h-screen w-full p-2 bg-black mx-auto text-gray-100 shadow-2xl font-sans">
			{/* Header */}
			<header className="flex items-center justify-between px-6 py-4 bg-green-700/30 backdrop-blur rounded-3xl ">
				<div className="flex items-center gap-3">
					<div className="p-2">
						<img
							src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="w-12 h-12 bg-cover rounded-full"
						/>
					</div>
					<div>
						<h1 className="font-semibold text-lg leading-tight">
							Wisper AI & <span className="text-gray-500">{name}</span>{" "}
						</h1>
						<span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
							Online
						</span>
					</div>
				</div>
			</header>

			{/* Messages Area */}
			<main className="flex-1 overflow-y-auto scrollbar-none p-4 sm:p-6 space-y-4">
				{messages.map((msg) => {
					const isAI = msg.sender === "ai";
					return (
						<div
							key={msg.id}
							className={`flex items-start gap-3 ${
								isAI ? "flex-row" : "flex-row-reverse"
							}`}>
							{/* Avatar */}
							<div
								className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
									isAI
										? "bg-indigo-600 text-white"
										: "bg-emerald-600 text-white"
								}`}>
								{isAI ? (
									<Bot className="w-4 h-4" />
								) : (
									<User className="w-4 h-4" />
								)}
							</div>

							{/* Message Bubble */}
							<div
								className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
									isAI
										? "bg-gray-800 text-gray-200 border border-gray-700/60 rounded-tl-none"
										: "bg-indigo-600 text-white rounded-tr-none"
								}`}>
								{msg.text}
							</div>
						</div>
					);
				})}

				{/* Typing Indicator */}
				{isTyping && (
					<div className="flex items-start gap-3">
						<div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
							<Bot className="w-4 h-4" />
						</div>
						<div className="bg-gray-800 border border-gray-700/60 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5">
							<span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
							<span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
							<span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
						</div>
					</div>
				)}

				<div ref={chatEndRef} />
			</main>

			{/* Input Box */}
			<footer className="p-4 ">
				<form onSubmit={handleSend} className="relative flex items-center">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						disabled={isTyping}
						placeholder={
							isTyping ? "AI jawab de raha hai..." : "Kuchh poocho..."
						}
						className="w-full bg-gray-900 text-gray-100 placeholder-gray-500 rounded-xl pl-4 pr-12 py-3 text-sm border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-60"
					/>
					<button
						type="submit"
						disabled={!input.trim() || isTyping}
						className="absolute right-2 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 text-white rounded-lg transition-colors">
						<Send className="w-4 h-4" />
					</button>
				</form>
			</footer>
		</div>
	);
}
