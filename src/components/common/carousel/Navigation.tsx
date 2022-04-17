import React from 'react';
import { useSwiper } from "swiper/react";

import ButtonStack from "../ButtonStack";


interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
    const swiper = useSwiper();

    return (
        <ButtonStack zIndex={50} justifyContent={"flex-end"}>
            <button onClick={() => swiper.slidePrev()}>{"<"}</button>
            <button onClick={() => swiper.slideNext()}>{">"}</button>
        </ButtonStack>
    );
};

export default Navigation;