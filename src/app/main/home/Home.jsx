"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import HomeBottom from "./homeBottom";
import Joinbutton from "./Joinbutton";
import Homefooter from "./homefooter";
function Home() {
	const textRef = useRef(null);
	const imageRef = useRef(null);
	const imageRef2 = useRef(null);
	gsap.registerPlugin();

	useEffect(() => {
		gsap.fromTo(
			textRef.current.children,
			{ opacity: 0, y: -50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				stagger: 0.3,
				ease: "power3.out",
			},
		);
		gsap.fromTo(
			imageRef.current.children,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 1,
				stagger: 0.3,
				ease: "power3.out",
			},
		);
		gsap.fromTo(
			imageRef2.current,
			{
				y: 0,
				rotate: 0,
			},
			{
				y: -15,
				rotate: 5,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
			},
		);
	}, []);

	return (
		<div>
			<div className="h-[78vh] flex  justify-between  p-9 bg-black w-full ">
				<div ref={textRef}>
					<h4 className="text-sm  mb-2  border-2 flex border-green-700 text-green-700 font-bold w-[200px] rounded-3xl p-2 gap-3 items-center bg-white/10">
						<img
							src="https://img.icons8.com/?size=100&id=79679&format=png&color=00903A"
							alt="Privacy"
							className="h-6 w-6 "
						/>
						Privacy First. Always.
					</h4>
					<h1 className="text-7xl  mb-4 mt-5">
						Talk Freely.
						<br /> Leave <span className="text-green-500">Nothing</span> Behind.
					</h1>
					<p className="text-lg mt-4 mb-6 text-gray-400">
						Wisper is an anonymous chat platform where your <br /> conversations
						stay private and disappear forever.
					</p>
					<div className="flex gap-6 ">
						<Joinbutton />
						<button className="border-2 flex gap-2 justify-between items-center border-gray-500 hover:bg-blue-500 hover:border-0 text-white  text-sm cursor-pointer py-1 px-6 rounded-3xl ">
							Learn More{" "}
							<img
								src="https://img.icons8.com/?size=100&id=43830&format=png&color=ffffff"
								alt="Learn More"
								className="h-4 w-4 "
							/>
						</button>
					</div>
				</div>
				{/* Parent div ko relative kiya taaki absolute images iske andar hi rahein */}
				<div
					ref={imageRef}
					className="h-full w-[35%] flex justify-center items-center relative">
					<img
						ref={imageRef2}
						src="https://images.unsplash.com/photo-1718844054446-afb0ff6f9a09?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Main Image"
						className="h-full w-full object-cover rounded-xl"
					/>
				</div>
			</div>
			<HomeBottom />
			<Homefooter />
		</div>
	);
}

export default Home;
