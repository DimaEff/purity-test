import React from 'react';
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

import { Localizations } from "../components/scoreMeaning/localizations";
import ScoreMeaningContent from "../components/scoreMeaning";
import { SectionWrapper } from "../components/common";


const ScoreMeaning = () => {
    const {t} = useTranslation();

    return (
        <SectionWrapper title={t(Localizations.Title)} scrollName={"scoreMeaning"}>
            <Typography variant={"h6"} fontWeight={"bold"} textAlign={"center"}>
                {t(Localizations.Description)}
            </Typography>
            <ScoreMeaningContent />
        </SectionWrapper>
    );
};

export default ScoreMeaning;