import { Flex } from "@chakra-ui/react";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
	return (
		<Flex align="center" justify="center" w="full" h="100vh" bg="primary.200">
			<MultiStepForm />
		</Flex>
	);
};

export default App;
