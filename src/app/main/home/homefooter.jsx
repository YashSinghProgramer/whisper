import React from "react";
import Joinbutton from "./Joinbutton";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function homefooter() {
	gsap.registerPlugin(ScrollTrigger);
	const homBottomRef = useRef(null);
	useEffect(() => {
		if (homBottomRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: homBottomRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
					// markers: true,
				},
			});

			tl.from(homBottomRef.current.children, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
			});
		}
	}, []);
	return (
		<div className="w-full px-10  h-[20vh] bg-black flex justify-center items-center ">
			<div className="h-full w-full  flex mb-4 gap-2 justify-between items-center border-2 border-gray-700 p-2 rounded-3xl">
				<div className="flex gap-4 items-center h-full ">
					<img
						src="https://images.unsplash.com/photo-1638438134099-a91e5373aaf0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Wisper"
						className=" object-cover m-0 h-full w-30"
					/>
					<div ref={homBottomRef}>
						<h4 className="text-3xl ">Ready to talk freely?</h4>
						<p className="text-sm text-gray-400">
							Join wisper now and experience anonymous
							<br /> chatting like never before.
						</p>
					</div>
				</div>
				<div className="mr-10">
					<Joinbutton />{" "}
				</div>
			</div>
			<br />
		</div>
	);
}

export default homefooter;
