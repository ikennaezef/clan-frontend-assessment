import { Box, Button, Heading, Text, Flex, Switch } from "@chakra-ui/react";
import PlanCard from "../PlanCard";
import { useApp } from "../../context";
import { plans } from "../../constants";

const StepTwo = () => {
	const { billing, toggleBilling, plan, changeStep } = useApp();

	const handleNext = () => {
		changeStep(3);
	};

	const handlePrev = () => {
		changeStep(1);
	};

	return (
		<Box>
			<Box
				bgColor={{ base: "white" }}
				shadow={{ base: "md", md: "none" }}
				w={{ base: "90%", md: "full" }}
				rounded={{ base: "lg", md: "none" }}
				mt={{ base: -24, md: 0 }}
				mx={{ base: "auto", md: "unset" }}
				p={{ base: 8, md: 0 }}>
				<Box mb={10}>
					<Heading fontSize="2xl" fontWeight={700} color="primary.500" mb={2}>
						Select your plan
					</Heading>
					<Text color="neutral.400">
						You have the option of monthly or yearly billing
					</Text>
				</Box>
				<Box>
					<Flex flexDir={{ base: "column", md: "row" }} gap={4}>
						{plans.map((current) => (
							<PlanCard
								key={current.id}
								plan={current}
								selected={plan == current.id}
							/>
						))}
					</Flex>

					<Flex
						align="center"
						justify="center"
						gap={2}
						bg="neutral.200"
						rounded="md"
						mt={8}
						p={3}>
						<Text
							color={billing == "monthly" ? "primary.500" : "neutral.400"}
							fontWeight={500}>
							Monthly
						</Text>
						<Switch
							colorScheme="primary"
							isChecked={billing == "yearly"}
							onChange={toggleBilling}
						/>
						<Text
							color={billing == "yearly" ? "primary.500" : "neutral.400"}
							fontWeight={500}>
							Yearly
						</Text>
					</Flex>
				</Box>
			</Box>

			<Flex
				pos={{ base: "absolute", md: "static" }}
				w={{ base: "full", md: "auto" }}
				bottom={0}
				bg="white"
				align="center"
				justify="space-between"
				p={4}
				pt={{ base: 6, md: 2 }}
				mt={24}>
				<Button
					bg="transparent"
					color="neutral.400"
					fontWeight={400}
					rounded="md"
					_hover={{ color: "primary.500" }}
					onClick={handlePrev}>
					Go Back
				</Button>
				<Button
					bg="primary.500"
					color="neutral.200"
					fontWeight={400}
					rounded="md"
					_hover={{ opacity: 0.8 }}
					onClick={handleNext}>
					Next Step
				</Button>
			</Flex>
		</Box>
	);
};

export default StepTwo;
