import { NextRequest, NextResponse } from "next/server";
import { createSearchIndex, getSearchData } from "../modules/meilisearch";
import crypto from "crypto";

export const POST = async (req: NextRequest) => {
	const data = await req.json();

	const newData = { id: crypto.randomUUID().slice(0, 6), ...data };

	const res = await createSearchIndex("items", [newData]);

	return NextResponse.json({
		success: true,
		statusCode: 200,
		message: "Successfully posted data",
		data: res,
	});
};

export const GET = async (req: NextRequest) => {
	const searchParams = await req.nextUrl.searchParams;
	const query = searchParams.get("q");
	const res = await getSearchData("items", query);
	
	if(res.hits.length <= 0) return NextResponse.json({
		success: false,
		statusCode: 404,
		message: "Data not found",
	})

	return NextResponse.json({
		success: true,
		statusCode: 200,
		message: "Data fetched successfully",
		data: res.hits,
	});
};


