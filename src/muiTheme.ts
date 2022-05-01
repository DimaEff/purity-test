import { createTheme, PaletteMode, Theme } from "@mui/material";

import {
    BORDER_RADIUS1,
    BORDER_RADIUS2,
    BUTTON_PRIMARY_ACTIVE,
    BUTTON_PRIMARY_DARK,
    BUTTON_PRIMARY_LIGHT,
    BUTTON_SUCCESS,
    TEXT_COLOUR_DARK,
    TEXT_COLOUR_LIGHT,
} from "./_forChanges/theme";

export const getTheme = (mode: PaletteMode, theme: Theme) => createTheme({
    palette: {
        mode,
        primary: {
            main: mode === "light" ? BUTTON_PRIMARY_LIGHT : BUTTON_PRIMARY_DARK,
            dark: BUTTON_PRIMARY_ACTIVE,
        },
        success: {
            main: BUTTON_SUCCESS,
        },
    },
    typography: {
        fontFamily: [
            "Montserrat",
            "sans-serif",
        ].join(","),
        allVariants: {
            color: mode === "light" ? TEXT_COLOUR_LIGHT : TEXT_COLOUR_DARK,
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
                focusRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: BORDER_RADIUS1,
                    minWidth: theme.spacing(0),
                    textTransform: "none",
                    minHeight: theme.spacing(5),
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