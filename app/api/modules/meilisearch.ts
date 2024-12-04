import { EnqueuedTask, Meilisearch, SearchResponse } from "meilisearch";

const client = new Meilisearch({
	host: process.env.MEILISEARCH_HOST as string,
	apiKey: process.env.MEILISEARCH_MASTER_KEY,
});

export const createSearchIndex: (
	indexUid: string,
	documents: any[]
) => Promise<EnqueuedTask> = async (indexUid, documents) => {
	const response = await client.index(indexUid).addDocuments(documents);
	return response;
};

export const getSearchData: (
	indexUid: string,
	searchQuery: string | null
) => Promise<SearchResponse> = async (indexUid, searchQuery) => {
	const response = await client.index(indexUid).search(searchQuery);
	return response;
};

export const deleteAllDocs: (
	indexUid: string
) => Promise<EnqueuedTask> = async (indexUid) => {
	const response = await client.index(indexUid).deleteAllDocuments();
	return response;
};
