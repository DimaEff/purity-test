import React, { useEffect, useMemo } from 'react';
import { Box, PaletteMode, ThemeProvider, useTheme } from "@mui/material";

import "./index.css";
import { getTheme } from "./muiTheme";
import { AppContent, AppWrapper } from "./components/common";
import { HeaderComponent } from "./components/header";
import PurityTest from "./pages/purityTest";
import ScoreMeaning from "./pages/scoreMeaning";
import Faq from "./pages/faq";


interface ChangePaletteMode {
    handleChangeMode: (mode: PaletteMode) => void;
}

export const ChangePaletteModeContext = React.createContext<ChangePaletteMode>({
    handleChangeMode: () => {
    },
});

function App() {
    // theming
    const [mode, setMode] = React.useState<PaletteMode>("light");
    useEffect(() => {
        setMode(localStorage.getItem("mode") === "light" ? 'light' : "dark");
    }, []);
    const handleChangeMode = (mode: PaletteMode) => {
        setMode(mode);
        localStorage.setItem("mode", mode);
    }

    const thm = useTheme();
    // dependencies not needed thm
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const theme = useMemo(() => getTheme(mode, thm), [mode]);

    return (
        <ChangePaletteModeContext.Provider value={{handleChangeMode}}>
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <AppContent>
                        <Box sx={{height: "100vh"}}>
                            <HeaderComponent/>
                            <PurityTest/>
                        </Box>
                        <ScoreMeaning/>
                        <Faq />
                    </AppContent>
                </AppWrapper>
            </ThemeProvider>
        </ChangePaletteModeContext.Provider>
    );
}

export default App;
