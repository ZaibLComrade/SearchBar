import SearchBar from "@/components/SearchBar";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center h-[calc(100%-86px)] gap-4">
			<div>
				<h1 className="flex flex-col items-center text-2xl gap-2">
					<span className="text-6xl font-bold">Meilisearch</span>
					<span>Search Bar</span>
				</h1>
			</div>
			<SearchBar />
		</section>
	);
}
