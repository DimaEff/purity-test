import { getLocaleName } from "../../utils";

const purityTestPrefixes = ["purityTest"];
const navigationButtons = [...purityTestPrefixes, "navigationButtons"];
const share = [...purityTestPrefixes, "share"];

export const Localizations = {
    Title: getLocaleName([...purityTestPrefixes, "title"]),
    Description: getLocaleName([...purityTestPrefixes, "description"]),
    StartTestButton: getLocaleName([...purityTestPrefixes, "startTestButton"]),

    TestQuestions: getLocaleName([...purityTestPrefixes, "questions"]),
    ResultNavigationButton: getLocaleName([...navigationButtons, "result"]),
    TryAgain: getLocaleName([...navigationButtons, "tryAgain"]),

    ShareTitle: getLocaleName([...share, "title"]),
};