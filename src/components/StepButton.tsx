import { Text, Button, Flex, Box } from "@chakra-ui/react";
import { useApp } from "../context";

interface IProps {
	step: number;
	title: string;
	selected: boolean;
}

const StepButton = ({ step, title, selected }: IProps) => {
	const { changeStep } = useApp();
	return (
		<Flex align="center" gap={4} onClick={() => changeStep(step)}>
			<Flex
				align="center"
				justify="center"
				rounded="full"
				borderWidth={2}
				borderColor="primary.200"
				bg={selected ? "primary.200" : "transparent"}
				w="2.2rem"
				h="2.2rem">
				<Text color={selected ? "" : "primary.200"} fontWeight={500}>
					{step}
				</Text>
			</Flex>
			<Box>
				<Text fontSize="sm" color="neutral.300">
					STEP {step}
				</Text>
				<Text
					fontWeight={500}
					fontSize="md"
					letterSpacing="wider"
					color="white">
					{title}
				</Text>
			</Box>
		</Flex>
	);
};

export default StepButton;
