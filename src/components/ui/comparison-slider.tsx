import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const SliderHandle = ({
    position,
    handleMouseDown,
}: {
    position: number;
    handleMouseDown: () => void;
}) => (
    <div
        className="absolute top-0 h-full cursor-col-resize transition-colors group bg-secondary"
        style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
    >
        <div
            onMouseDown={handleMouseDown}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full w-10 h-10 bg-secondary flex items-center justify-center cursor-grab"
        >
            <div className="flex gap-1 flex-col">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
            </div>
        </div>
    </div>
);

interface ComparisonSliderProps {
    leftImage: string;
    rightImage: string;
    alt?: string;
    height?: string;
}

export const Image = ({
    path,
    position,
    alt,
}: {
    position: number;
    path: string;
    alt: string;
}) => (
    <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
    >
        <img
            src={path}
            alt={`${alt} - Right`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
        />
    </div>
);

const Media = ({
    leftImage,
    alt,
    position,
    rightImage,
    // grabbedOnce,
}: {
    leftImage: string;
    rightImage: string;

    position: number;
    alt: string;
    grabbedOnce: boolean;
}) => (
    <>
        <img
            src={leftImage}
            alt={`${alt} - Left`}
            className={cn(
                "absolute inset-0 w-full h-full object-contain pointer-events-none select-none",
                // grabbedOnce ? "" : "blur-xs",
            )}
            draggable={false}
        />

        <div
            className={cn(
                "absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none",
                // grabbedOnce ? "" : "blur-xs",
            )}
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
            <img
                src={rightImage}
                alt={`${alt} - Right`}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
            />
        </div>
    </>
);

export function ComparisonSlider({
    leftImage,
    rightImage,
    alt = "Comparison",
}: ComparisonSliderProps) {
    const [grabbedOnce, setGrabbedOnce] = useState(false);
    const [position, setPosition] = useState(97);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsDragging(true);

        setGrabbedOnce(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !containerRef.current) return;

            const rect =
                containerRef.current.parentElement?.getBoundingClientRect();

            if (!rect) return;

            const newPosition = ((e.clientX - rect.left) / rect.width) * 100;

            // Clamp between 0 and 100
            setPosition(Math.max(0, Math.min(100, newPosition)));
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-auto aspect-square overflow-hidden"
            style={{ height: "100%" }}
        >
            <Media
                leftImage={leftImage}
                rightImage={rightImage}
                alt={alt}
                position={position}
                grabbedOnce={grabbedOnce}
            />

            <SliderHandle
                position={position}
                handleMouseDown={handleMouseDown}
            />
        </div>
    );
}
