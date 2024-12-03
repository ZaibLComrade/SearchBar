import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";

import {
	SearchIcon,
} from "@/components/icons";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex items-center justify-start gap-1"
						href="/"
					>
						<p className="text-xl font-bold text-inherit">SearchBar</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="flex-row-reverse gap-8">
				<NextLink href="/">Home</NextLink>
				<Button href="/insert" as={ Link }>Insert Data</Button>
			</NavbarContent>
		</NextUINavbar>
	);
};
