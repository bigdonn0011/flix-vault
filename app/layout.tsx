import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a cleaner mobile look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "| Flix-Vault |",
	description: "A high-performance movie browsing experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<head>
				{/* Google Material Symbols CDN */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
				/>
			</head>
			<body className={`${inter.className} min-h-full bg-background text-foreground antialiased`}>
				{children}
			</body>
		</html>
	);
}
