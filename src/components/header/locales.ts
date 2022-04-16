import { getLocaleName } from "../../utils";

const prefixes = ["hashRoutes"];

export const Locales = {
      HashRouteFaq: getLocaleName([...prefixes, "faq"]),
      HashRouteScoreMeaning: getLocaleName([...prefixes, "scoreMeaning"]),
};