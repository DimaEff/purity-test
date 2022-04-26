import React, { useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import {
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
} from "react-share";
import { Stack, SxProps, Theme } from "@mui/material";
import { Pinterest, Telegram, Twitter, WhatsApp } from '@mui/icons-material';

import VK from "../../../assets/icons8-вконтакте.svg";
import { Localizations } from "../localizations";


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
    const { t } = useTranslation();

    const url = useMemo(() => window.location.href, []);
    const commonShareProps = useMemo(() => getCommonShareProps(url, score, t), [url, score, t]);

    return (
        <Stack direction={"row"} spacing={2}>
            <PinterestShareButton {...commonShareProps} media={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fru%2Fdocs%2FWeb%2FHTML%2FElement%2Fimg&psig=AOvVaw23WLEI8JIuwwmbjL8JHlMc&ust=1650719372313000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD9rYDfp_cCFQAAAAAdAAAAABAD"}>
                <Pinterest sx={{color: "#DF0022", ...commonIconProps}}/>
            </PinterestShareButton>
            <TelegramShareButton {...commonShareProps}>
                <Telegram sx={{color: "#2298D5", ...commonIconProps}}/>
            </TelegramShareButton>
            <TwitterShareButton {...commonShareProps}>
                <Twitter sx={{color: "#1DA1F2", ...commonIconProps}}/>
            </TwitterShareButton>
            <VKShareButton {...commonShareProps}>
                <img src={VK} alt={"VKicon"}/>
            </VKShareButton>
            <WhatsappShareButton {...commonShareProps}>
                <WhatsApp sx={{color: "#39D855", ...commonIconProps}}/>
            </WhatsappShareButton>
        </Stack>
    );
};

export default ShareButtons;