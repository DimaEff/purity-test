import React, { Suspense } from 'react';
import { PaletteMode, ThemeProvider, useTheme } from "@mui/material";

import "./index.css";
import { getTheme } from "./muiStyles";
import { AppContent } from "./components/common";
import Header from "./components/header";


interface ChangePaletteMode {
    handleChangeMode: (mode: PaletteMode) => void;
}

export const ChangePaletteModeContext = React.createContext<ChangePaletteMode>({
    handleChangeMode: (mode: PaletteMode) => {},
});

function App() {
    // theming
    const [mode, setMode] = React.useState<PaletteMode>(localStorage.getItem("mode") === "light" ? 'light' : "dark");
    const handleChangeMode = (mode: PaletteMode) => {
        setMode(mode);
        localStorage.setItem("mode", mode);
    }
    const t = useTheme();
    const theme = React.useMemo(() => getTheme(mode, t), [mode]);

    return (
        <Suspense fallback={<div>loader</div>}>
            <ChangePaletteModeContext.Provider value={{handleChangeMode}}>
                <ThemeProvider theme={theme}>
                    <AppContent>
                        <Header />
                    </AppContent>
                </ThemeProvider>
            </ChangePaletteModeContext.Provider>
        </Suspense>
    );
}

export default App;
