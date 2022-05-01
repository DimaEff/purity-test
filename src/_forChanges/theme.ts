import { createTheme } from "@mui/material";
import { blue, blueGrey, green, grey, lightGreen, lime, orange, red } from "@mui/material/colors";


const theme = createTheme();

/**
 * colours can be:
 * 1. colour from @mui lib(https://mui.com/material-ui/customization/color/#color-palette); green[500]
 * 2. like string with hex/rgb/rgba colour; "#1DA1F2"/"rgb(255, 255, 255)"/"rgba(255, 255, 255, 0.8)"
 */

// main colours
export const BACKGROUND_COLOR_LIGHT = grey[200];
export const BACKGROUND_COLOR_DARK = blueGrey[900];

export const TEXT_COLOUR_LIGHT = grey[900];
export const TEXT_COLOUR_DARK = grey[400];

export const BUTTON_PRIMARY_LIGHT = blue[500];
export const BUTTON_PRIMARY_DARK = blue[700];
export const BUTTON_PRIMARY_ACTIVE = blue[800];
export const BUTTON_SUCCESS = "#53c318";

// score meaning(SM) colors
export const SM_100 = green[500];
export const SM_97 = lightGreen[500];
export const SM_93 = lime[500];
export const SM_76 = orange[500];
export const SM_44 = orange[900];
export const SM_8 = red[600];

// not for changes
export const BORDER_RADIUS1 = theme.spacing(1);
export const BORDER_RADIUS2 = theme.spacing(2);