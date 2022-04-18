import React from 'react';

import { SectionWrapper } from "../components/common";
import { StartTest, TestQuestions } from "../components/purityTest";
import Carousel from "../components/common/carousel";


const PurityTest = () => {
    return (
        <Carousel
            allowSlidePrev={false}
            allowTouchMove={false}
            speed={500}
            height={"100vh"}
        >
            <SectionWrapper title={"Rice Purity Test"}>
                <StartTest/>
            </SectionWrapper>
            <TestQuestions/>
        </Carousel>
    );
};

export default PurityTest;