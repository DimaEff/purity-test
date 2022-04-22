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
            height={"110vh"}
            navigation={false}
        >
            <SectionWrapper wrapperSx={{height: "80vh", display: "flex", justifyContent: "center"}} title={"Rice Purity Test"}>
                <StartTest/>
            </SectionWrapper>
            <TestQuestions/>
        </Carousel>
    );
};

export default PurityTest;