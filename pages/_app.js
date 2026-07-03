import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "../context/I18nContext";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Component {...pageProps} />
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
