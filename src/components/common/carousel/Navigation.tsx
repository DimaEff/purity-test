import React from 'react';

import ButtonStack from "../ButtonStack";
import CarouselNavigationButton from "./CarouselNavigationButton";
import Slider from "react-slick";


interface NavigationProps {
    slider: React.RefObject<Slider | null>;
    isPrev: boolean;
    isNext: boolean;
    onSuccess: () => void;
}

const Navigation: React.FC<NavigationProps> = ({slider, isPrev, isNext, onSuccess}) => {
    const handlePrev = () => {
        if (!slider.current) return;
        slider.current.slickPrev();
    }

    const handleNext = () => {
        if (!slider.current) return;
        slider.current.slickNext();
    }

    const handleSuccess = () => {
        onSuccess();
    }

    return (
        <ButtonStack justifyContent={"flex-end"}>
            {isPrev && <CarouselNavigationButton onClick={handlePrev} type={"prev"}/>}
            <CarouselNavigationButton onClick={isNext ? handleNext : handleSuccess} type={isNext ? "next" : "success"}/>
        </ButtonStack>
    );
};

export default Navigation;