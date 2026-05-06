import { ChevronsLeftRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SliderHandle = ({
    position,
    handleMouseDown,
}: {
    position: number;
    handleMouseDown: () => void;
}) => (
    <div
        className="absolute top-0 h-full cursor-col-resize transition-colors group"
        style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
            width: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
    >
        <div
            onMouseDown={handleMouseDown}
            className="absolute bg-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-full w-12 h-12 flex items-center justify-center cursor-grab border border-secondary"
        >
            <div className="flex gap-1 flex-col">
                <ChevronsLeftRight className="w-8 h-8 text-secondary" />
            </div>
        </div>
    </div>
);

interface ComparisonSliderProps {
    leftImage: string;
    rightImage: string;
    loading: "eager" | "lazy";
    fetchPriority: "high" | "auto";
    alt?: string;
    height?: string;
}

const Media = ({
    leftImage,
    alt,
    position,
    loading,
    fetchPriority,
    rightImage,
}: {
    leftImage: string;
    rightImage: string;
    position: number;
    alt: string;
    loading: "eager" | "lazy";
    fetchPriority: "high" | "auto";
}) => (
    <>
        <img
            src={leftImage}
            alt={`${alt} - Left`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
            loading={loading ?? "lazy"}
            fetchPriority={fetchPriority ?? "auto"}
        />
        <div
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
            <img
                src={rightImage}
                alt={`${alt} - Right`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                loading={loading ?? "lazy"}
                fetchPriority={fetchPriority ?? "auto"}
            />
        </div>
    </>
);

export function ComparisonSlider({
    leftImage,
    rightImage,
    alt = "Comparison",
    loading,
    fetchPriority,
}: ComparisonSliderProps) {
    const [position, setPosition] = useState(66); // 0-100%
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = () => {
        setIsDragging(true);
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
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden bg-gray-100 select-none"
                style={{ height: "100%" }}
            >
                <Media
                    leftImage={leftImage}
                    rightImage={rightImage}
                    alt={alt}
                    position={position}
                    loading={loading}
                    fetchPriority={fetchPriority}
                />

                <SliderHandle
                    position={position}
                    handleMouseDown={handleMouseDown}
                />
            </div>
        </div>
    );
}
