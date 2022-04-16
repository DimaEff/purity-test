import { colors, createTheme, PaletteMode, Theme } from "@mui/material";

import { BORDER_RADIUS1, BORDER_RADIUS2 } from "./consts/theme";

export const getTheme = (mode: PaletteMode, theme: Theme) => createTheme({
    palette: {
        mode,
        primary: {
            main: mode === "light" ? colors.blue[500]: colors.blue[700],
            dark: colors.blue[800],
        },
        success: {
            main: colors.lightGreen["700"],
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: mode === "light" ? 0 : 8,
            },
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS2,
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
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS1,
                    padding: theme.spacing(1),
                    minWidth: theme.spacing(0),
                    textTransform: "none",
                },
            }
        },
        MuiIcon: {
            styleOverrides: {
                root: {
                    margin: theme.spacing(0),
                    padding: theme.spacing(0),
                }
            }
        },
    },
});