import { useState } from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import FormControlInput from "../FormControlInput";
import { useApp } from "../../context";

const StepOne = () => {
	const { inputs, onInputChange, changeStep } = useApp();
	// const [inputs, setInputs] = useState({
	// 	name: "",
	// 	email: "",
	// 	phone: "",
	// });

	const [errors, setErrors] = useState({
		name: {
			state: false,
			message: "",
		},
		email: {
			state: false,
			message: "",
		},
		phone: {
			state: false,
			message: "",
		},
	});

	// const onInputChange = (value: string, fieldName: string) => {
	// 	setInputs((currentValues) => {
	// 		return {
	// 			...currentValues,
	// 			[fieldName]: value,
	// 		};
	// 	});
	// };

	const validateEmail = (mail: string) => {
		return mail.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};

	const verifyInputs = () => {
		if (inputs.name == "") {
			setErrors((currentValues) => {
				return {
					...currentValues,
					name: {
						state: true,
						message: "This field is required",
					},
				};
			});
		} else {
			setErrors((currentValues) => {
				return {
					...currentValues,
					name: {
						state: false,
						message: "",
					},
				};
			});
		}
		if (inputs.email == "") {
			setErrors((currentValues) => {
				return {
					...currentValues,
					email: {
						state: true,
						message: "This field is required",
					},
				};
			});
		} else if (!validateEmail(inputs.email)) {
			setErrors((currentValues) => {
				return {
					...currentValues,
					email: {
						state: true,
						message: "This email is invalid",
					},
				};
			});
		} else {
			setErrors((currentValues) => {
				return {
					...currentValues,
					email: {
						state: false,
						message: "",
					},
				};
			});
		}
		if (inputs.phone == "") {
			setErrors((currentValues) => {
				return {
					...currentValues,
					phone: {
						state: true,
						message: "This field is required",
					},
				};
			});
		} else {
			setErrors((currentValues) => {
				return {
					...currentValues,
					phone: {
						state: false,
						message: "",
					},
				};
			});
		}
	};

	const handleNext = () => {
		verifyInputs();
		if (
			inputs.name != "" &&
			inputs.email != "" &&
			validateEmail(inputs.email) &&
			inputs.phone != ""
		) {
			changeStep(2);
		}
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
						Personal info
					</Heading>
					<Text color="neutral.400">
						Please provide your name, email address, and phone number.
					</Text>
				</Box>
				<Flex flexDir="column" gap={5}>
					<FormControlInput
						label="Name"
						placeholder="e.g. Stephen King"
						onChange={(e) => onInputChange(e.target.value, "name")}
						value={inputs.name}
						error={errors.name}
					/>
					<FormControlInput
						label="Email Address"
						placeholder="e.g. stephenking@lorem.com"
						onChange={(e) => onInputChange(e.target.value, "email")}
						value={inputs.email}
						error={errors.email}
					/>
					<FormControlInput
						label="Phone Number"
						placeholder="e.g. +1 234 567 890"
						onChange={(e) => onInputChange(e.target.value, "phone")}
						value={inputs.phone}
						error={errors.phone}
					/>
				</Flex>
			</Box>

			<Flex
				pos={{ base: "absolute", md: "static" }}
				w={{ base: "full", md: "auto" }}
				bottom={0}
				bg="white"
				justify="flex-end"
				p={4}
				pt={{ base: 6, md: 2 }}
				mt={24}>
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

export default StepOne;
