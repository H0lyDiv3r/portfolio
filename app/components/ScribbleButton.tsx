import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ReactNode,
} from "react";

export const ScribbleButton = ({
  href,
  emptyScribble,
  filledScribble,
  accent,
  children,
}: {
  href: string;
  emptyScribble: string;
  filledScribble: string;
  accent?: string;
  children: ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center px-8 py-3 font-hand text-base"
      style={{
        color: hovered ? "var(--paper)" : "var(--ink)",
        fontWeight: hovered ? 700 : 400,
        opacity: 0.9,
        fontSize: hovered ? "1.1rem" : "1rem",
        transition: "color 0.3s ease, opacity 0.3s ease, font-size 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={emptyScribble}
        alt=""
        className="absolute inset-0 w-full h-full object-fill"
      />
      <img
        src={filledScribble}
        alt=""
        className="absolute inset-0 w-full h-full object-fill"
        style={{
          opacity: hovered ? 0.9 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <span className="relative flex items-center gap-3">
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, {
                style: {
                  color: hovered ? "var(--paper)" : accent,
                },
              })
            : child
        )}
      </span>
    </a>
  );
};
