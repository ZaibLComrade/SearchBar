"use client";
import { SubmitHandler } from "react-hook-form";
import SBForm from "./atoms/SBForm";
import SBInput from "./atoms/SBInput";
import { SearchIcon } from "./icons";

const SearchBar = () => {
	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data);
	};

	return (
		<div className="w-full">
			<SBForm onSubmit={onSubmit}>
				<SBInput
					name="search"
					placeholder="Search..."
					className="max-w-md mx-auto"
					startContent={<SearchIcon />}
				/>
			</SBForm>
		</div>
	);
};

export default SearchBar;
