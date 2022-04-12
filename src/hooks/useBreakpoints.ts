import { useMediaQuery, useTheme } from "@mui/material";

interface UseBreakpoints {
    isMobile: boolean;
}

const useBreakpoints = (): UseBreakpoints => {
    const { breakpoints } = useTheme();

    const isMobile = useMediaQuery(breakpoints.down("sm"));

    return { isMobile };
}

export default useBreakpoints;