import { getLocaleName } from "../../utils";

const purityTestPrefixes = ["purityTest"];
const resultPrefixes = [...purityTestPrefixes, "result"];

export const Localizations = {
    TestQuestions: getLocaleName([...purityTestPrefixes, "questions"]),
    Result100: getLocaleName([...resultPrefixes, "100"]),
    Result97: getLocaleName([...resultPrefixes, "97"]),
    Result93: getLocaleName([...resultPrefixes, "93"]),
    Result76: getLocaleName([...resultPrefixes, "76"]),
    Result44: getLocaleName([...resultPrefixes, "44"]),
    Result8: getLocaleName([...resultPrefixes, "8"]),
};