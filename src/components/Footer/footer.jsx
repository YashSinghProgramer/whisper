"use client";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Footer() {
	gsap.registerPlugin(ScrollTrigger);
	const footerRef = useRef(null);
	const listRef = useRef(null);
	useEffect(() => {
		if (footerRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top 100%",
					toggleActions: "play none none none",
					// markers: true,
				},
			});

			tl.from(footerRef.current.children, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
			});
		}
		if (listRef.current) {
			const t2 = gsap.timeline({
				scrollTrigger: {
					trigger: listRef.current,
					start: "top 100%",
					toggleActions: "play none none none",
					// markers: true,
				},
			});

			t2.from(listRef.current.children, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
			});
		}
	}, []);

	return (
		<div className=" w-full  h-[40vh] flex flex-col justify-center items-center bg-black p-10">
			<div className="flex  w-[80%] mb-5 justify-between items-center">
				<div
					ref={footerRef}
					className="flex flex-col justify-between items-center">
					<h1 className="text-4xl font-bold flex justify-center items-center gap-3 mb-3 text-[#00ff00]">
						<img
							src="https://img.icons8.com/?size=100&id=85491&format=png&color=00ff00"
							alt="Wisper"
							className="h-10 w-10"
						/>
						Wisper
					</h1>
					<p className="text-sm text-gray-500">
						Talk Freely. Leave Nothing Behind.
					</p>
					<ul className="flex gap-2 mt-2 justify-center items-center">
						<li className="h-7 w-7 m-2">
							<a
								href="https://www.linkedin.com/in/yash-rajput-503078412/"
								target="_blank"
								rel="noopener noreferrer">
								<img
									src="https://img.icons8.com/?size=100&id=8808&format=png&color=ffffff"
									alt="About"
								/>
							</a>
						</li>
						<li className="h-7 w-7 m-2">
							<a
								href="https://github.com/YashSinghProgramer"
								target="_blank"
								rel="noopener noreferrer">
								<img
									src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
									alt="About"
								/>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<div className="flex flex-col justify-center items-center text-white ml-3">
						<h3>Quick Links</h3>
						<ul ref={listRef} className="flex  flex-col gap-1 ">
							<a href="/">
								<li className="text-sm cursor-pointer font-bold hover:text-green-400  hover:underline   ">
									Home
								</li>
							</a>
							<a href="/about">
								<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline  ">
									About
								</li>
							</a>
							<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline  ">
								Privacy
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline  ">
								Developer
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline  ">
								Features
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="flex flex-col justify-center items-center text-white ml-3">
						<h3>Resources</h3>
						<ul ref={listRef} className="flex  flex-col gap-1 ">
							<li className="text-sm cursor-pointer font-bold  hover:text-gray-400 ">
								Safety
							</li>
							<li className="text-sm cursor-pointer font-bold  hover:text-gray-400 ">
								Guidelines
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-gray-400  ">
								Support
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-gray-400  ">
								FAQ
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="flex flex-col justify-center items-start text-white ml-3">
						<h3>Legal</h3>
						<ul ref={listRef} className="flex  flex-col gap-1 ">
							<li className="text-sm cursor-pointer font-bold hover:text-gray-400   ">
								Privacy Policy
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-gray-400  ">
								Terms of Service
							</li>
							<li className="text-sm cursor-pointer font-bold hover:text-gray-400  ">
								Cummunity Rules
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div>
				<p>&copy; Wisper. All rights reserved.</p>
			</div>
		</div>
	);
}

export default Footer;
