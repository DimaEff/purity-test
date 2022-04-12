import React from 'react';
import { Link } from "react-scroll";

import { Routes, routes, ROUTES_COLLECTION_NAME } from "../../consts/routes";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";


interface HashLinkProps {
    to: Routes;
}

const HashLink: React.FC<HashLinkProps> = ({to}) => {
    const {t} = useTranslation(ROUTES_COLLECTION_NAME);
    const route = routes[to];

    return (
        <Button
            sx={{
                position: "relative",
            }}
            variant={"text"}
        >
            {t(route)}
            <Link
                style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0}}
                to={route}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            />
        </Button>
    );
};

export default HashLink;