
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
            main: "#53c318",
        },
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "sans-serif",
        ].join(","),
        allVariants: {
            color: mode === "light" ? theme.palette.text.primary : colors.grey[400],
        }
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
                    maxWidth: "100vh",
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
                focusRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS1,
                    minWidth: theme.spacing(0),
                    textTransform: "none",
                    minHeight: theme.spacing(5),
                },
                containedPrimary: {
                    backgroundColor: theme.palette.mode === "dark" ? colors.blue[800] : theme.palette.primary.main,
                },
                outlined: {
                    padding: theme.spacing(1),
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