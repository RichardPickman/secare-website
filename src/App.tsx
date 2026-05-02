import chrome from "./assets/chrome.png";
import firefox from "./assets/firefox.png";

import { Carousel } from "./components/ui/carousel";
import { ComparisonSlider } from "./components/ui/comparison-slider";
import { groups } from "./lib/groups";

const DownloadSlide = () => (
    <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="space-y-4">
            <h2 className="font-semibold text-5xl text-foreground">Secare</h2>
            <p className="text-muted-foreground text-xl">
                Available for <span className="font-bold">Chrome</span> and{" "}
                <span className="font-bold">Firefox</span>
            </p>
        </div>
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
    return (
        <section className="container mx-auto h-full flex items-center">
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
                                leftImage={group.images[0]}
                                rightImage={group.images[1]}
                            />
                        </div>
                    </div>
                ))}

                <DownloadSlide />
            </Carousel>
        </section>
    );
}

export default App;
