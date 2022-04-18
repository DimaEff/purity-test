import React from 'react';
import { Stack, SxProps, Typography, TypographyProps } from "@mui/material";


interface SectionWrapperProps {
    title: React.ReactNode,
    wrapperSx?: SxProps;
}

const SectionWrapper: React.FC<SectionWrapperProps & TypographyProps> = (
    {
        children,
        title,
        wrapperSx,
        ...props
    }
) => {
    return (
        <Stack spacing={3} sx={{minWidth: 0, ...wrapperSx}}>
            <Typography fontWeight={700} textAlign={"center"} width={"100%"} variant={"h3"} {...props}>
                {title}
            </Typography>
            {children}
        </Stack>
    );
};

export default SectionWrapper;