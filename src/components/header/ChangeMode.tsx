import React, { useContext } from 'react';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { ChangePaletteModeContext } from "../../App";
import { Box, colors, IconButton, useTheme } from "@mui/material";


const ChangeMode = () => {
    const { palette } = useTheme();
    const { handleChangeMode } = useContext(ChangePaletteModeContext);

    return (
        <Box>
            {
                palette.mode === "light" ?
                    <IconButton onClick={() => handleChangeMode("dark")}>
                        <ModeNightIcon fontSize={"large"} sx={{ color: colors.indigo[300] }}/>
                    </IconButton> :
                    <IconButton onClick={() => handleChangeMode("light")}>
                        <Brightness5Icon fontSize={"large"} sx={{ color: colors.yellow[800] }}/>
                    </IconButton>
            }
        </Box>
    );
};

export default ChangeMode;