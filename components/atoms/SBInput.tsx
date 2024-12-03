"use client";
import { Input } from "@nextui-org/input";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
	name: string;
	variant?: "flat" | "bordered" | "faded" | "underlined";
	label: ReactNode | string;
	className: string;
	placeholder: string;
	isVisible?: boolean;
}

const SBInput = ({
	name,
	variant = "flat",
	label,
	className = "",
	placeholder = "",
	isVisible = true,
}: IProps) => {
	const { register } = useFormContext();
	return (
		<Input
			{...register(name)}
			label={label}
			variant={variant}
			className={className}
			placeholder={placeholder}
			type={isVisible ? "text" : "password"}
		/>
	);
};

export default SBInput;
