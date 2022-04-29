import React from 'react';
import { Stack, SxProps, Typography, TypographyProps } from "@mui/material";
import { Element } from "react-scroll";
import { routes, Route } from "../../consts/route";


interface SectionWrapperProps {
    title?: React.ReactNode;
    wrapperSx?: SxProps;
    scrollName?: Route;
}

const SectionWrapper: React.FC<SectionWrapperProps & TypographyProps> = (
    {
        children,
        title,
        wrapperSx,
        scrollName,
        ...props
    }
) => {
    const content = (
        <Stack spacing={3} sx={wrapperSx}>
            {title && <Typography fontWeight={700} textAlign={"center"} width={"100%"} variant={"h3"} {...props}>
                {title}
            </Typography>}
            {children}
        </Stack>
    );

    return scrollName ? <Element name={routes[scrollName]}>{content}</Element> : content;
};

export default SectionWrapper;
