import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import theme from "./utils/theme.ts";
import AppProvider from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</AppProvider>
	</React.StrictMode>
);
