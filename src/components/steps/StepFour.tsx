import { Box, Button, Heading, Text, Flex, Divider } from "@chakra-ui/react";
import { useApp } from "../../context";
import { plans, addons } from "../../constants";

const StepFour = () => {
	const { billing, plan, addonList, changeStep } = useApp();

	const selectedPlan = plans[plan - 1];
	const sortedAddonIds = addonList.sort();
	const sortedAddons = sortedAddonIds.map((addonId) =>
		addons.find((currentAddon) => currentAddon.id == addonId)
	);

	let totalPrice: number | undefined;

	const calcTotal = () => {
		let itemsToSum;
		switch (billing) {
			case "monthly":
				itemsToSum = [selectedPlan, ...sortedAddons].map(
					(field) => field?.monthly
				);
				totalPrice = itemsToSum.reduce(
					(accumulator, currentValue) => accumulator! + currentValue!,
					0
				);
				return totalPrice;
				break;
			case "yearly":
				itemsToSum = [selectedPlan, ...sortedAddons].map(
					(field) => field?.yearly
				);
				totalPrice = itemsToSum.reduce(
					(accumulator, currentValue) => accumulator! + currentValue!,
					0
				);
				return totalPrice;
				break;
			default:
				break;
		}
	};

	const handlePrev = () => {
		changeStep(3);
	};

	const handleNext = () => {
		changeStep(5);
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
						Finishing up
					</Heading>
					<Text color="neutral.400">
						Double-check everything looks OK before confirming
					</Text>
				</Box>

				<Flex flexDir="column" bg="neutral.200" rounded="lg" p={4}>
					<Flex align="center" justify="space-between">
						<Box>
							<Text fontSize="lg" color="primary.500" fontWeight={700}>
								{selectedPlan.name} (
								{billing == "monthly" ? "Monthly" : "Yearly"})
							</Text>
							<Button
								onClick={() => changeStep(2)}
								variant="link"
								fontWeight={400}
								textDecoration="underline"
								color="neutral.400">
								Change
							</Button>
						</Box>
						<Text fontSize="lg" color="primary.500" fontWeight={700}>
							$
							{billing == "monthly"
								? `${selectedPlan.monthly}/mo`
								: `${selectedPlan.yearly}/yr`}
						</Text>
					</Flex>
					<Divider my={4} />
					{sortedAddons.map((addon) => (
						<Flex key={addon?.id} align="center" justify="space-between" mb={4}>
							<Text color="neutral.400">{addon?.title}</Text>
							<Text fontWeight={500}>
								+$
								{billing == "monthly"
									? `${addon?.monthly}/mo`
									: `${addon?.yearly}/yr`}
							</Text>
						</Flex>
					))}
				</Flex>

				<Flex align="center" justify="space-between" mt={4} p={2}>
					<Text color="neutral.400">
						Total ({billing == "monthly" ? "per month" : "per year"})
					</Text>
					<Text color="accent.500" fontSize="lg" fontWeight={700}>
						+$
						{billing == "monthly" ? `${calcTotal()}/mo` : `${calcTotal()}/yr`}
					</Text>
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
					bg="accent.500"
					color="neutral.200"
					fontWeight={400}
					rounded="md"
					_hover={{ opacity: 0.8 }}
					onClick={handleNext}>
					Confirm
				</Button>
			</Flex>
		</Box>
	);
};

export default StepFour;
