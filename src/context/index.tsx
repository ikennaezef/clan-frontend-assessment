import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
	currentStep: 1,
	changeStep: (step: number) => {},
});

export const useApp = () => {
	return useContext(AppContext);
};

interface IProps {
	children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
	const [currentStep, setCurrentStep] = useState<number>(1);

	const changeStep = (step: number) => {
		setCurrentStep(step);
	};

	const values = {
		currentStep,
		changeStep,
	};
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
