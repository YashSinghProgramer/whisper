"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Joinbutton from "./Joinbutton";
import About from "../about/About";

function Navbar() {
	const logoRef = useRef(null);
	const listRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline();

		// Navbar upar se fade in
		tl.from(logoRef.current, {
			y: -30,
			opacity: 0,
			duration: 0.6,
			ease: "power3.out",
		})
			// List items ek ek karke upar se aayenge
			.from(
				listRef.current.children, // saare <li> elements
				{
					y: -30,
					opacity: 0,
					duration: 0.6,
					stagger: 0.2, // har li ke beech 0.2 sec gap
					ease: "power3.out",
				},
				"-=0.3",
			);
	}, []);

	return (
		<div className="h-15 w-full bg-black p-8 text-white flex justify-between items-center">
			<div
				ref={logoRef}
				className="text-2xl font-bold flex justify-between items-center text-[#00ff00]">
				<img
					src="https://img.icons8.com/?size=100&id=85491&format=png&color=00ff00"
					className="w-10 h-10 mr-2"
				/>
				Wisper
			</div>

			<div>
				<ul ref={listRef} className="flex gap-8">
					<a href="/main/home">
						<li className="text-sm cursor-pointer font-bold hover:text-green-400  hover:underline underline-offset-16 ">
							Home
						</li>
					</a>
					<a href="/main/about">
						<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline underline-offset-16">
							About
						</li>
					</a>
					<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline underline-offset-16">
						Privacy
					</li>
					<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline underline-offset-16">
						Developer
					</li>
					<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline underline-offset-16">
						Features
					</li>
					<a href="/user">
						<li className="text-sm cursor-pointer font-bold hover:text-green-400 hover:underline underline-offset-16">
							Profile
						</li>
					</a>
				</ul>
			</div>
			<Joinbutton />
		</div>
	);
}

export default Navbar;
