"use client";
import { SubmitHandler } from "react-hook-form";
import SBForm from "./atoms/SBForm";
import SBInput from "./atoms/SBInput";
import { SearchIcon } from "./icons";
import { config } from "@/config";

const SearchBar = () => {
	const onSubmit: SubmitHandler<any> = async (data) => {
		const { searchQuery } = data;
		const response = await fetch(`${config.server_url}/api/search?q=${searchQuery}`);
		const result = await response.json();
		console.log(result);
	};

	return (
		<div className="w-full">
			<SBForm onSubmit={onSubmit}>
				<SBInput
					name="searchQuery"
					placeholder="Search..."
					className="max-w-md mx-auto"
					startContent={<SearchIcon />}
				/>
			</SBForm>
		</div>
	);
};

export default SearchBar;
