import { NextRequest, NextResponse } from "next/server"

export const POST = async(req: NextRequest) => {
	const data = await req.json();
	return NextResponse.json({
		success: true,
		message: "Successfully posted data",
		data,
	})
}

export const GET = async() => {
	return NextResponse.json("Hello World");
}
