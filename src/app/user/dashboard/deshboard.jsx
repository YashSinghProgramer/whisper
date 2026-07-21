"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function deshboard() {
	const dashboardRef = useRef(null);
	const listdashRef = useRef(null);
	const activedashRef = useRef(null);
	const [number, setnumber] = useState(null);
	const [username, setusername] = useState(null);
	const [userprofile, setuserprofile] = useState(null);
	useEffect(() => {
		(gsap.from(dashboardRef.current.children, {
			opacity: 0,
			y: -50,
			duration: 1,
			delay: 0.2,
			stagger: 0.3,
			ease: "power3.out",
		}),
			gsap.from(listdashRef.current.children, {
				opacity: 0,
				x: 50,
				duration: 1,
				delay: 0.2,
				stagger: 0.3,
				ease: "power3.out",
			}),
			gsap.from(activedashRef.current.children, {
				opacity: 0,
				y: 50,
				duration: 1,
				delay: 0.2,
				stagger: 0.6,
				ease: "power3.out",
			}));
		setnumber(Math.round(Math.random() * 2000));
	}, []);

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
				setusername(response.data.user.username);
				setuserprofile(response.data.user.profile);
			} catch (error) {
				console.log(error);
			}
		};

		fetchdata();
	}, []);
	return (
		<div className="p-4 flex n flex-col gap-6">
			<div className="flex justify-between">
				<h1 ref={dashboardRef} className="text-4xl  flex items-start flex-col">
					<div className="flex items-center gap-2 ">
						<img
							src="https://img.icons8.com/?size=100&id=1H52efUsDX7A&format=png&color=000000"
							className="h-9 w-9"
						/>
						Welcome back,
					</div>
					<span className="text-3xl font-bold text-green-500">{username}</span>
					<p className="text-lg text-gray-500 ">Ready for a new conversaton?</p>
				</h1>
				<div className="flex justify-center cursor-pointer gap-0">
					<img
						src="https://img.icons8.com/?size=100&id=96472&format=png&color=ffffff"
						className="h-12 w-12"
					/>
					<img
						src="https://img.icons8.com/?size=100&id=79003&format=png&color=00ff00"
						className="h-3 animate-pulse w-3"
					/>
				</div>
			</div>
			<div>
				<ul ref={listdashRef} className=" flex  gap-10">
					<li className="flex flex-col gap-3 justify-center hover:scale-105  cursor-pointer border-green-500 bg-green-400/10 items-center border-2 h-70 w-70 rounded-3xl">
						<img
							src="https://img.icons8.com/?size=100&id=7859&format=png&color=00ff40"
							className="h-14 p-2 w-14 border-2 rounded-full border-green-700"
						/>
						<h3 className="text-2xl font-bold">Find Someone</h3>
						<p className="text-lg text-gray-600">
							Start a 1-on-1 anonymous <br /> chat with a random person.
						</p>
						<a href="#">
							<button className="h-12 w-60 border-2  text-green-500 font-bold hover:gap-6 gap-4 cursor-pointer border-green-500 flex items-center justify-center rounded-xl">
								Start chat{" "}
								<img
									src="https://img.icons8.com/?size=100&id=muD2AE4GulUx&format=png&color=00ff40"
									className="h-6 w-6"
								/>
							</button>
						</a>
					</li>
					<li className="flex flex-col gap-3 justify-center border-purple-500 bg-purple-400/10 items-center border-2 h-70 w-70 rounded-3xl">
						<img
							src="https://img.icons8.com/?size=100&id=9542&format=png&color=BF00FF"
							className="h-14 p-2 w-14 border-2 rounded-full border-purple-700"
						/>
						<h3 className="text-2xl font-bold">Groups</h3>
						<p className="text-lg text-gray-600">
							Join or create groups <br /> and talk freely.
						</p>
						<a href="#">
							<button className="h-12 w-60 border-2 text-purple-400 hover:gap-6 font-bold gap-4 cursor-pointer border-purple-500 flex items-center justify-center rounded-xl">
								Explore Groups{" "}
								<img
									src="https://img.icons8.com/?size=100&id=muD2AE4GulUx&format=png&color=BF00FF"
									className="h-6 w-6"
								/>
							</button>
						</a>
					</li>
					<li className="flex flex-col gap-3 justify-center border-blue-500 bg-blue-400/10 items-center border-2 h-70 w-70 rounded-3xl">
						<img
							src="https://img.icons8.com/?size=100&id=2KrHgHgBcPEJ&format=png&color=0040ff"
							className="h-14 p-2 w-14 border-2 rounded-full border-blue-700"
						/>
						<h3 className="text-2xl font-bold">AI Chat</h3>
						<p className="text-lg text-gray-600">
							Chat with our AI assistant
							<br /> anytime, anywhere.
						</p>
						<a href="/user/aichat">
							<button className="h-12 w-60 border-2 text-blue-400 hover:gap-6 font-bold gap-4 cursor-pointer border-blue-500 flex items-center justify-center rounded-xl">
								Chat with AI{" "}
								<img
									src="https://img.icons8.com/?size=100&id=muD2AE4GulUx&format=png&color=0040ff"
									className="h-6 w-6"
								/>
							</button>
						</a>
					</li>
				</ul>
			</div>
			<div ref={activedashRef} className="flex items-center gap-10">
				<div className="flex flex-col items-center justify-between w-95 p-4 rounded-2xl bg-white/10 border-2 h-30 ">
					<h1 className="flex items-center font-bold gap-3 text-2xl">
						<img
							src="https://img.icons8.com/?size=100&id=59810&format=png&color=ffff00"
							className="h-8 w-8"
						/>
						Tips
					</h1>
					<h2 className="text-lg ">Be kind. Be real.</h2>
					<p className="text-sm text-gray-500">
						" Wisper is a safe place for everyone. "
					</p>
				</div>
				<div className="flex flex-col items-start justify-center w-[50%] p-4 rounded-2xl border-2 h-40 mb-3">
					<h1 className="flex items-start font-bold gap-3 text-xl ">
						Active Now
					</h1>

					{/* Profile Images Stack */}
					<div className="flex items-center justify-center w-full my-2">
						<div className="flex -space-x-3 overflow-hidden">
							<img
								className="inline-block h-8 w-8 rounded-full  object-cover"
								src="https://i.pinimg.com/736x/84/2a/6b/842a6be3c3f9262faac2751d6853f33f.jpg"
								alt="User 1"
							/>
							<img
								className="inline-block h-8 w-8 rounded-full  object-cover"
								src="https://i.pinimg.com/736x/21/eb/f0/21ebf067ee1f6ea295afbbbb8c54123b.jpg"
								alt="User 2"
							/>
							<img
								className="inline-block h-8 w-8 rounded-full  object-cover"
								src="https://i.pinimg.com/736x/06/0a/0f/060a0f1f0486c7a36f1b5b452fbacab8.jpg"
								alt="User 3"
							/>
							<img
								className="inline-block h-8 w-8 rounded-full  object-cover"
								src="https://i.pinimg.com/1200x/8f/8a/1f/8f8a1f6dbf6d95bdec5e7adf21a465be.jpg"
								alt="User 4"
							/>
							<img
								className="inline-block h-8 w-8 rounded-full  object-cover"
								src={userprofile}
								alt="User 5"
							/>
							{/* Agar extra users ho toh badge: */}
							<div className="flex items-center justify-center h-8 w-8 rounded-full  bg-white/10 text-xs font-semibold text-white-600">
								+99
							</div>
						</div>
					</div>

					<h2 className="text-lg w-full flex text-green-600 justify-center items-center">
						1,{number} users online.
					</h2>

					<p className="text-sm text-gray-500 w-full flex justify-center items-center">
						" People are chatting right now! "
					</p>
				</div>
			</div>{" "}
		</div>
	);
}

export default deshboard;
