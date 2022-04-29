import React from 'react';
import { Divider, Stack, Typography } from "@mui/material";
import { useBreakpoints } from "../../hooks";
import { ScoreSettings } from "./utils";
import { useTranslation } from "react-i18next";


interface ScoreMeaningItemProps {
    scoreMeaningUpperLimit: string;
    scoreMeaningDownLimit: string;
    scoreMeaningSettings: ScoreSettings;
}

const ScoreMeaningItem: React.FC<ScoreMeaningItemProps> = (
    {
        scoreMeaningUpperLimit,
        scoreMeaningDownLimit,
        scoreMeaningSettings,
    }
) => {
    const {t} = useTranslation();
    const {isMobile} = useBreakpoints();

    const {color, textId} = scoreMeaningSettings;

    return (
        <>
            <Stack
                sx={theme => ({
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    margin: theme.spacing(2, 1),
                })}
                spacing={3}
            >
                <Typography variant={"h2"} fontWeight={"bold"} sx={{color}}>
                    {`${scoreMeaningUpperLimit} - ${scoreMeaningDownLimit}`}
                </Typography>

                <Typography textAlign={"center"} fontWeight={isMobile ? "normal" : "bold"}>
                    {t(textId)}
                </Typography>
            </Stack>
            {scoreMeaningDownLimit === "0" || <Divider/>}
        </>
    );
};

export default ScoreMeaningItem;