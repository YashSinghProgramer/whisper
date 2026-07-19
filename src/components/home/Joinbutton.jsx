import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
function Joinbutton() {
	const joinRef = useRef(null);
	useEffect(() => {
		const tl = gsap.timeline();
		tl.from(joinRef.current, {
			y: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power3.out",
		});
	}, []);

	return (
		<div>
			<a href="/login"><button
				ref={joinRef}
				className="flex justify-between items-center border-2 hover:gap-0 border-green-500 hover:bg-green-700 hover:border-green-900 text-white font-bold text-sm cursor-pointer py-2 px-5 rounded-3xl">
				Join Wisper
				<img
					src="https://img.icons8.com/?size=100&id=99416&format=png&color=ffffff"
					className="w-6 h-6 ml-2"
				/>
			</button></a>
		</div>
	);
}

export default Joinbutton;
