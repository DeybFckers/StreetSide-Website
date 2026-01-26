import { ChevronLeft,  ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import slide1 from "../assets/Carousel/slide1.jpg";
import slide2 from "../assets/Carousel/slide2.jpg";
import slide3 from "../assets/Carousel/slide3.jpg";

const slides = [
    slide1,
    slide2,
    slide3
];

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    const interval = setInterval(() => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative md:block">
      <div className="relative overflow-hidden pt-4 bg-transparent">
        <div className="w-full aspect-video overflow-hidden rounded-2xl">
          <div className="flex w-full h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${curr * 100}%)` }}>
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 hover:bg-white cursor-pointer">
            <ChevronLeft />
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-white/80 hover:bg-white cursor-pointer">
            <ChevronRight />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex justify-center items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurr(index)}
                className={`w-3 h-3 rounded-full ${curr === index ? "bg-white" : "bg-white/50"} hover:cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

