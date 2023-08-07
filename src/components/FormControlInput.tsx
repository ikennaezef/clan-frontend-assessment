import { Flex, Input, FormLabel, Text } from "@chakra-ui/react";

interface IProps {
	value: string;
	label: string;
	placeholder?: string;
	onChange: (e: any) => void;
	error: {
		state: boolean;
		message: string;
	};
}

const FormControlInput = ({
	value,
	onChange,
	label,
	placeholder,
	error,
}: IProps) => {
	return (
		<Flex flexDir="column">
			<Flex align="center" justify="space-between">
				<FormLabel color="primary.500" fontWeight={500}>
					{label}
				</FormLabel>
				{error.state && (
					<Text color="error" fontSize="sm">
						{error.message}
					</Text>
				)}
			</Flex>
			<Input
				placeholder={placeholder ? placeholder : undefined}
				rounded="md"
				borderWidth={1}
				borderColor={error.state ? "error" : "neutral.300"}
				_focus={{ borderColor: "accent.500", borderWidth: 1 }}
				outline={0}
				value={value}
				onChange={onChange}
			/>
		</Flex>
	);
};

export default FormControlInput;
