import { useState, type ReactNode } from "react";
import homeDark1 from "./assets/screenshots/home-dark-1.png";
import homeDark2 from "./assets/screenshots/home-dark-2.png";
import homeLight1 from "./assets/screenshots/home-light-1.png";
import homeLight2 from "./assets/screenshots/home-light-2.png";

import subscriptionsDark1 from "./assets/screenshots/subscriptions-dark-1.png";
import subscriptionsDark2 from "./assets/screenshots/subscriptions-dark-2.png";
import subscriptionsLight1 from "./assets/screenshots/subscriptions-light-1.png";
import subscriptionsLight2 from "./assets/screenshots/subscriptions-light-2.png";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "./components/ui/button";
import { ComparisonSlider } from "./components/ui/comparison-slider";
import { Label } from "./components/ui/label";
import { useTheme } from "./hooks/useTheme";
import { cn } from "./lib/utils";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeButton } from "./components/theme-toggle";

const CheckboxGroup = ({ children }: { children: ReactNode }) => (
    <div className="flex gap-2 items-center">
        <Check className="w-4 h-4" />
        <Label className="flex-1 cursor-pointer text-md leading-relaxed text-foreground/90">
            {children}
        </Label>
    </div>
);

const groups = [
    {
        title: "Home",
        description:
            "Sick of shorts, promotions and exploration blocks coming back, even though you hid them? Me too. This group of settings will help you to hide them for good.",
        images: {
            dark: [homeDark2, homeDark1],
            light: [homeLight1, homeLight2],
        },
        settings: {
            "Main feed & video grid": [
                "Hide most relevant block",
                "Hide tags",
                "Hide explore more topics",
                "Hide premium promotion",
            ],
            header: [
                "Hide menu button",
                "Hide country selector",
                "Hide voice search",
                "Hide profile profile",
            ],
            shorts: ["Hide shorts in main feed", "Hide shorts in menu"],
        },
    },
    {
        title: "Subscriptions",
        description:
            "Bring back the old subscription feed, which working for you, not the algorithm.",
        images: {
            dark: [subscriptionsDark1, subscriptionsDark2],
            light: [subscriptionsLight1, subscriptionsLight2],
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

function App() {
    const [groupIndex, setGroupIndex] = useState(0);
    const { theme } = useTheme();

    return (
        <section className="container mx-auto p-2 flex items-center h-full">
            {groups.map((group, index) => (
                <div
                    className={cn(
                        "grid grid-cols-2 items-center gap-4",
                        index !== groupIndex && "hidden",
                    )}
                    key={index}
                >
                    <div className="h-full flex flex-col justify-center p-4 gap-10 shadow-lg rounded-lg">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-4xl font-medium font-rounded text-left">
                                    {group.title}
                                </h2>

                                <ThemeButton />
                            </div>
                            <p className="text-muted-foreground text-left text-lg">
                                {group.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="item-0"
                            >
                                {Object.entries(group.settings).map(
                                    ([settingGroup, settings], index) => (
                                        <AccordionItem value={`item-${index}`}>
                                            <div className="space-y-2 p-2 rounded bg-background text-left">
                                                <AccordionTrigger>
                                                    <Label className="text-sm font-semibold uppercase tracking-wide">
                                                        {settingGroup}
                                                    </Label>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {settings.map(
                                                        (setting, sidx) => (
                                                            <CheckboxGroup
                                                                key={sidx}
                                                            >
                                                                {setting}
                                                            </CheckboxGroup>
                                                        ),
                                                    )}
                                                </AccordionContent>
                                            </div>
                                        </AccordionItem>
                                    ),
                                )}
                            </Accordion>
                        </div>

                        <div className="flex gap-4 items-center justify-center">
                            <Button
                                variant="outline"
                                size="icon"
                                className="cursor-pointer rounded-sm w-24"
                                onClick={() =>
                                    setGroupIndex((prev) =>
                                        prev > 0 ? prev - 1 : 0,
                                    )
                                }
                                disabled={groupIndex <= 0}
                            >
                                <ArrowLeft className="w-8 h-8" />
                            </Button>
                            <div>
                                {Array.from(
                                    { length: groups.length },
                                    (_, index) => (
                                        <button
                                            key={index}
                                            className={cn(
                                                "rounded-full w-2 h-2 bg-secondary",
                                                index === groupIndex &&
                                                    "bg-muted-foreground",
                                            )}
                                        />
                                    ),
                                )}
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="cursor-pointer rounded-sm w-24"
                                onClick={() =>
                                    setGroupIndex((prev) => prev + 1)
                                }
                                disabled={groupIndex >= groups.length - 1}
                            >
                                <ArrowRight className="w-8 h-8" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full rounded-lg overflow-hidden shadow-lg py-2">
                        <ComparisonSlider
                            leftImage={
                                theme === "dark"
                                    ? group.images.dark[0]
                                    : group.images.light[0]
                            }
                            rightImage={
                                theme === "dark"
                                    ? group.images.dark[1]
                                    : group.images.light[1]
                            }
                        />
                    </div>
                </div>
            ))}
        </section>
    );
}

export default App;
