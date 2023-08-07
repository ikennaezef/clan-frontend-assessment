import React from "react";
import {
	Box,
	Input,
	FormControl,
	FormLabel,
	Heading,
	Text,
	Flex,
} from "@chakra-ui/react";

const StepOne = () => {
	return (
		<Box>
			<Box mb={8}>
				<Heading fontSize="2xl" fontWeight={700} color="primary.800" mb={2}>
					Personal info
				</Heading>
				<Text color="neutral.400">
					Please provide your name, email address, and phone number.
				</Text>
			</Box>
			<Box>
				<Flex flexDir="column">
					<FormLabel fontWeight={500}>Name</FormLabel>
					<Input
						placeholder="e.g. Stephen King"
						rounded="md"
						borderWidth={1}
						borderColor="neutral.300"
					/>
				</Flex>
			</Box>
		</Box>
	);
};

export default StepOne;
