"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import SBForm from "./atoms/SBForm";
import SBInput from "./atoms/SBInput";
import { SearchIcon } from "./icons";
import { config } from "@/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";
import { trancateParagraph } from "@/utils/trancateParagraph";
import { Input } from "@nextui-org/input";

interface Item {
	id: string;
	item: string;
	description: string;
}

const SearchBar = () => {
	const [searchResult, setSearchResult] = useState<Item[]>([]);
	const { register, watch } = useForm();
	console.log(watch())

	return (
		<div className="flex flex-col items-center justify-center w-full max-w-md gap-[2px]">
			<form className="w-full">
				<Input
					{...register("searchTerm")}
					className="mx-auto"
					placeholder="Search..."
					startContent={<SearchIcon />}
				/>
			</form>
			<div
				className={`w-full p-2 rounded-xl ${searchResult.length < 1 && "invisible"} bg-default-100`}
			>
				<ul className="space-y-1">
					{searchResult.map((res, idx) => (
						<>
							<li key={res.id} className="flex flex-col">
								<span>{res.item}</span>
								<span className="text-xs text-default-400">
									{trancateParagraph(res.description, 75)}
								</span>
							</li>
							{searchResult.length - 1 > idx && <Divider />}
						</>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SearchBar;
