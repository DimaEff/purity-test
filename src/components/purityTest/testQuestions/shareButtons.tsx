import React, { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
    FacebookShareButton,
    PinterestShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { Stack, SxProps, Theme } from "@mui/material";
import { Facebook, Pinterest, Reddit, Twitter, WhatsApp } from '@mui/icons-material';

import { IMAGE_FOR_PINTEREST_URL } from "../../../_forChanges/app";
import { Localizations } from "../localizations";


const getCommonShareProps = (url: string, score: number, t: TFunction) => ({
    url: url,
    title: t(Localizations.ScoreDescription, {score}),
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
            {/*<a target={"_blank"} href={`http://pinterest.com/pin/create/button/?url=http://localhost:3000&media=${img}`}>p</a>*/}
            <PinterestShareButton
                {...commonShareProps}
                windowWidth={1000}
                windowHeight={730}
                media={IMAGE_FOR_PINTEREST_URL}
            >
                <Pinterest sx={{color: "#DF0022", ...commonIconProps}}/>
            </PinterestShareButton>
            <TwitterShareButton {...commonShareProps}>
                <Twitter sx={{color: "#1DA1F2", ...commonIconProps}}/>
            </TwitterShareButton>
            <FacebookShareButton {...commonShareProps}>
                <Facebook sx={{color: "#4867AA", ...commonIconProps}}/>
            </FacebookShareButton>
            {/*<VKShareButton {...commonShareProps}>*/}
            {/*    <img src={VK} alt={"VKicon"}/>*/}
            {/*</VKShareButton>*/}
            <WhatsappShareButton {...commonShareProps}>
                <WhatsApp sx={{color: "#39D855", ...commonIconProps}}/>
            </WhatsappShareButton>
            <RedditShareButton {...commonShareProps}>
                <Reddit sx={{color: "#F8450C", ...commonIconProps}}/>
            </RedditShareButton>
        </Stack>
    );
};

export default ShareButtons;