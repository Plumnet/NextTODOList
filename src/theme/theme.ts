import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "gray.600",
				color: "red.100"
			}
		}
	}		
});
export default theme;