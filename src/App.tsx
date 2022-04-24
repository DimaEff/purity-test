import React, { useEffect, useMemo } from 'react';
import { PaletteMode, ThemeProvider, useTheme } from "@mui/material";

import "./index.css";
import { getTheme } from "./muiTheme";
import { AppContent, AppWrapper } from "./components/common";
import { HeaderComponent } from "./components/header";
import PurityTest from "./pages/purityTest";
import { useBreakpoints } from "./hooks";


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

    const {isMobile} = useBreakpoints();
    const thm = useTheme();
    // dependencies not needed thm
    const theme = useMemo(() => getTheme(mode, isMobile, thm), [mode, isMobile]);

    return (
        <ChangePaletteModeContext.Provider value={{handleChangeMode}}>
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <AppContent>
                        <HeaderComponent/>
                        <PurityTest/>
                    </AppContent>
                </AppWrapper>
            </ThemeProvider>
        </ChangePaletteModeContext.Provider>
    );
}

export default App;
