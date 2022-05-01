import React, { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
} from "react-share";
import { Stack, SxProps, Theme } from "@mui/material";
import { Pinterest, Reddit, Twitter, WhatsApp } from '@mui/icons-material';
import VK from "../../../assets/icons8-вконтакте.svg";
import { Localizations } from "../localizations";


// const img = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iphon.fr%2Fpost%2Fgrace-a-ios-14-laudience-de-pinterest-explose&psig=AOvVaw1APUSqcrm6oOz2BWsr2j0-&ust=1651470254599000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCqhqLMvfcCFQAAAAAdAAAAABAJ"
const img = `https://purity-test.com/assets/images/purity-test.png`;

const getCommonShareProps = (url: string, score: number, t: TFunction) => ({
    url: url,
    title: t(Localizations.ShareTitle, {score}),
})
const commonIconProps: SxProps<Theme> = {
    fontSize: 32,
};

interface ShareButtonsProps {
    score: number;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({score}) => {
    const {t} = useTranslation();

    const url = useMemo(() => window.location.href, []);
    const commonShareProps = useMemo(() => getCommonShareProps(url, score, t), [url, score, t]);

    return (
        <Stack direction={"row"} spacing={2}>
            <PinterestShareButton
                {...commonShareProps}
                windowWidth={1000}
                windowHeight={730}
                media={img}
            >
                <Pinterest sx={{color: "#DF0022", ...commonIconProps}}/>
            </PinterestShareButton>
            <TwitterShareButton {...commonShareProps}>
                <Twitter sx={{color: "#1DA1F2", ...commonIconProps}}/>
            </TwitterShareButton>
            <VKShareButton {...commonShareProps}>
                <img src={VK} alt={"VKicon"}/>
            </VKShareButton>
            <WhatsappShareButton {...commonShareProps}>
                <WhatsApp sx={{color: "#39D855", ...commonIconProps}}/>
            </WhatsappShareButton>
            <RedditShareButton {...commonShareProps}>
                <Reddit sx={{color: "#F8450C", ...commonIconProps}}/>
            </RedditShareButton>
            {/*<a target={"_blank"} href={`http://pinterest.com/pin/create/button/?url=http://localhost:3000&media=${img}`}>p</a>*/}
        </Stack>
    );
};

export default ShareButtons;