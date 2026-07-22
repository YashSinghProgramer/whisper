"use client";
import React from "react";
function sidebar() {
	const norefresh = (e) => {
		e.preventDefault();
	};
	return (
		<div className="p-2 flex bg-black flex-col gap-4">
			<div className="flex  flex-col gap-5 border-2 w-105 border-gray-600 bg-white/10 rounded-xl p-3">
				<h1 className="text-xl font-bold text-green-700">Join group</h1>
				<p className="text-lg text-gray-400">Enter room name or invite code</p>
				<input
					type="text"
					placeholder="Enter room name"
					className="border-2 outline-0 p-2 rounded-xl border-gray-600  text-green-600 text-lg UPPERCASE"
				/>
				<div className="flex gap-3 items-center justify-center">
					<button className="border-2 outline-0 p-2 w-[60%] rounded-xl border-green-600 text-green-600 text-lg cursor-pointer active:scale-98 ">
						Join Group <img />
					</button>
					<a href="/Chats/groupchat/globalchats">
						{" "}
						<button className="border-2 outline-0 p-2 rounded-xl border-green-600 text-green-600 text-lg cursor-pointer active:scale-98 ">
							Join Global <img />
						</button>
					</a>
				</div>
			</div>
			<div className="flex  flex-col gap-5 border-2 w-105 border-gray-600 bg-white/10 rounded-xl p-3">
				<div className="flex gap-4 items-center  font-bold ">
					<img
						src="https://img.icons8.com/?size=100&id=23332&format=png&color=000000"
						className="bg-white/20 h-14 w-14 border-2 p-1 border-gray-600 rounded-full"
					/>
					<h2 className="text-xl flex flex-col items-start font-bold">
						Groups
						<p className="text-sm  text-gray-600">
							Create,join or explore rooms
						</p>
					</h2>
				</div>
				<div>
					<h2 className="text-xl font-bold text-green-400">Create Group</h2>
					<form onSubmit={norefresh} className="p-2 flex flex-col gap-4">
						<input
							type="text"
							placeholder="Enter Group Name"
							className="border-2 border-gray-600 focus:border-blue-500 outline-0 p-3 w-90 rounded-2xl"
						/>

						<button className="cursor-pointer  p-2 rounded-2xl w-90 active:scale-95 bg-green-600 text-lg font-bold flex items-center justify-center gap-2 text-black">
							Create Group{" "}
							<img
								className="h-7 w-7 "
								src="https://img.icons8.com/?size=100&id=60953&format=png&color=000000"
							/>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default sidebar;
