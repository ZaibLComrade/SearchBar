import { useEffect, useState } from "react";

type DebounceFunction = <T>(value: T, delay?: number) => T

const useDebounce: DebounceFunction = (value, delay = 500) => {
	const [debounceValue, setDebounceValue] = useState(value);

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
