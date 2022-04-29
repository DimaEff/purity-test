export const ROUTES_COLLECTION_NAME = "hashRoutes";
export const APP_SCROLLER_WRAPPER_ID = "appWrapper";

// key for code, value for locale
export const routes: {[key: string]: string} = {
    faq: "faq",
    scoreMeaning: "scoreMeaning",
};
export type Route = keyof typeof routes;