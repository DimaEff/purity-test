import React from 'react';
import { Box, Paper, Stack } from "@mui/material";

import { useBreakpoints } from "../../hooks";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import ChangeMode from "./ChangeMode";


const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <Paper
            sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: theme.spacing(90),
                height: theme.spacing(5),
                margin: theme.spacing(2, 1),
            })}
        >
            <Box>
                {t("test")}
            </Box>
            <Stack direction={"row"} spacing={1}>
                <ChangeMode />
                <LanguageSelect />
            </Stack>
        </Paper>
    );
};

const Header = () => {
    const {isMobile} = useBreakpoints();

    return (
        <Box
            sx={(theme) => ({
                zIndex: theme.zIndex.tooltip,
                position: "fixed",
                [isMobile ? "bottom" : "top"]: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: 800,
            })}
        >
            <HeaderComponent/>
        </Box>
    )
}

export default Header;