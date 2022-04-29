import React from 'react';
import { Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { FaqQuestion } from "../components/faq/types";
import { SectionWrapper } from "../components/common";
import { useBreakpoints } from "../hooks";


const Faq = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {t} = useTranslation();
    const {isMobile} = useBreakpoints();

    // const faqQuestions: FaqQuestion[] = t(Localizations.FaqQuestions);
    const faqQuestions: FaqQuestion[] = [
        {
            title: "1231231231231 1d qd lkqmdcl akcmaks1",
            description: "akcjasclkm alwd malscl malwkdmlawkmd as aw dasc awwcawcmalscl malwkdmlawkmd as aw dasc awwcawc",
        },
        {
            title: "1231231231231 1d qd lkqmdcl akcmaks2",
            description: "akcjasclkm alwd malscl malwkdmlawkmd as aw dasc awwcawcmalscl malwkdmlawkmd as aw dasc awwcawc",
        },
        {
            title: "1231231231231 1d qd lkqmdcl akcmaks3",
            description: "akcjasclkm alwd malscl malwkdmlawkmd as aw dasc awwcawcmalscl malwkdmlawkmd as aw dasc awwcawc",
        },
    ];

    return (
        <SectionWrapper scrollName={"faq"}>
            {faqQuestions.map(({title, description}, i) => <>
                    <SectionWrapper title={title}>
                        <Typography textAlign={"center"} fontWeight={isMobile ? "normal" : "bold"}>
                            {description}
                        </Typography>
                    </SectionWrapper>
                    {faqQuestions.length === i + 1 || <Divider/>}
                </>
            )}
        </SectionWrapper>
    );
};

export default Faq;