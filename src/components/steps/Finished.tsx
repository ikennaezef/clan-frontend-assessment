import { Heading, Text, Flex, Image } from "@chakra-ui/react";

const Finished = () => {
	return (
		<Flex
			bgColor={{ base: "white" }}
			align="center"
			shadow={{ base: "md", md: "none" }}
			w={{ base: "90%", md: "full" }}
			minH={{ base: "60vh", md: "100%" }}
			rounded={{ base: "lg", md: "none" }}
			mt={{ base: -24, md: 0 }}
			mx={{ base: "auto", md: "unset" }}
			p={{ base: 8, md: 0 }}>
			<Flex
				align="center"
				justify="center"
				height="100%"
				py={{ base: 4, md: 0 }}>
				<Flex flexDir="column" align="center">
					<Image
						src="/images/icon-thank-you.svg"
						alt="check"
						w="5rem"
						h="5rem"
						mb={8}
					/>
					<Heading fontSize="3xl" textAlign="center" fontWeight={700} mb={4}>
						Thank you!
					</Heading>
					<Text color="neutral.400" textAlign="center">
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Finished;
