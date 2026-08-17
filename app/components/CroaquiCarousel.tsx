"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CroaquiPhoto } from "../data/croaqui";

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

  const photo = photos[index];

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c1c33]/90 cursor-pointer"
      style={{ backdropFilter: "blur(2px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.caption} — polaroid ${index + 1} of ${count}`}
    >
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

      <button
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2 text-[var(--paper)] hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="previous polaroid"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2 text-[var(--paper)] hover:opacity-70 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="next polaroid"
      >
        <ChevronRight size={36} />
      </button>

      <div
        className="px-16 sm:px-24 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="mx-auto max-w-2xl bg-white px-4 pt-4 pb-8"
          style={{
            boxShadow:
              "0 24px 60px -16px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.4)",
            transform: "rotate(-1deg)",
          }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full max-h-[70vh] object-contain"
          />
          <p
            className="pt-6 text-center font-hand text-xl"
            style={{ color: "var(--ink)" }}
          >
            {photo.caption}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIndex(i)}
              className="transition-all duration-200 cursor-pointer"
              style={{
                opacity: i === index ? 1 : 0.45,
                transform: i === index ? "scale(1.15)" : "scale(1)",
              }}
              aria-label={p.caption}
              aria-current={i === index ? "true" : undefined}
            >
              <img
                src={p.src}
                alt=""
                className="w-14 h-10 object-cover border-2"
                style={{
                  borderColor:
                    i === index ? "var(--paper)" : "transparent",
                }}
              />
            </button>
          ))}
        </div>

        <p
          className="mt-4 text-center font-hand text-base"
          style={{ color: "var(--paper)" }}
        >
          {index + 1} / {count}
        </p>
      </div>
    </div>,
    document.body
  );
};