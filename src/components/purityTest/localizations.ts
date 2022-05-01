import { getLocaleName } from "../../utils";

const purityTest = ["purityTest"];
const navigationButtons = [...purityTest, "navigationButtons"];
const result = [...purityTest, "result"];

export const Localizations = {
    Title: getLocaleName([...purityTest, "title"]),
    Description: getLocaleName([...purityTest, "description"]),
    StartTestButton: getLocaleName([...purityTest, "startTestButton"]),
    SeMoreButton: getLocaleName([...purityTest, "seeMoreButton"]),

    TestQuestions: getLocaleName([...purityTest, "questions"]),
    ResultNavigationButton: getLocaleName([...navigationButtons, "result"]),

    ResultTitle: getLocaleName([...result, "title"]),
    TryAgain: getLocaleName([...result, "tryAgainButton"]),
    ScoreDescription: getLocaleName([...result, "scoreDescription"]),
};