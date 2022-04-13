import React, { useEffect } from 'react';
import { PaletteMode, ThemeProvider, useTheme } from "@mui/material";

import "./index.css";
import { getTheme } from "./muiStyles";
import { AppContent, AppWrapper } from "./components/common";
import Faq from "./pages/Faq";
import ScoreMeaning from "./pages/ScoreMeaning";
import Header from "./components/header";


interface ChangePaletteMode {
    handleChangeMode: (mode: PaletteMode) => void;
}
export const ChangePaletteModeContext = React.createContext<ChangePaletteMode>({
    handleChangeMode: (mode: PaletteMode) => {
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
    // dependencies not needed t
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const theme = React.useMemo(() => getTheme(mode, thm), [mode]);

    return (
        <ChangePaletteModeContext.Provider value={{handleChangeMode}}>
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Header/>
                    <AppContent>
                        <Faq/>
                        <ScoreMeaning/>
                    </AppContent>
                </AppWrapper>
            </ThemeProvider>
        </ChangePaletteModeContext.Provider>
    );
}

export default App;
