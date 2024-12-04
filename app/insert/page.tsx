import InsertForm from "@/components/InsertForm";

const page = () => {

	return (
		<div className="flex flex-col items-center justify-center w-full gap-8">
			<h1 className="text-4xl">Insert data</h1>
			<InsertForm/>
		</div>
	);
};

export default page;
