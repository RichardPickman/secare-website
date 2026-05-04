import chrome from "./assets/chrome.png";
import firefox from "./assets/firefox.png";
import logo from "./assets/hero.png";
import { ThemeButton } from "./components/theme-button";

import { Carousel } from "./components/ui/carousel";
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
            >
                <img src={chrome} className="max-w-30" />
            </a>

            <a
                href="https://addons.mozilla.org/en-US/firefox/addon/secare/"
                target="_blank"
            >
                <img src={firefox} className="max-w-30" />
            </a>
        </div>
    </div>
);

function App() {
    const { theme } = useTheme();

    return (
        <div className="container relative space-y-2 mx-auto h-full flex items-center justify-center">
            <header className="absolute top-0 right-0 left-0 flex items-center justify-around py-2 px-6">
                <img src={logo} className="w-8 h-8" />

                <ThemeButton />
            </header>

            <Carousel>
                {groups.map((group, index) => (
                    <div key={group.title} className="h-full space-y-4">
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
                            className="flex flex-col gap-4 p-4 w-full shadow-2xl rounded-lg"
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
                            />
                        </div>
                    </div>
                ))}

                <DownloadSlide />
            </Carousel>
        </div>
    );
}

export default App;
