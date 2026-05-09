import chrome from "./assets/chrome.webp";
import firefox from "./assets/firefox.webp";
import logo from "./assets/hero.webp";
import { ThemeButton } from "./components/theme-button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel";
import { ComparisonSlider } from "./components/ui/comparison-slider";
import { useTheme } from "./hooks/useTheme";
import { groups } from "./lib/groups";

const DownloadSlide = () => (
    <div className="h-full w-full flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-xl">
            Available for <span className="font-bold">Chrome</span> and{" "}
            <span className="font-bold">Firefox</span>
        </p>
        <div className="flex items-center justify-center gap-12 p-4">
            <a
                href="https://chromewebstore.google.com/detail/secare/dpeeaknlhljbpnompbhhiinccemlhhed"
                target="_blank"
                aria-label="Get the extension from Chrome Web Store"
            >
                <img src={chrome} className="max-w-30" alt="Chrome icon" />
            </a>

            <a
                href="https://addons.mozilla.org/en-US/firefox/addon/secare/"
                target="_blank"
                aria-label="Get the extension from Firefox Add-ons"
            >
                <img src={firefox} className="max-w-30" alt="Firefox icon" />
            </a>
        </div>
    </div>
);

function App() {
    const { theme } = useTheme();

    return (
        <div className="container mx-auto h-full">
            <header className="flex items-center justify-around py-4">
                <img src={logo} className="w-8 h-8" alt="Secare icon" />

                <ThemeButton />
            </header>

            <Carousel
                className="w-full mx-auto max-w-4xl 3xl:max-w-7xl"
                opts={{
                    watchDrag: false,
                }}
            >
                <CarouselContent>
                    {groups.map((group, index) => (
                        <CarouselItem
                            key={group.title}
                            className="h-full space-y-4"
                        >
                            <div className="space-y-2">
                                <h2 className="font-semibold text-2xl text-foreground">
                                    {group.title}
                                </h2>
                                <p className="text-muted-foreground">
                                    {group.description}
                                </p>
                            </div>
                            <div
                                key={index}
                                className="flex flex-col gap-4 p-4 w-full"
                            >
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
                                    alt="comparison-image"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fetchPriority={
                                        index === 0 ? "high" : "auto"
                                    }
                                />
                            </div>
                        </CarouselItem>
                    ))}

                    <CarouselItem>
                        <DownloadSlide />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default App;
