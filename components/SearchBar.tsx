import { Input } from "@nextui-org/input";
import { SearchIcon } from "./icons";

const SearchBar = () => {
	return (
		<div className="w-full">
			<Input
				startContent={<SearchIcon />}
				className="max-w-md mx-auto"
				placeholder="Search..."
			/>
		</div>
	);
};

export default SearchBar;
