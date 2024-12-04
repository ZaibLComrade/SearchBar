"use client";

import { Textarea } from "@nextui-org/input";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
	name: string;
	variant?: "flat" | "bordered" | "faded" | "underlined";
	label?: ReactNode | string;
	className?: string;
	placeholder?: string;
	isVisible?: boolean;
	startContent?: any;
	row?: number;
	col?: number;
}

const SBTextarea = ({ name, ...props }: IProps) => {
	const { register } = useFormContext();

	return <Textarea {...props} {...register(name)} />;
};

export default SBTextarea;
