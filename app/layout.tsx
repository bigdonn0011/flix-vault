import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
	metadataBase: new URL("https://flix-vault-001.vercel.app"),
	title: " Flix-Vault ",
	description: "FLIX-VAULT is a high-performance, mobile-first cinematic discovery terminal built to instantly query, filter, and track over thousands of movie indexes in real time without heavy framework bloat.",


	openGraph: {
		title: "Flix-Vault",
		description: "FLIX-VAULT is a high-performance, mobile-first cinematic discovery terminal built to instantly query, filter, and track over thousands of movie indexes in real time without heavy framework bloat.",
		url: "https://flix-vault-001.vercel.app/",
		type: "website",
		images: [
			{
				url: "https://i.ibb.co/HL8tFQQV/Flix-logo.webp",
				width: 1200,
				height: 630,
				alt: "Flix-Vault Mobile Movie Discovery Terminal Interface Logo",
			},
		],
	},


	twitter: {
		card: "summary_large_image",
		title: "Flix-Vault",
		description: "FLIX-VAULT is a high-performance, mobile-first cinematic discovery terminal built to instantly query, filter, and track over thousands of movie indexes in real time.",
		images: ["https://i.ibb.co/HL8tFQQV/Flix-logo.webp"],
	},


	robots: {
		index: true,
		follow: true,
	},
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
