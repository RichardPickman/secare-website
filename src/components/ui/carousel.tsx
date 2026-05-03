import { ArrowLeft, ArrowRight } from "lucide-react";
import {
    Children,
    useLayoutEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { cn } from "../../lib/utils";

interface CarouselProps {
    children: ReactNode[];
    className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
    const [currentIndex, setIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const childrenArray = Children.toArray(children);
    const totalSlides = childrenArray.length;

    useLayoutEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);

                console.log("Offset height", containerRef.current.offsetHeight);
                console.log("Offset width", containerRef.current.offsetWidth);
            }
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const slideWidth = containerWidth * 0.7;
    const offset =
        containerWidth > 0
            ? (containerWidth - slideWidth) / 2 - currentIndex * slideWidth
            : 0;

    const goLeft = () => {
        if (currentIndex > 0) {
            setIndex(currentIndex - 1);
        }
    };

    const goRight = () => {
        if (currentIndex < totalSlides - 1) {
            setIndex(currentIndex + 1);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden", className)}
        >
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                    transform: `translateX(${offset}px)`,
                }}
            >
                {childrenArray.map((child, index) => (
                    <div
                        key={index}
                        className="shrink-0 w-full"
                        style={{ width: `${slideWidth}px` }}
                    >
                        <div
                            className={cn(
                                "transition-all duration-500 h-full flex flex-col items-center justify-center",
                                index === currentIndex
                                    ? "opacity-100 scale-100"
                                    : "opacity-20 scale-90 pointer-events-none",
                            )}
                        >
                            {child}
                        </div>
                    </div>
                ))}
            </div>

            {currentIndex > 0 && (
                <button
                    onClick={goLeft}
                    className="absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-background/90 rounded-full shadow-md hover:bg-background transition-all cursor-pointer"
                    style={{ left: "7%" }}
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
            )}
            {currentIndex < totalSlides - 1 && (
                <button
                    onClick={goRight}
                    className="absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-background/90 rounded-full shadow-md hover:bg-background transition-all cursor-pointer"
                    style={{ right: "7%" }}
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
