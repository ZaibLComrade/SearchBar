import { NextRequest, NextResponse } from "next/server";
import { createSearchIndex, deleteAllDocs, getSearchData } from "../modules/meilisearch";
import crypto from "crypto";

export const POST = async (req: NextRequest) => {
	const data = await req.json();

	const newData = { id: crypto.randomUUID().slice(0, 6), ...data };

	const res = await createSearchIndex("items", [newData]);

	return NextResponse.json({
		success: true,
		message: "Successfully posted data",
		data: res,
	});
};

export const GET = async (req: NextRequest) => {
	const searchParams = await req.nextUrl.searchParams;
	const query = searchParams.get("q");
	const res = await getSearchData("items", query);

	return NextResponse.json({
		success: true,
		message: "Data fetched successfully",
		data: res,
	});
};

export const DELETE = async () => {
	const res = await deleteAllDocs("items");
	return NextResponse.json({
		success: true,
		message: "Data deleted successfully",
		data: res,
	})
}
