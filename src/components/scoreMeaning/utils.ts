import { green, lightGreen, lime, orange, red } from "@mui/material/colors";

import { Localizations } from "./localizations";


export interface ScoreSettings {
    color: string;
    textId: string;
}

/**
 *  @key is the upper limit of "Rice purity test score meaning" in https://purity-test.com/
 *  @param textId - the key of score text(public/locales/<language>/translation.json/purityTest/result)
 *  @param color - the font color of score value in result page
 **/
export const resultScores: {[key: number]: ScoreSettings} = {
    100: {
        textId: Localizations.Result100,
        color: green[500],
    },
    97: {
        textId: Localizations.Result97,
        color: lightGreen[500],
    },
    93: {
        textId: Localizations.Result93,
        color: lime[500],
    },
    76: {
        textId: Localizations.Result76,
        color: orange[500],
    },
    44: {
        textId: Localizations.Result44,
        color: orange[900],
    },
    8: {
        textId: Localizations.Result8,
        color: red[600],
    },
};

export const getNeededScoreResult = (score: number): ScoreSettings => {
    let scoreId = 0;
    Object.keys(resultScores).some(s => {
        if (score - +s <= 0) {
            scoreId = +s;
            return true;
        }
        return false;
    });

    return resultScores[scoreId];
}