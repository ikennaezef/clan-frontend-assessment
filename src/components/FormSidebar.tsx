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
			w={{ base: "100%", md: "30%" }}
			h={{ base: "12rem", md: "auto" }}
			bgImage={{
				base: "/images/bg-sidebar-mobile.svg",
				md: "/images/bg-sidebar-desktop.svg",
			}}
			bgRepeat="no-repeat"
			bgPosition="center"
			bgSize="cover"
			rounded={{ base: "none", md: "lg" }}
			p={8}>
			<Flex
				direction={{ base: "row", md: "column" }}
				justify={{ base: "center", md: "flex-start" }}
				gap={{ base: 4, md: 6 }}
				pt={{ base: 2, md: 0 }}>
				{steps.map((step) => (
					<StepButton
						key={step.id}
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
