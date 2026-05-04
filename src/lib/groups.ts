import homeLight1 from "../assets/screenshots/home-light-1.png";
import homeLight2 from "../assets/screenshots/home-light-2.png";

import homeDark1 from "../assets/screenshots/home-dark-1.png";
import homeDark2 from "../assets/screenshots/home-dark-2.png";

import subscriptionsLight1 from "../assets/screenshots/subscriptions-light-1.png";
import subscriptionsLight2 from "../assets/screenshots/subscriptions-light-2.png";

import subscriptionsDark1 from "../assets/screenshots/subscriptions-dark-1.png";
import subscriptionsDark2 from "../assets/screenshots/subscriptions-dark-2.png";

import watchLight1 from "../assets/screenshots/watching-light-1.png";
import watchLight2 from "../assets/screenshots/watching-light-2.png";

import watchDark1 from "../assets/screenshots/watching-dark-1.png";
import watchDark2 from "../assets/screenshots/watching-dark-2.png";

export const groups = [
    {
        title: "Home",
        description:
            "Create a clean and focused YouTube homepage by disabling unwanted elements such as the header, Shorts, tags, and promotional sections. Secare allows you to remove visual clutter and recommendations that distract from the main feed, helping you browse more efficiently.",
        images: {
            light: [homeLight1, homeLight2],
            dark: [homeDark1, homeDark2],
        },
        settings: {
            shorts: ["Hide shorts in main feed", "Hide shorts in menu"],
            header: [
                "Hide menu button",
                "Hide country selector",
                "Hide voice search",
                "Hide profile profile",
            ],
            "Main feed & video grid": [
                "Hide most relevant block",
                "Hide tags",
                "Hide explore more topics",
                "Hide premium promotion",
            ],
        },
    },
    {
        title: "Subscriptions",
        description:
            "Simplify your Subscriptions feed by disabling relevant videos, Shorts, and other distracting elements. Have a better control over the page layout, so you can focus on the channels you actually follow.",
        images: {
            light: [subscriptionsLight1, subscriptionsLight2],
            dark: [subscriptionsDark1, subscriptionsDark2],
        },
        settings: {
            shorts: ["Hide shorts in main feed", "Hide shorts in menu"],
            header: [
                "Hide menu button",
                "Hide country selector",
                "Hide voice search",
                "Hide profile profile",
            ],
            "Main feed & video grid": ["Hide most relevant block"],
        },
    },
    {
        title: "Watching",
        description:
            "Enhance your video watching experience by hiding the sidebar, description elements, comments and channel controls. Secare lets you remove distractions on the right side and below the player, allowing for a more immersive and focused viewing session.",
        images: {
            light: [watchLight1, watchLight2],
            dark: [watchDark1, watchDark2],
        },
        settings: {
            shorts: ["Hide shorts in main feed", "Hide shorts in menu"],
            header: [
                "Hide menu button",
                "Hide country selector",
                "Hide voice search",
                "Hide profile profile",
            ],
            "Main feed & video grid": ["Hide most relevant block"],
        },
    },
];
