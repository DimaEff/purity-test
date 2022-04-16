import React, { useMemo } from 'react';
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";

import { Route, routes } from "../../consts/route";
import { Locales } from "./locales";


type Variant = "button" | "link";

interface HashLinkProps {
    to: Route;
    variant?: Variant;
}

const routesValues: any = {
    faq: Locales.HashRouteFaq,
    scoreMeaning: Locales.HashRouteScoreMeaning,
};

const HashLink: React.FC<HashLinkProps> = ({to, variant = "button"}) => {
    const {t} = useTranslation();

    const route = routes[to];
    const routeName = useMemo(() => t(routesValues[to]), [t, to]);
    const linkProps = {
        spy: true,
        smooth: true,
        offset: -120,
        duration: 500,
    };

    return (
        <>
            {variant === "button" ?
                <Button
                    sx={{position: "relative"}}
                    variant={"text"}
                >
                    {routeName}
                    <Link
                        to={route}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                        }}
                        {...linkProps}
                    />
                </Button> :
                <Link
                    to={route}
                    style={{width: "100%"}}
                    {...linkProps}
                >
                    <Typography variant={"button"}>
                        {routeName}
                    </Typography>
                </Link>
            }
        </>
    );
};

export default HashLink;