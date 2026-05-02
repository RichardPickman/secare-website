import home1 from "../assets/screenshots/home-1.png";
import home2 from "../assets/screenshots/home-2.png";

import subscriptions1 from "../assets/screenshots/subscriptions-1.png";
import subscriptions2 from "../assets/screenshots/subscriptions-2.png";

import watch1 from "../assets/screenshots/watch-light-1.png";
import watch2 from "../assets/screenshots/watch-light-2.png";

export const groups = [
    {
        title: "Home",
        description:
            "Create a clean and focused YouTube homepage by disabling unwanted elements such as the header, Shorts, tags, and promotional sections. Secare allows you to remove visual clutter and recommendations that distract from the main feed, helping you browse more efficiently.",
        images: [home1, home2],
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
        images: [subscriptions1, subscriptions2],
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
        images: [watch1, watch2],
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
