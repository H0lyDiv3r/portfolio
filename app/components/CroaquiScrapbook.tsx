import { Fragment, useState } from "react";
import { ScribbleButton } from "./ScribbleButton";
import { CroaquiCarousel } from "./CroaquiCarousel";
import { croaquiPhotos, CroaquiPhoto } from "../data/croaqui";

import type { ReactNode } from "react";

type Row = {
  photoIndex: number;
  rotate: number;
  imageOn: "left" | "right";
  text: ReactNode;
  title?: boolean;
};

const liClass =
  "[list-style:none] [background-image:url('/scribbles/liScribble.png')] [background-size:12px_12px] [background-position:left_center] [background-repeat:no-repeat] pl-6";

const rows: Row[] = [
  {
    photoIndex: 0,
    rotate: -1.5,
    imageOn: "right",
    title: true,
    text: (
      <div className="text-sm flex flex-col justify-between gap-2">
        <p>dedicated to my favourite personal project.</p>
        <ul className="space-y-1">
          <li className={liClass}>
            cross platform music player built with Go, Wails and React
          </li>
          <li className={liClass}>
            MPV for audio playback, taglib for metadata
          </li>
          <li className={liClass}>
            uses CGO to communicate with system MPV and taglib
          </li>
        </ul>
      </div>
    ),
  },
  {
    photoIndex: 2,
    rotate: 1.5,
    imageOn: "left",
    text: (
      <div className="text-sm flex flex-col gap-2">
        <p>point it at your music folder once and it figures out the rest.</p>
        <ul className="space-y-1">
          <li className={liClass}>albums</li>
          <li className={liClass}>metadata parsing</li>
          <li className={liClass}>playlists</li>
          <li className={liClass}>mini player</li>
        </ul>
        <p>
          plays a wide range of audio formats, thanks to mpv&apos;s extensive
          codec support.
        </p>
      </div>
    ),
  },
  {
    photoIndex: 7,
    rotate: 1.5,
    imageOn: "right",
    text: (
      <div className="text-base flex flex-col gap-2">
        <img
          src="/scribbles/Loading.png"
          alt="loading"
          className="w-40 h-auto opacity-85"
        />
        <p>currently in the works: peer-to-peer audio streaming.</p>
        <p>
          stream tracks straight from your library to someone else&apos;s
          player — no server in between.
        </p>
      </div>
    ),
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

const TextCell = ({ row }: { row: Row }) =>
  row.title ? (
    <section className="sm:h-full flex flex-col justify-start space-y-1">
      <h2 className="pointer-events-none">
        <img
          src="/scribbles/texts/croaqui.webp"
          alt="croaqui"
          className="w-40 h-auto opacity-85"
        />
      </h2>
      <div
        className="font-hand text-base leading-relaxed"
        style={{ color: "var(--ink)" }}
      >
        {row.text}
      </div>
    </section>
  ) : (
    <section className="space-y-1 self-center">
      <div
        className="font-hand text-base leading-relaxed"
        style={{ color: "var(--ink-muted)" }}
      >
        {row.text}
      </div>
    </section>
  );

export const CroaquiScrapbook = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {/* feature rows — image columns alternate right, left, right, left */}
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
          ),
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
