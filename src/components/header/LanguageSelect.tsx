import React from 'react';
import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

import { languages } from "../../consts/languages";


const LanguageSelect = () => {
    const { i18n } = useTranslation();

    return (
        <Select onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
            {
                Object.keys(languages).map(lng => <MenuItem key={lng} value={lng}>
                    {languages[lng]}
                </MenuItem>)
            }
        </Select>
    );
};

export default LanguageSelect;