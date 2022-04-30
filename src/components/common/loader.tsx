import React from 'react';
import { Box } from "@mui/material";

// import logo from "../../assets/purity-logo.svg";
import { BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../consts/theme";


const Loader = () => {
    return (
        <Box
            sx={theme => ({
                display: "flex",
                justifyContent: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: theme.palette.mode === "light" ? BACKGROUND_COLOR_LIGHT : BACKGROUND_COLOR_DARK,
            })}
        >
            {/*<img style={{width: "300px"}} src={logo} alt="logo"/>*/}
        </Box>
    );
};

export default Loader;