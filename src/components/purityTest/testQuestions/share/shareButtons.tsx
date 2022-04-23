import React from 'react';
import {
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
} from "react-share";
import { Stack, SxProps, Theme } from "@mui/material";
import { Pinterest, Telegram, Twitter, WhatsApp } from '@mui/icons-material';
import VK from "../../../../assets/icons8-вконтакте.svg";


const url = "https://purity-test-f6067.firebaseapp.com/";

const commonShareProps = {
    url: url,
}
const commonIconProps: SxProps<Theme> = {
    fontSize: 32,
};

const sharedButtons: React.ReactElement[] = [
    <PinterestShareButton {...commonShareProps} media={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fru%2Fdocs%2FWeb%2FHTML%2FElement%2Fimg&psig=AOvVaw23WLEI8JIuwwmbjL8JHlMc&ust=1650719372313000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD9rYDfp_cCFQAAAAAdAAAAABAD"}>
        <Pinterest sx={{color: "#DF0022", ...commonIconProps}}/>
    </PinterestShareButton>,
    <TelegramShareButton {...commonShareProps}>
        <Telegram sx={{color: "#2298D5", ...commonIconProps}}/>
    </TelegramShareButton>,
    <TwitterShareButton {...commonShareProps}>
        <Twitter sx={{color: "#1DA1F2", ...commonIconProps}}/>
    </TwitterShareButton>,
    <VKShareButton {...commonShareProps}>
        <img src={VK} alt={"VKicon"}/>
    </VKShareButton>,
    <WhatsappShareButton {...commonShareProps}>
        <WhatsApp sx={{color: "#39D855", ...commonIconProps}}/>
    </WhatsappShareButton>,
];

const ShareButtons: React.FC = () => {
    return (
        <Stack direction={"row"} spacing={2}>
            {sharedButtons}
        </Stack>
    );
};

export default ShareButtons;