import React from 'react';
import { Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { FaqQuestion } from "../components/faq/types";
import { SectionWrapper } from "../components/common";
import { useBreakpoints } from "../hooks";
import { Localizations } from "../components/faq/localizations";


const Faq = () => {
    const {t} = useTranslation();
    const {isMobile} = useBreakpoints();

    const faqQuestions: FaqQuestion[] = t(Localizations.FaqQuestions, {returnObjects: true});

    return (
        <SectionWrapper scrollName={"faq"}>
            {faqQuestions.map(({title, description}, i) => <React.Fragment key={title}>
                    <SectionWrapper title={title}>
                        <Typography textAlign={"center"} fontWeight={isMobile ? "normal" : "bold"}>
                            {description}
                        </Typography>
                    </SectionWrapper>
                    {faqQuestions.length === i + 1 || <Divider/>}
                </React.Fragment>
            )}
        </SectionWrapper>
    );
};

export default Faq;