import { getLocaleName } from "../../../utils";

const prefixes = ["purityTest", "navigationButtons"];

export const Localization = {
    NavigationNextButton: getLocaleName([...prefixes, "next"]),
    NavigationPrevButton: getLocaleName([...prefixes, "prev"]),
    NavigationSuccessButton: getLocaleName([...prefixes, "success"]),
};