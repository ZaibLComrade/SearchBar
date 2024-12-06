import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number = 500) => {
	const [debounceValue, setDebounceValue] = useState<any>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debounceValue;
};

export default useDebounce;
