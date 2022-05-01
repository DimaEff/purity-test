import { Localizations } from "./localizations";
import { SM_100, SM_44, SM_76, SM_8, SM_93, SM_97 } from "../../_forChanges/theme";


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
        color: SM_100,
    },
    97: {
        textId: Localizations.Result97,
        color: SM_97,
    },
    93: {
        textId: Localizations.Result93,
        color: SM_93,
    },
    76: {
        textId: Localizations.Result76,
        color: SM_76,
    },
    44: {
        textId: Localizations.Result44,
        color: SM_44,
    },
    8: {
        textId: Localizations.Result8,
        color: SM_8,
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