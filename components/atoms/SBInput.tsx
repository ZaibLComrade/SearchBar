"use client";
import { Input } from "@nextui-org/input";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
	name: string;
	variant?: "flat" | "bordered" | "faded" | "underlined";
	label?: ReactNode | string;
	className: string;
	placeholder?: string;
	isVisible?: boolean;
	startContent?: any;
}

const SBInput = ({
	name,
	isVisible = true,
	...props
}: IProps) => {
	const { register } = useFormContext();
	return (
		<Input
			{ ...props }
			{...register(name)}
			type={isVisible ? "text" : "password"}
		/>
	);
};

export default SBInput;
