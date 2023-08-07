import { Flex, Box } from "@chakra-ui/react";
import FormSidebar from "./FormSidebar";
import { useApp } from "../context";
import { StepOne, StepTwo, StepThree, StepFour, Finished } from "./steps";

const MultiStepForm = () => {
	const { currentStep } = useApp();
	let currentForm;

	switch (currentStep) {
		case 1:
			currentForm = <StepOne />;
			break;
		case 2:
			currentForm = <StepTwo />;
			break;
		case 3:
			currentForm = <StepThree />;
			break;
		case 4:
			currentForm = <StepFour />;
			break;
		case 5:
			currentForm = <Finished />;
			break;
		default:
			break;
	}
	return (
		<Flex
			flexDir={{ base: "column", md: "row" }}
			rounded={{ base: "none", md: "lg" }}
			bg="white"
			w={{ base: "100%", md: "900px" }}
			h={{ base: "100%", md: "600px" }}
			gap={{ base: 0, md: 2 }}
			p={{ base: 0, md: 3 }}>
			<FormSidebar />
			<Box
				pos="relative"
				minH={{ base: "80vh", md: "100%" }}
				w={{ base: "100%", md: "70%" }}
				bg={{ base: "neutral.200", md: "white" }}
				px={{ base: 0, md: 16 }}
				py={6}
				pb={{ base: 0, md: 6 }}>
				{currentForm}
			</Box>
		</Flex>
	);
};

export default MultiStepForm;
