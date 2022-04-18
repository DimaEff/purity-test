import { getLocaleName } from "../../utils";

const prefixes = ["purityTest"];

export const Localizations = {
    TestQuestions: getLocaleName([...prefixes, "questions"]),
};