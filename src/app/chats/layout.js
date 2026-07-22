import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Wisper",
	description: "An Chating App for Whisper's",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-screen bg-black flex flex-col items-stretch text-white">
				<main className="h-screen w-full flex flex-grow">{children}</main>
			</body>
		</html>
	);
}
