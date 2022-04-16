import React from 'react';
import { Stack, StackProps } from "@mui/material";


interface ButtonStackProps {
}

const ButtonStack: React.FC<ButtonStackProps & StackProps> = (
    {
        children,
        sx,
        ...props
    }
) => {
    return (
        <Stack
            spacing={1}
            direction={"row"}
            sx={{
                width: "100%",
                display: "flex",
                ...sx,
            }}
            {...props}
        >
            {children}
        </Stack>
    );
};

export default ButtonStack;