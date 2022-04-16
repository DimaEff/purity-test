import React, { useMemo } from 'react';
import { Button, colors, SxProps, Theme, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useTranslation } from "react-i18next";

import { Localization } from "./localization";


type CarouselNavigationButtonType = "next" | "prev" | "success";
type ButtonValues = { [key in CarouselNavigationButtonType]: string};

const iconStyle: SxProps<Theme> = (theme) => ({
    color: theme.palette.mode === "dark" ? "white" : colors.grey[700],
});

const valuesIcons: {[key: string]: React.ReactComponentElement<any>} = {
    "<": <ArrowBackIosRoundedIcon fontSize={"small"} sx={iconStyle}/>,
    ">": <ArrowForwardIosRoundedIcon sx={iconStyle}/>,
};

interface CarouselNavigationButtonProps {
    type: CarouselNavigationButtonType;
    onClick: () => void;
}

const CarouselNavigationButton: React.FC<CarouselNavigationButtonProps> = ({type, onClick}) => {
    const {t} = useTranslation();

    const color = useMemo(() => type === "success" ? "success" : undefined, [type]);
    const variant = useMemo(() => (type === "next" || type === "success") ? "contained" : "outlined", [type]);
    const localization: ButtonValues = {
        next: Localization.NavigationNextButton,
        prev: Localization.NavigationPrevButton,
        success: Localization.NavigationSuccessButton,
    };
    const value = t(localization[type]);
    const Icon = valuesIcons[value];

    return (
        <Button
            color={color}
            variant={variant}
            onClick={onClick}
        >
            {Icon || <Typography variant={"subtitle2"}>{value}</Typography>}
        </Button>
    );
};

export default CarouselNavigationButton;