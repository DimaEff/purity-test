import { getLocaleName } from "../../utils";

const scoreMeaning = ["scoreMeaning"];

export const Localizations = {
    Title: getLocaleName([...scoreMeaning, "title"]),
    Description: getLocaleName([...scoreMeaning, "description"]),

    Result100: getLocaleName([...scoreMeaning, "100"]),
    Result97: getLocaleName([...scoreMeaning, "97"]),
    Result93: getLocaleName([...scoreMeaning, "93"]),
    Result76: getLocaleName([...scoreMeaning, "76"]),
    Result44: getLocaleName([...scoreMeaning, "44"]),
    Result8: getLocaleName([...scoreMeaning, "8"]),
};