"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import gsap from "gsap";
function Sidebar() {
	const [username, setUsername] = useState("");
	const [userProfile, setUserProfile] = useState("");
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const sidebarRef = useRef(null);
	const listRef = useRef(null);
	const logout = () => {
		localStorage.removeItem("token");
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const token = localStorage.getItem("token");

			if (!token) {
				router.push("/main/home");
				return;
			}

			try {
				const response = await axios.get(
					"https://wishpringroom.onrender.com/profile",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				// Console log karke dekhein response structure kya hai

				if (response.data && response.data.user) {
					setUsername(response.data.user.username);
					setUserProfile(response.data.user.profile);
				}
			} catch (err) {
				console.error(
					"Profile fetch error:",
					err.response?.data || err.message,
				);
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
		gsap.from(sidebarRef.current.children, {
			opacity: 0,

			duration: 1,
			delay: 0.3,
			stagger: 0.4,
			ease: "power3.inOut",
		});
		gsap.from(listRef.current.children, {
			opacity: 0,
			y: 60,
			duration: 1,
			delay: 0.4,
			stagger: 0.5,
			ease: "power4.out",
		});
	}, [router]);

	return (
		<div
			ref={sidebarRef}
			className="h-[100vh] p-2 gap-9 flex flex-col mr-2 justify-start items-start border-r-2 border-gray-600 pl-5 w-[20%]">
			<div className="text-3xl flex w-full items-center justify-start gap-1 text-[#00ff00] font-bold">
				<img
					src="https://img.icons8.com/?size=100&id=85491&format=png&color=00ff00"
					className="w-10 h-10 mr-2"
					alt="Logo"
				/>
				Wisper
			</div>

			<div>
				<ul ref={listRef} className="flex flex-col items-start gap-9">
					<a href="/user">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=15HuPyEJyD8J&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Dashboard"
							/>
							Dashboard
						</li>
					</a>
					<a href="#">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=7695&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Find Someone"
							/>
							Find Someone
						</li>
					</a>
					<a href="/Chats/groupchat">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=3734&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Groups"
							/>
							Groups
						</li>
					</a>
					<a href="/user/aichat">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=RlMjBSnE5OAG&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="AI Chat"
							/>
							AI Chat
						</li>
					</a>
					<a href="#">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=7859&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Chats"
							/>
							Chats
						</li>
					</a>
					<a href="/main/home">
						<li className="flex text-lg items-center hover:text-[#00ff40] gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=60579&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Home"
							/>
							Home
						</li>
					</a>
					<a href="/" onClick={logout}>
						<li className="flex hover:text-red-600 text-lg items-center gap-1">
							<img
								src="https://img.icons8.com/?size=100&id=37954&format=png&color=ffffff"
								className="w-7 h-7 mr-2"
								alt="Logout"
							/>
							Log Out
						</li>
					</a>
				</ul>
			</div>

			<div className="flex items-center gap-3 w-full border-2 bg-white/10 border-gray-600 py-2 px-7 rounded-3xl mt-auto mb-4">
				<img
					src={
						userProfile ||
						"https://img.icons8.com/?size=100&id=7859&format=png&color=ffffff"
					}
					className="h-12 w-12 border-violet-400 border-2 p-1 rounded-full object-cover"
					alt="Profile"
				/>
				<h4 className="text-lg items-start flex flex-col font-bold">
					{loading ? "Loading..." : username || "User"}
					<span className="flex items-center text-sm text-green-600">
						<img
							src="https://img.icons8.com/?size=100&id=24801&format=png&color=00ff40"
							className="h-3 w-3 mr-1"
							alt="Online Status"
						/>
						Online
					</span>
				</h4>
			</div>
		</div>
	);
}

export default Sidebar;
