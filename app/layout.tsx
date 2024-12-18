import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/Navbar";
import {Toaster} from "sonner";

export const metadata: Metadata = {
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers
					themeProps={{ attribute: "class", defaultTheme: "dark" }}
				>
					<Navbar/>
					<div className="relative flex flex-col h-[calc(100vh-64px)]">
						<main className="container flex-grow mx-auto max-w-7xl">
							{children}
						</main>
					</div>
					<Toaster/>
				</Providers>
			</body>
		</html>
	);
}
