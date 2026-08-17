import { Fragment, useState } from "react";
import { ScribbleButton } from "./ScribbleButton";
import { CroaquiCarousel } from "./CroaquiCarousel";
import { croaquiPhotos, CroaquiPhoto } from "../data/croaqui";

type Row = {
  photoIndex: number;
  rotate: number;
  imageOn: "left" | "right";
  text: string;
  title?: boolean;
};

const rows: Row[] = [
  {
    photoIndex: 0,
    rotate: -1.5,
    imageOn: "right",
    title: true,
    text: "Linux music player. Go. React. Wails. Because everything else got in the way.",
  },
  {
    photoIndex: 2,
    rotate: 1.5,
    imageOn: "left",
    text: "point it at your music folder once and it figures out the rest.",
  },
  {
    photoIndex: 7,
    rotate: 1.5,
    imageOn: "right",
    text: "the mini player stays out of the way until you need it.",
  },
];

const ImageCard = ({
  photo,
  rotate,
  idx,
  onOpen,
}: {
  photo: CroaquiPhoto;
  rotate: number;
  idx: number;
  onOpen: () => void;
}) => (
  <figure
    className="relative w-full max-w-sm justify-self-center self-center cursor-pointer"
    style={{ transform: `rotate(${rotate}deg)`, zIndex: idx % 3 }}
    onClick={onOpen}
  >
    <div
      className="bg-white px-2.5 pt-2.5 pb-3"
      style={{
        boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
      }}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full aspect-[16/10] object-cover"
      />
      <figcaption
        className="pt-4 text-center font-hand text-base"
        style={{ color: "var(--ink)" }}
      >
        {photo.caption}
      </figcaption>
    </div>
  </figure>
);

const TextCell = ({ row }: { row: Row }) => (
  <section className="space-y-1 self-center">
    {row.title && (
      <h2 className="pointer-events-none">
        <img
          src="/scribbles/texts/croaqui.webp"
          alt="croaqui"
          className="w-40 h-auto opacity-85"
        />
      </h2>
    )}
    <p
      className="font-hand text-base leading-relaxed"
      style={{ color: row.title ? "var(--ink)" : "var(--ink-muted)" }}
    >
      {row.text}
    </p>
  </section>
);

export const CroaquiScrapbook = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {/* 3 rows — image columns alternate right, left, right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 items-stretch">
        {rows.map((row, idx) =>
          row.imageOn === "right" ? (
            <Fragment key={idx}>
              <TextCell row={row} />
              <ImageCard
                photo={croaquiPhotos[row.photoIndex]}
                rotate={row.rotate}
                idx={idx}
                onOpen={() => setOpenIndex(row.photoIndex)}
              />
            </Fragment>
          ) : (
            <Fragment key={idx}>
              <ImageCard
                photo={croaquiPhotos[row.photoIndex]}
                rotate={row.rotate}
                idx={idx}
                onOpen={() => setOpenIndex(row.photoIndex)}
              />
              <TextCell row={row} />
            </Fragment>
          )
        )}
      </div>

      <div className="flex justify-center py-2">
        <ScribbleButton
          href="https://github.com/H0lyDiv3r/croaqui"
          emptyScribble="/scribbles/scribbleEmpty1.webp"
          filledScribble="/scribbles/scribbleFilled3.webp"
          accent="var(--accent)"
        >
          view on github
        </ScribbleButton>
      </div>

      {openIndex !== null && (
        <CroaquiCarousel
          photos={croaquiPhotos}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
};
