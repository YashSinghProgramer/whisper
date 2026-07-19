import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
function leftside() {
	const leftsideRef = useRef();
	const listRef = useRef();
	useEffect(() => {
		gsap.fromTo(
			leftsideRef.current.children,
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
		gsap.fromTo(
			listRef.current.children,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.7,
				stagger: 0.5,
				ease: "power3.out",
			},
		);
	}, []);
	return (
		<div ref={leftsideRef} className="h-[90vh] flex  ml-4 w-[60vw]">
			<div className="w-full">
				<div className="flex h-[20%] flex-col gap-1 mb-2 ">
					<h1 className="text-5xl font-bold">
						Welcome to <br />
						<span className="text-green-700">Wisper</span>
					</h1>
					<p className="text-lg text-gray-600">
						Talk freely. Privately. Fearlessly.
					</p>
				</div>
				<div>
					<ul ref={listRef} className="flex flex-col gap-5 mt-9 ml-4 h-[50%]">
						<li className="flex gap-2 items-center">
							<img
								className="h-15 w-15 border-2 flex items-center p-3 rounded-full bg-white/10"
								src="https://img.icons8.com/?size=100&id=2862&format=png&color=00ff40"
								alt="lock"
							/>
							<div>
								<h4 className="text-lg ">100% Private</h4>
								<p className="text-sm text-gray-500 ">
									No personal info. No data stored.
									<br />
									Just you and your conversations.
								</p>
							</div>
						</li>
						<li className="flex gap-2 items-center">
							<img
								className="h-15 w-15 border-2 flex items-center p-3 rounded-full bg-white/10"
								src="https://img.icons8.com/?size=100&id=10083&format=png&color=00ff40"
								alt="lock"
							/>
							<div>
								<h4 className="text-lg ">Auto Delete</h4>
								<p className="text-sm text-gray-500 ">
									All 1-1 chats disappear
									<br />
									automatically after 2 hours.
								</p>
							</div>
						</li>
						<li className="flex gap-2 items-center">
							<img
								className="h-15 w-15 border-2 flex items-center p-3 rounded-full bg-white/10"
								src="https://img.icons8.com/?size=100&id=39138&format=png&color=00ff40"
								alt="lock"
							/>
							<div>
								<h4 className="text-lg ">Safe Conversations</h4>
								<p className="text-sm text-gray-500 ">
									AI moderation keeps bad stuff out <br />
									so you can talk freely.
								</p>
							</div>
						</li>
						<li className="flex gap-2 items-center">
							<img
								className="h-15 w-15 border-2 flex items-center p-3 rounded-full bg-white/10"
								src="https://img.icons8.com/?size=100&id=60018&format=png&color=00ff40"
								alt="lock"
							/>
							<div>
								<h4 className="text-lg ">Group Chats</h4>
								<p className="text-sm text-gray-500 ">
									Create groups, invite friends,
									<br />
									and chat without limits.
								</p>
							</div>
						</li>
						<li className="flex gap-2 items-center">
							<img
								className="h-15 w-15 border-2 flex items-center p-3 rounded-full bg-white/10"
								src="https://img.icons8.com/?size=100&id=97932&format=png&color=00ff40"
								alt="lock"
							/>
							<div>
								<h4 className="text-lg ">Your words stay between us</h4>
								<p className="text-sm text-gray-500 ">
									Always has.Always will.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="h-[60%] w-[80%] rounded-full overflow-hidden mr-20 mt-20 bg-red-700">
				<img className="h-full w-full"src="https://plus.unsplash.com/premium_photo-1732652377916-b7ffb770aada?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
			</div>
		</div>
	);
}

export default leftside;
