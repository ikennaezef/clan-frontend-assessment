import { Flex, Box } from "@chakra-ui/react";
import FormSidebar from "./FormSidebar";
import { useApp } from "../context";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

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
		default:
			break;
	}
	return (
		<Flex rounded="lg" bg="white" w="1000px" h="600px" gap={2} p={3}>
			<FormSidebar />
			<Box w="70%" px={16} py={6}>
				{currentForm}
			</Box>
		</Flex>
	);
};

export default MultiStepForm;
