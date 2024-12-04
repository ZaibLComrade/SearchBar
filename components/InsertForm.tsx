"use client";
import { SubmitHandler } from "react-hook-form";
import SBForm from "./atoms/SBForm";
import SBInput from "./atoms/SBInput";
import SBTextarea from "./atoms/SBTextarea";
import { Button } from "@nextui-org/button";
import { config } from "@/config";

const InsertForm = () => {
	const onSubmit: SubmitHandler<any> = async (data) => {
		const response = await fetch(
			`${config.server_url}/api/search/add-index`,
			{
				method: "POST",
				body: data,
				headers: new Headers({
					"Content-Type": "application/json",
					Accept: "application/json",
				}),
			}
		);
		const result = await response.json();
		console.log(result);
	};

	return (
		<SBForm onSubmit={onSubmit} className="w-full max-w-xl space-y-4">
			<SBInput name="item" label="Item Name" />
			<SBTextarea name="description" label="Item Description" row={10} />
			<Button type="submit">Submit</Button>
		</SBForm>
	);
};

export default InsertForm;
