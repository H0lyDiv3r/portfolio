"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CroaquiPhoto } from "../data/croaqui";

/* deterministic per-photo jitter — every polaroid lands differently */
const tiltFor = (i: number) => [-2.4, 1.8, -1.2, 2.6, -2.9, 1.1, -0.7, 2.2][i % 8];
const driftXFor = (i: number) => ((i * 37) % 23) - 11; // -11..11 px
const driftYFor = (i: number) => ((i * 53) % 15) - 7; // -7..7 px

const carouselStyles = `
@keyframes cq-swing {
  0% { transform: scale(0.82) rotate(calc(var(--tilt) * 2.2)) translateY(14px); opacity: 0; }
  55% { transform: scale(1.04) rotate(calc(var(--tilt) * -0.35)) translateY(-3px); opacity: 1; }
  100% { transform: scale(1) rotate(var(--tilt)) translateY(0); opacity: 1; }
}
.cq-tape {
  position: absolute;
  width: 84px;
  height: 26px;
  background: linear-gradient(100deg, rgba(250,241,199,0.45), rgba(250,241,199,0.65));
  box-shadow: 0 1px 3px rgba(0,0,0,0.18);
  pointer-events: none;
}
.cq-ring {
  border: 2px solid rgba(245,240,232,0.55);
  border-radius: 46% 54% 50% 50% / 56% 44% 58% 42%;
}
`;

export const CroaquiCarousel = ({
  photos,
  startIndex,
  onClose,
}: {
  photos: CroaquiPhoto[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(startIndex);
  const count = photos.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count]
  );

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) prev();
      else next();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [prev, next]);

  const photo = photos[index];
  const tilt = tiltFor(index);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c1c33]/90 cursor-pointer overflow-hidden"
      style={{ backdropFilter: "blur(2px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.caption} — polaroid ${index + 1} of ${count}`}
    >
      {/* close — a little scrawled x */}
      <button
        className="absolute top-6 right-6 p-2 text-[var(--paper)] hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="close carousel"
      >
        <X size={28} />
      </button>

      {/* prev / next — scribbled rings around chevrons */}
      <button
        className="scribble-ring absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 text-[var(--paper)] hover:opacity-70 transition-opacity -rotate-6"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="previous polaroid"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="scribble-ring absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 text-[var(--paper)] hover:opacity-70 transition-opacity rotate-6"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="next polaroid"
      >
        <ChevronRight size={32} />
      </button>

      {/* the polaroid — re-tossed on every flip */}
      <div
        className="px-16 sm:px-24 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <figure
          key={index}
          className="relative mx-auto max-w-2xl bg-white px-4 pt-4 pb-8"
          style={{
            boxShadow:
              "0 24px 60px -16px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.4)",
            transform: `translate(${driftXFor(index)}px, ${driftYFor(index)}px)`,
            animation: "swing-in 0.45s cubic-bezier(0.34, 1.4, 0.64, 1) both",
            ["--tilt" as string]: `${tilt}deg`,
          }}
        >
          {/* washi tape holding it up */}
          <span
            className="tape -top-3 -left-8 -rotate-[24deg]"
            aria-hidden
          />
          <span
            className="tape -top-3 -right-8 rotate-[19deg]"
            aria-hidden
          />

          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full max-h-[62vh] object-contain"
          />
          <figcaption
            className="pt-6 text-center font-hand text-xl -rotate-1"
            style={{ color: "var(--ink)" }}
          >
            {photo.caption}
          </figcaption>
        </figure>

        {/* thumbnails — little prints scattered on the desk */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIndex(i)}
              className="bg-white p-1 pb-2.5 transition-all duration-200 cursor-pointer hover:brightness-110"
              style={{
                opacity: i === index ? 1 : 0.5,
                transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + (i % 3))}deg) translateY(${((i % 3) - 1) * 5}px)`,
                scale: i === index ? "1.25" : "1",
                zIndex: i === index ? 10 : 1,
                boxShadow:
                  i === index
                    ? "0 6px 14px rgba(0,0,0,0.5)"
                    : "0 2px 5px rgba(0,0,0,0.35)",
              }}
              aria-label={p.caption}
              aria-current={i === index ? "true" : undefined}
            >
              <img src={p.src} alt="" className="w-14 h-10 object-cover" />
            </button>
          ))}
        </div>

        <p
          className="mt-5 text-center font-hand text-lg"
          style={{ color: "var(--paper)" }}
        >
          {index + 1} / {count}
          <span className="ml-3 text-base opacity-50">
            ← → to flip · esc to toss back
          </span>
        </p>
      </div>
    </div>,
    document.body
  );
};
