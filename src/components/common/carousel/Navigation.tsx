import React from 'react';

import ButtonStack from "../ButtonStack";
import CarouselNavigationButton from "./CarouselNavigationButton";
import Slider from "react-slick";


export interface NavigationProps {
    slider: React.RefObject<Slider | null>;
    isPrev: boolean;
    isNext: boolean;
    onSuccess?: () => void;
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
        onSuccess && onSuccess();
    }

    return (
        <ButtonStack justifyContent={"flex-end"}>
            {isPrev && <CarouselNavigationButton onClick={handlePrev} type={"prev"}/>}
            <CarouselNavigationButton
                onClick={isNext ? handleNext : handleSuccess}
                type={(!isNext && onSuccess) ? "success" : "next"}
            />
        </ButtonStack>
    );
};

export default Navigation;