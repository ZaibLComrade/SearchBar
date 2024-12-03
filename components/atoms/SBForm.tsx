"use client"
import {ReactNode} from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IProps {
	children: ReactNode;
	defaultValues?: Record<string, unknown>;
	className?: string;
	onSubmit: SubmitHandler<any>;
	resolver?: any;
}

const SBForm = ({
	children,
	defaultValues,
	onSubmit,
	resolver,
	className,
}: IProps) => {
	const formConfigs: {
		defaultValues?: Record<string, unknown>;
		resolver?: any;
	} = {};

	if (!!defaultValues) formConfigs["defaultValues"] = defaultValues;
	if (!!resolver) formConfigs["resolver"] = resolver;

	const methods = useForm(formConfigs);

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className={className}
			>
				{children}
			</form>
		</FormProvider>
	);
};

export default SBForm;
