"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Leftside from "@/components/Design/leftside";

function Login() {
    const [profileimg, setprofileimg] = useState(
        "https://i.pinimg.com/736x/28/2c/67/282c6790658e5be6688d4e7670085fc1.jpg",
    );
    const [profilename, setprofilename] = useState("Username");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(0);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const avatars = [
        "https://i.pinimg.com/736x/79/06/3c/79063cde98330c094611628cf7a16e4f.jpg",
        "https://i.pinimg.com/736x/64/90/63/64906346d6e41bb7577de3fcadde05ff.jpg",
        "https://i.pinimg.com/736x/d7/f5/2e/d7f52e2c843e91807d76598ee6ed2154.jpg",
        "https://i.pinimg.com/736x/d4/69/49/d469498d11bed69e289d8dacc8b7eae9.jpg",
        "https://i.pinimg.com/736x/b4/da/eb/b4daeb8765b30fcf58db29a182beb684.jpg",
        "https://i.pinimg.com/736x/17/f5/8d/17f58d5dfe4542bfa14be3ac7628d175.jpg",
        "https://i.pinimg.com/736x/21/eb/f0/21ebf067ee1f6ea295afbbbb8c54123b.jpg",
        "https://i.pinimg.com/736x/f8/d2/dc/f8d2dc1da5c44cd0c14d4186e44898f2.jpg",
        "https://i.pinimg.com/736x/73/22/4e/73224ee86fe1245876032160f27688cf.jpg",
        "https://i.pinimg.com/736x/06/0a/0f/060a0f1f0486c7a36f1b5b452fbacab8.jpg",
        "https://i.pinimg.com/736x/65/b7/75/65b775db77c9937e88c75cffc36e5620.jpg",
        "https://i.pinimg.com/736x/da/be/f4/dabef445fa45d1e4d43c6b9a2268ece4.jpg",
        "https://i.pinimg.com/1200x/42/02/4f/42024f85e39080aef6e48a7172fb3307.jpg",
        "https://i.pinimg.com/736x/27/7a/cd/277acd9638f45937f23d72b31a7fed0a.jpg",
        "https://i.pinimg.com/1200x/8f/8a/1f/8f8a1f6dbf6d95bdec5e7adf21a465be.jpg",
        "https://i.pinimg.com/736x/04/2f/73/042f7344fe2cdc98273f0a775e7f0f8c.jpg",
        "https://i.pinimg.com/736x/84/2a/6b/842a6be3c3f9262faac2751d6853f33f.jpg",
        "https://i.pinimg.com/1200x/28/94/0f/28940f60beea232f6175815376193a93.jpg",
    ];

    const handleAvatarSelect = (url, index) => {
        setSelectedAvatar(index);
        setprofileimg(url);
    };

    const loginRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            loginRef.current.children,
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
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3500/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    username: profilename, 
                    Password: Password, 
                    profile: profileimg 
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Signup failed!");
            }

            alert("Account created successfully! Please login now.");
            window.location.href = "/login";

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-between p-4 items-center h-full w-full bg-black">
            <div>
                <Leftside />
            </div>
            <div
                ref={loginRef}
                className="flex flex-col items-center h-screen w-[40%] rounded-4xl bg-black border-2 border-gray-700 text-white">
                <h2 className="text-2xl font-bold mt-2 underline underline-offset-15 text-green-400">
                    Create Account
                </h2>
                <div className="flex flex-col justify-center h-[20%] w-full items-center p-10 mt-1 ">
                    <h2 className="text-3xl mt-4">Welcome In wisper!</h2>
                    <p className="text-lg mt-2 text-gray-400 ">
                        Login to continue your anonymous journey.
                    </p>
                </div>

                <div className="h-[70px] w-3/4 border-2 border-green-700 rounded-3xl flex items-center gap-4 bg-white/10 mb-10 p-2 ">
                    <img
                        src={profileimg}
                        className="h-15 w-15 p-1 rounded-full object-cover border-2 border-gray-500"
                        alt="Profile Preview"
                    />
                    <h3>{profilename.trim() === "" ? "Username" : profilename}</h3>
                </div>

                {error && (
                    <div className="text-red-500 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-xl w-100 text-center text-sm mb-2">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSignup}
                    className="flex flex-col justify-center h-[40%] mt-3.5 w-full p-8 items-center ">
                    <input
                        onChange={(e) => setprofilename(e.target.value)}
                        type="text"
                        placeholder="Enter your username"
                        required
                        className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 h-12 w-100 p-3 rounded-2xl"
                    />

                    <div className="relative w-100 mt-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 h-12 w-full p-3 rounded-2xl mb-1"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3.5 text-xl cursor-pointer select-none focus:outline-none">
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <div className="w-[90%] mt-4 ">
                        <h5 className="mb-2 flex gap-2 items-center">
                            Choose Profile Image{" "}
                            <img
                                className="h-5 w-5 "
                                src="https://img.icons8.com/?size=100&id=99416&format=png&color=ffffff"
                                alt="icon"
                            />
                        </h5>
                        <div className="flex gap-3 w-full overflow-scroll scrollbar-none py-1">
                            {avatars.map((avatarUrl, index) => (
                                <img
                                    key={index}
                                    onClick={() => handleAvatarSelect(avatarUrl, index)}
                                    className={`h-15 w-15 border-2 rounded-full p-1 cursor-pointer transition-all ${
                                        selectedAvatar === index
                                            ? "border-green-500 scale-105"
                                            : "border-gray-600 hover:border-gray-400"
                                    }`}
                                    src={avatarUrl}
                                    alt={`Avatar ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 text-black font-bold ease rounded-xl mt-4 h-12 w-100 p-5 cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed flex justify-center items-center ">
                        {loading ? "Creating..." : "Go to chat"}
                        {!loading && (
                            <img
                                src="https://img.icons8.com/?size=100&id=99416&format=png&color=000000"
                                className="w-6 h-6 ml-2"
                                alt="arrow"
                            />
                        )}
                    </button>
                </form>

                <a href="/login">
                    <button className="text-white rounded-xl mt-6 h-12 w-100 p-5 cursor-pointer gap-2 flex justify-center items-center border-gray-700 border-2">
                        <img
                            src="https://img.icons8.com/?size=100&id=60023&format=png&color=00ff40"
                            className="w-6 h-6 ml-2"
                            alt="login-icon"
                        />
                        Login
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Login;