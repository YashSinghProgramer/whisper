"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import gsap from "gsap";

function Navbar() {
	const navRef = useRef(null);
	const navlistRef = useRef(null);
	const navbtnRef = useRef(null);
	const [username, setusername] = useState(null);
	const [profile, setprofile] = useState(null);
	const router = useRouter();
	const Logout = () => {
		localStorage.removeItem("token");
		router.push("/main/home");
	};
	useEffect(() => {
		const fetch = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				router.push("/");
				return;
			}
			const response = await axios.get(
				"https://wishpringroom.onrender.com/profile",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setprofile(response.data.user.profile);
			setusername(response.data.user.username);
			gsap.from(navRef.current.children, {
				opacity: 0,
				y: -50,
				duration: 1,
				delay: 0.2,
				stagger: 0.3,
				ease: "power3.inOut",
			});
			gsap.from(navlistRef.current.children, {
				opacity: 0,
				y: -50,
				duration: 1,
				delay: 0.3,
				stagger: 0.4,
				ease: "power3.inOut",
			});
			gsap.from(navbtnRef.current.children, {
				opacity: 0,
				y: -50,
				duration: 1,
				delay: 0.3,
				stagger: 0.4,
				ease: "power3.inOut",
			});
		};
		fetch();
	}, []);
	return (
		<div ref={navRef} className=" bg-black flex h-20 justify-between items-center w-full p-5">
			<div className="text-3xl flex  items-center justify-start gap-1 text-[#00ff00] font-bold">
				<img
					src="https://img.icons8.com/?size=100&id=85491&format=png&color=00ff00"
					className="w-10 h-10 mr-2"
					alt="Logo"
				/>
				Wisper
			</div>
			<div>
				<ul ref={navlistRef} className="flex  justify-between  items-center gap-2">
					<a href="/main/home">
						<li className="flex text-lg items-center hover:border-2 hover:border-green-500 p-2 rounded-2xl hover:bg-green-600/40 hover:text-[#00ff40] gap-1 mr-2 hover:mr-1">
							<img
								src="https://img.icons8.com/?size=100&id=60579&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Home"
							/>
							Home
						</li>
					</a>
					<a href="/user">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1 hover:border-2 hover:border-green-500 p-2 rounded-2xl hover:bg-green-600/40 mr-2 hover:mr-1">
							<img
								src="https://img.icons8.com/?size=100&id=15HuPyEJyD8J&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Dashboard"
							/>
							Dashboard
						</li>
					</a>
					<a href="/user/aichat">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1  hover:border-2 hover:border-green-500 p-2 rounded-2xl hover:bg-green-600/40 mr-2 hover:mr-1">
							<img
								src="https://img.icons8.com/?size=100&id=RlMjBSnE5OAG&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="AI Chat"
							/>
							AI Chat
						</li>
					</a>
					<a href="#">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1  hover:border-2 hover:border-green-500 p-2 rounded-2xl hover:bg-green-600/40 mr-2 hover:mr-1">
							<img
								src="https://img.icons8.com/?size=100&id=7859&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Chats"
							/>
							Chats
						</li>
					</a>
				</ul>
			</div>
			<div ref={navbtnRef} className="flex justify-between items-center  ">
				<div className="mr-4 flex gap-4">
					<img
						src={profile}
						className="h-15 rounded-full object-fill border-2 p-1 border-green-600 w-15"
					/>
					<h4 className="text-2xl font-bold uppercase">
						{username}
						<p className="text-sm text-gray-600 flex items-center gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=78983&format=png&color=00ff40"
								className="h-4 w-4 animate-pulse "
							/>{" "}
							Online
						</p>
					</h4>
				</div>
				<h2 
					onClick={Logout}
					className="text-lg border-2 w-35  flex items-center justify-center gap-2 hover:bg-red-700/40 hover:cursor-pointer hover:border-red-600  hover:text-red-600 p-2 rounded-2xl">
					<img
						src="https://img.icons8.com/?size=100&id=2445&format=png&color=ffffff"
						className="h-5 w-5"
					/>{" "}
					Log Out
				</h2>
			</div>
		</div>
	);
}

export default Navbar;
