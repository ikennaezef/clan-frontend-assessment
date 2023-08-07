import { Text, Flex, Image } from "@chakra-ui/react";
import { useApp } from "../context";

interface IProps {
	selected: boolean;
	plan: {
		id: number;
		name: string;
		monthly: number;
		yearly: number;
		icon: string;
	};
}

const PlanCard = ({ selected, plan }: IProps) => {
	const { billing, changePlan } = useApp();
	return (
		<Flex
			flexDir={{ base: "row", md: "column" }}
			align={{ base: "center", md: "flex-start" }}
			cursor="pointer"
			onClick={() => changePlan(plan.id)}
			rounded="lg"
			w={{ base: "full", md: "9rem" }}
			bgColor={selected ? "neutral.200" : "white"}
			borderWidth={1}
			gap={{ base: 4, md: 8 }}
			borderColor={selected ? "accent.500" : "neutral.300"}
			_hover={{ borderColor: "accent.500" }}
			p={4}>
			<Image
				src={`/images${plan.icon}`}
				alt={plan.name}
				w="2.5rem"
				h="2.5rem"
				objectFit="cover"
			/>
			<Flex flexDir="column">
				<Text fontSize="lg" fontWeight={700}>
					{plan.name}
				</Text>
				<Text color="neutral.400">
					${billing == "monthly" ? `${plan.monthly}/mo` : `${plan.yearly}/yr`}
				</Text>
				{billing == "yearly" && (
					<Text fontWeight={500} fontSize="sm">
						2 months free
					</Text>
				)}
			</Flex>
		</Flex>
	);
};

export default PlanCard;
