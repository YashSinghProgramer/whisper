import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function homeBottom() {
	gsap.registerPlugin(ScrollTrigger);
	const homeBottomRef = useRef(null);
	useEffect(() => {
		if (homeBottomRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: homeBottomRef.current,
					start: "top 70%",
					toggleActions: "play none none none",
					// markers: true,
				},
			});

			tl.from(homeBottomRef.current.children, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2, // Ek ke baad ek aane ke liye smooth lagega
				ease: "power3.out",
			});
		}
	}, []);
	return (
		<div className="h-[28vh] flex  justify-center items-center p-9  w-full bg-black">
			<div className="h-full w-[90%] rounded-2xl border-2 px-20 border-gray-600 bg-black flex justify-between items-center">
				<ul
					className="flex gap-10 text-white font-bold text-sm"
					ref={homeBottomRef}>
					<li className="flex gap-3 items-center border-r-2 border-gray-600 pr-10">
						<img
							src="https://img.icons8.com/?size=100&id=11727&format=png&color=00ff40"
							alt="login"
							className="w-10 h-10"
						/>
						<div>
							<h4>No Login</h4>
							<p className="text-gray-400">Just a username</p>
						</div>
					</li>
					<li className="flex gap-3 items-center border-r-2 border-gray-600 pr-10">
						<img
							src="https://img.icons8.com/?size=100&id=m0dE6J92K2ui&format=png&color=00ff40"
							alt="login"
							className="w-10 h-10"
						/>
						<div>
							<h4>Auto Delete</h4>
							<p className="text-gray-400">Chat Disappears</p>
						</div>
					</li>
					<li className="flex gap-3 items-center border-r-2 border-gray-600 pr-10">
						<img
							src="https://img.icons8.com/?size=100&id=2945&format=png&color=00ff40"
							alt="login"
							className="w-10 h-10"
						/>
						<div>
							<h4>100% Private</h4>
							<p className="text-gray-400">Zero data retention</p>
						</div>
					</li>
					<li className="flex gap-3 items-center ">
						<img
							src="https://img.icons8.com/?size=100&id=5FrBbXKJOw8Q&format=png&color=00ff40"
							alt="login"
							className="w-10 h-10"
						/>
						<div>
							<h4>AI Moderation</h4>
							<p className="text-gray-400">Safer conversations</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default homeBottom;
