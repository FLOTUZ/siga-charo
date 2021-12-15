import "../styles.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

//Colores personalizados
const colors = {
  core: {
    900: "#242B42", //Dark primary
    850: "#2E3650", //Dark secondary
    800: "#808FBE", //Light Secondary
    700: "#2E3650", //BNT Dark
    600: "#2B2056", //BNT DEEP
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
