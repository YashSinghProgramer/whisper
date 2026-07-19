import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/home/NavBar";
import Footer from "../components/Footer/footer";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Wishper",
	description: "An Chating App for Whisper's",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
		
			<body className="min-h-screen bg-black flex flex-col items-stretch text-white">
				<Navbar />
				
				<main className="w-full flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
