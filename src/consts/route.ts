import { Localizations } from "./localizations";

export type RouteName = "faq" | "scoreMeaning";

// key for code, value for locale
export const routes: {[key: string]: string} = {
    faq: Localizations.HashRouteFaq,
    scoreMeaning: Localizations.HashRouteScoreMeaning,
};
