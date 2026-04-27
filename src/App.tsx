import { useState, type ReactNode } from "react";
import home1 from "./assets/screenshots/home-1.png";
import home2 from "./assets/screenshots/home-2.png";
import subscriptions1 from "./assets/screenshots/subscriptions-1.png";
import subscriptions2 from "./assets/screenshots/subscriptions-2.png";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { ComparisonSlider } from "./components/ui/comparison-slider";
import { Label } from "./components/ui/label";
import { cn } from "./lib/utils";

const CheckboxGroup = ({ children }: { children: ReactNode }) => (
    <div className="flex gap-2 items-center">
        <Checkbox className="pointer-events-none" checked={true} />
        <Label className="flex-1 cursor-pointer text-sm leading-relaxed text-foreground/90">
            {children}
        </Label>
    </div>
);

const groups = [
    {
        title: "Home",
        description:
            "Sick of shorts, promotions and exploration blocks coming back, even though you hid them? Me too. This group of settings will help you to hide them for good.",
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
            "Bring back the old subscription feed, which working for you, not the algorithm.",
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
];

function App() {
    const [groupIndex, setGroupIndex] = useState(0);

    return (
        <section>
            {groups.map((group, index) => (
                <section
                    className={cn(
                        "container mx-auto p-2 transition-all duration-300 h-full",
                        index !== groupIndex && "hidden",
                    )}
                    key={index}
                >
                    <div className="space-y-2 p-2">
                        <h2 className="font-semibold text-2xl text-foreground">
                            {group.title}
                        </h2>
                        <p className="text-muted-foreground">
                            {group.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:flex-row">
                        <div className="flex-1">
                            <ComparisonSlider
                                leftImage={group.images[0]}
                                rightImage={group.images[1]}
                            />
                        </div>

                        <div className="flex flex-col shadow-lg rounded-lg py-4 px-2 justify-between items-center gap-2">
                            <div className="flex flex-row gap-2 lg:flex-col">
                                {Object.entries(group.settings).map(
                                    ([settingGroup, settings]) => (
                                        <div className="space-y-2 p-2 rounded bg-background">
                                            <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                {settingGroup}
                                            </Label>
                                            {settings.map((setting, sidx) => (
                                                <CheckboxGroup key={sidx}>
                                                    {setting}
                                                </CheckboxGroup>
                                            ))}
                                        </div>
                                    ),
                                )}
                            </div>
                            <div className="flex gap-4 items-center">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer rounded-full"
                                    onClick={() =>
                                        setGroupIndex((prev) =>
                                            prev > 0 ? prev - 1 : 0,
                                        )
                                    }
                                    disabled={groupIndex <= 0}
                                >
                                    <ArrowLeft className="w-8 h-8" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="cursor-pointer rounded-full"
                                    onClick={() =>
                                        setGroupIndex((prev) => prev + 1)
                                    }
                                    disabled={groupIndex >= groups.length - 1}
                                >
                                    <ArrowRight className="w-8 h-8" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </section>
    );
}

export default App;
