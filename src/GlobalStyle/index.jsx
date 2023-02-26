import "./style.scss";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const GlobalStyle = ({ children }) => {
    return <>{children}</>;
};
export default GlobalStyle;
