import { Box, Flex } from "@chakra-ui/react";
import StepButton from "./StepButton";
import { useApp } from "../context";

const steps = [
	{
		id: 1,
		title: "YOUR INFO",
	},
	{
		id: 2,
		title: "SELECT PLAN",
	},
	{
		id: 3,
		title: "ADD-ONS",
	},
	{
		id: 4,
		title: "SUMMARY",
	},
];

const FormSidebar = () => {
	const { currentStep } = useApp();
	return (
		<Box
			w="30%"
			bgImage="/images/bg-sidebar-desktop.svg"
			bgRepeat="no-repeat"
			bgPosition="center"
			bgSize="cover"
			rounded="lg"
			p={8}>
			<Flex direction="column" gap={6}>
				{steps.map((step) => (
					<StepButton
						step={step.id}
						title={step.title}
						selected={currentStep == step.id}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default FormSidebar;
