import {Outlet} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../assets/theme/index.js";

const BaseLayout = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Outlet/>
        </ThemeProvider>
    );
}

export default BaseLayout