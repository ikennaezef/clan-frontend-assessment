import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
	inputs: {
		name: "",
		email: "",
		phone: "",
	},
	onInputChange: (value: string, fieldName: string) => {},
	currentStep: 1,
	changeStep: (step: number) => {},
	billing: "monthly",
	toggleBilling: () => {},
	plan: 1,
	changePlan: (id: number) => {},
	toggleAddon: (id: number) => {},
	addonList: [],
});

export const useApp = () => {
	return useContext(AppContext);
};

interface IProps {
	children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
	const [plan, setPlan] = useState<number>(1);
	const [selectedAddons, setSelectedAddons] = useState<any>([]);

	const onInputChange = (value: string, fieldName: string) => {
		setInputs((currentValues) => {
			return {
				...currentValues,
				[fieldName]: value,
			};
		});
	};

	const changeStep = (step: number) => {
		setCurrentStep(step);
	};

	const toggleBilling = () => {
		if (billing == "monthly") {
			setBilling("yearly");
		} else {
			setBilling("monthly");
		}
	};

	const changePlan = (id: number) => {
		setPlan(id);
	};

	const toggleAddon = (id: number) => {
		const addOnIsSelected = selectedAddons.findIndex(
			(current: any) => current == id
		);

		if (addOnIsSelected != -1) {
			setSelectedAddons((currentValue: any) => {
				return currentValue.filter((current: any) => current != id);
			});
		} else {
			setSelectedAddons((currentValue: any) => {
				return [...currentValue, id];
			});
		}
	};

	const values = {
		inputs,
		onInputChange,
		currentStep,
		changeStep,
		billing,
		toggleBilling,
		plan,
		changePlan,
		addonList: selectedAddons,
		toggleAddon,
	};
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
