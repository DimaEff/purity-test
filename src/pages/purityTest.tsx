import React from 'react';
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "../components/common";
import { StartTest, TestQuestions } from "../components/purityTest";
import Carousel from "../components/common/carousel";
import { Localizations } from "../components/purityTest/localizations";


const PurityTest = () => {
    const { t } = useTranslation();

    return (
        <Carousel
            allowSlidePrev={false}
            allowTouchMove={false}
            speed={500}
            height={"110vh"}
            navigation={false}
        >
            <SectionWrapper
                wrapperSx={{
                    height: "80vh",
                    display: "flex",
                    justifyContent: "center",
                }}
                title={t(Localizations.Title)}
            >
                <StartTest/>
            </SectionWrapper>
            <TestQuestions/>
        </Carousel>
    );
};

export default PurityTest;