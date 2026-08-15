import { ArrowUpRight } from "lucide-react";
import { Project } from "../types";

export const StickyNote = ({
  project,
  idx,
}: {
  project: Project;
  idx: number;
}) => {
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
  return (
    <>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${project.grid} group relative flex flex-col p-4 transition-all cursor-pointer`}
        style={{
          backgroundColor: postItColors[idx % 6],

          transform: `rotate(${postitRotations[idx % 4]}deg)`,
          boxShadow: "0px 4px 2px rgba(0,0,0,0.1)",
        }}
      >
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
