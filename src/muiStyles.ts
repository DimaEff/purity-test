import { createTheme, PaletteMode, Theme } from "@mui/material";

import { BORDER_RADIUS } from "./consts/theme";

export const getTheme = (mode: PaletteMode, theme: Theme) => createTheme({
    palette: { mode },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: mode === "light" ? 0 : 8,
            },
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS,
                    padding: theme.spacing(2),
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: "none",
                    outline: "none",
                }
            }
        }
    },
});