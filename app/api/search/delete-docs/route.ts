import {NextResponse} from "next/server";
import {deleteAllDocs} from "../../modules/meilisearch";

export const GET = async () => {
	const res = await deleteAllDocs("items");
	return NextResponse.json({
		success: true,
		message: "Data deleted successfully",
		data: res,
	})
}
