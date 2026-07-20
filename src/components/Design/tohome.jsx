"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
function tohome() {
	const router = useRouter();
	const welcomeRef = useRef(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			router.push("/user");
		}
		const tl = gsap.timeline();
		tl.from(
			welcomeRef.current.children,
			{
				y: 100,
				opacity: 0,
				duration: 1.2,
				stagger: 0.4,
				ease: "power3.out",
			},
			"-=0.3",
		);
	}, []);

	return (
		<div
			ref={welcomeRef}
			className="flex h-screen flex-col gap-3 w-full justify-center items-center">
			<h1 className="text-6xl font-bold ">
				Welcome to <span className="text-green-600">Wisper</span>
			</h1>
			<p className="text-2xl text-gray-700">
				Your space. Your words. No limits. No traces.
			</p>
			<a href="/main/home">
				<button className="h-12 text-lg p-4 flex items-center gap-1 hover:gap-3 text-black w-50 rounded-2xl bg-green-500 animate-pulse cursor-pointer border-2">
					Enter Wisper
					<img
						className=" h-5 w-5 "
						src="https://img.icons8.com/?size=100&id=99982&format=png&color=000000"
					/>
				</button>
			</a>
		</div>
	);
}

export default tohome;
