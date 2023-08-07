import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import AddOn from "../AddOn";
import { useApp } from "../../context";
import { addons } from "../../constants";

const StepThree = () => {
	const { addonList, changeStep } = useApp();
	const handleNext = () => {
		changeStep(4);
	};

	const handlePrev = () => {
		changeStep(2);
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
						Pick add-ons
					</Heading>
					<Text color="neutral.400">
						Add-ons help enhance your gaming experience.
					</Text>
				</Box>
				<Flex flexDir="column" gap={4}>
					{addons.map((currentAddon) => {
						const find = addonList.findIndex((i) => currentAddon.id == i);
						const isSelected = find != -1;

						return (
							<AddOn
								key={currentAddon.id}
								addon={currentAddon}
								selected={isSelected}
							/>
						);
					})}
				</Flex>
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

export default StepThree;
