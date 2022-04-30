import React from 'react';
import { Stack, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useTranslation } from "react-i18next";

import { Localizations } from "./localizations";
import { scrollTo } from "../../utils";


const SeeMore = () => {
    const {t} = useTranslation();

    return (
        <Stack
            spacing={1}
            sx={{
                textAlign: "center",
                cursor: "pointer",
            }}
            onClick={() => scrollTo("scoreMeaning")}
        >
            <Typography variant={"h6"} fontWeight={"bold"}>
                {t(Localizations.SeMoreButton)}
            </Typography>
            <Typography>
                <ArrowBackIosRoundedIcon
                    sx={{
                        transform: "rotate(-90deg)",
                        fontSize: 32,
                    }}
                />
            </Typography>
        </Stack>
    );
};

export default SeeMore;