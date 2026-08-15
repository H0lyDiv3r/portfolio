import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "../types";

export const StickyNote = ({
  project,
  idx,
}: {
  project: Project;
  idx: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const postitRotations = [-1, 1, -2, 2];

  const postItColors = [
    "#FEF9C3", // faded yellow
    "#DCFCE7", // faded mint
    "#FCE7F3", // faded pink
    "#DBEAFE", // faded blue
    "#EDE9FE", // faded lavender
    "#FEF3C7", // faded peach
    "#D1FAE5", // faded seafoam
    "#FFE4E6", // faded salmon
    "#F3E8FF", // faded purple
    "#FEF9C3", // faded warm yellow
    "#E0F2FE", // faded sky blue
    "#FDF2F8",
  ];

  const color = postItColors[idx % 6];

  return (
    <>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${project.grid} group relative flex flex-col p-4 transition-all cursor-pointer`}
        style={{
          background: hovered
            ? `linear-gradient(to bottom,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 0%,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 14%,
            ${color} 16%,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 100%)`
            : `linear-gradient(to bottom,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 0%,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 14%,
            color-mix(in srgb, ${color} 80%, white 20%) 16%,
            oklch(from ${color} calc(l * 0.97) calc(c * 1.15) h) 100%)`,
          transition: "background 0.2s ease",
          transform: `rotate(${postitRotations[idx % 4]}deg)`,
          border: `0.5px solid color-mix(in srgb, ${color} 85%, black 15%)`,
          borderRadius: "6px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            top: "14%",
            boxShadow: hovered
              ? "0 1px 2px rgba(0,0,0,0.15)"
              : "0 11px 17px -6px rgba(0,0,0,0.25)",
            transition: "box-shadow 0.2s ease",
          }}
        />
        <div className="flex justify-between items-start mb-auto">
          <span className="text-[var(--ink-muted)]">{project.icon}</span>
          <ArrowUpRight className="text-[var(--ink-muted)]" size={16} />
        </div>

        <div className="space-y-1">
          <h4 className="text-lg font-hand" style={{ color: "var(--ink)" }}>
            {project.title}
          </h4>
          <p
            className="text-sm font-hand leading-relaxed"
            style={{ color: "var(--ink-muted)" }}
          >
            {project.desc}
          </p>

          <div className="flex gap-3 flex-wrap pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-hand"
                style={{ color: "var(--ink-muted)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </>
  );
};
