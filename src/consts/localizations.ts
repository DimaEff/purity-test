import { getLocaleName } from "../utils";

const prefixes = ["hashRoutes"];

export const Localizations = {
      HashRouteFaq: getLocaleName([...prefixes, "faq"]),
      HashRouteScoreMeaning: getLocaleName([...prefixes, "scoreMeaning"]),
};