export const trancateParagraph = (text: string, length: number) => {
	const trancated =
		text.length > length ? `${text.substring(0, length)}...` : text;
	return trancated;
};
