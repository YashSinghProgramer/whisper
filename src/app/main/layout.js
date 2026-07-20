import Navbar from "./home/NavBar";
import Footer from "../../components/Footer/footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`h-full antialiased`}>
			<body className="min-h-screen bg-black flex flex-col items-stretch text-white">
				<main className="w-full flex-grow">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
