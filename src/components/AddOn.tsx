import { Box, Text, Flex } from "@chakra-ui/react";
import { useApp } from "../context";

interface IProps {
	selected: boolean;
	addon: {
		id: number;
		title: string;
		subtitle: string;
		monthly: number;
		yearly: number;
	};
}

const AddOn = ({ selected, addon }: IProps) => {
	const { billing, toggleAddon } = useApp();
	return (
		<Flex
			onClick={() => toggleAddon(addon.id)}
			align="center"
			justify="space-between"
			cursor="pointer"
			rounded="lg"
			bgColor={selected ? "neutral.200" : "white"}
			borderWidth={1}
			borderColor={selected ? "accent.500" : "neutral.300"}
			_hover={{ borderColor: "accent.500" }}
			px={4}
			py={3}>
			<Flex align="center" gap={4}>
				<input
					type="checkbox"
					checked={selected}
					width="3rem"
					height="3rem"
					readOnly
				/>
				<Box>
					<Text fontSize="lg" fontWeight={700} color="primary.500">
						{addon.title}
					</Text>
					<Text fontWeight={500} color="neutral.400">
						{addon.subtitle}
					</Text>
				</Box>
			</Flex>
			<Text color="accent.500">
				+${billing == "monthly" ? `${addon.monthly}/mo` : `${addon.yearly}/yr`}
			</Text>
		</Flex>
	);
};

export default AddOn;
