"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Leftside from "@/components/Design/leftside";

function Login() {
	// 1. Username, Password aur Error ke liye states
	const [username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	// GSAP Animation Ref
	const loginRef = useRef();

	useEffect(() => {
		gsap.fromTo(
			loginRef.current.children,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				stagger: 0.3,
				ease: "power3.out",
			},
		);
	}, []);

	// 2. API Call Function
	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			const response = await fetch("https://wishpringroom.onrender.com/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, Password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong!");
			}

			// Success: JWT Token aur User Details ko localStorage mein save karein
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));

			// Yahan aap user ko dashboard ya home page par redirect kar sakte hain
			// window.location.href = "/dashboard";
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex justify-between px-5 items-center h-full w-full bg-black">
			<div>
				<Leftside />
			</div>
			<div
				ref={loginRef}
				className="flex flex-col items-center h-screen w-[40%] rounded-4xl bg-black border-2 border-gray-700 text-white">
				<h2 className="text-2xl font-bold mt-2 underline underline-offset-15 text-green-400">
					Login
				</h2>
				<div className="flex flex-col justify-center h-[20%] w-full items-center p-10 mt-10 ">
					<h2 className="text-3xl mt-4">Welcome back!</h2>
					<p className="text-lg mt-2 text-gray-400 ">
						Login to continue your anonymous journey.
					</p>
				</div>

				{/* 3. Error Message Alert */}
				{error && (
					<div className="text-red-500 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-xl w-100 text-center text-sm mb-2">
						{error}
					</div>
				)}

				<form
					onSubmit={handleLogin}
					className="flex flex-col justify-center h-[40%] w-full p-8 items-center ">
					<input
						type="text"
						placeholder="Enter your username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 h-12 w-100 p-3 rounded-2xl"
					/>
					<input
						type="password"
						placeholder="Enter your password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4 h-12 w-100 p-3 rounded-2xl mb-1"
					/>
					<button
						type="submit"
						disabled={loading}
						className="bg-green-500 hover:bg-green-600 text-black font-bold ease rounded-xl mt-4 h-12 w-100 p-5 cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed flex justify-center items-center ">
						{loading ? "Logging in..." : "Login"}
						{!loading && (
							<img
								src="https://img.icons8.com/?size=100&id=99416&format=png&color=000000"
								className="w-6 h-6 ml-2"
								alt="login icon"
							/>
						)}
					</button>
				</form>
				<a href="/createaccount">
					<button className="text-white rounded-xl mt-4 h-12 w-100 p-5 cursor-pointer gap-2 mb-2 flex justify-center items-center border-gray-700 border-2">
						<img
							src="https://img.icons8.com/?size=100&id=60023&format=png&color=00ff40"
							className="w-6 h-6 ml-2"
							alt="create account icon"
						/>
						Create New Account
					</button>
				</a>
			</div>
		</div>
	);
}

export default Login;
