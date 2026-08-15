"use client";

import { useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  MapPin,
  Terminal,
  Music,
  ArrowUpRight,
  MessageSquare,
  ShoppingBag,
  Layers,
  Send,
  Check,
  Copy,
  Globe,
  Key,
  Mic2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { StickyNote } from "./components";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState("about");

  const copyToClipboard = (text: string) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bookmarks = [
    {
      id: "about",
      label: "about",
      color: "#C6b3ca",
      muted: "#e5dde7",
      text: "#776b79",
      textActive: "#59515b",
    },
    {
      id: "work",
      label: "work",
      color: "#84a48b",
      muted: "#c8d6cb",
      text: "#4f6253",
      textActive: "#3b4a3f",
    },
    {
      id: "croaqui",
      label: "croaqui",
      color: "#E89888",
      muted: "#f5d1c9",
      text: "#8b5b52",
      textActive: "#68443d",
    },
    {
      id: "contact",
      label: "contact",
      color: "#7bb2ba",
      muted: "#c4dcdf",
      text: "#4a6b70",
      textActive: "#375054",
    },
  ];

  const userData = {
    name: "Yohannes Hailemariam",
    location: "Addis Ababa, Ethiopia",
    email: "yohannes.hailemariam@gmail.com",
    github: "H0lyDiv3r",
    linkedin: "yohannes-hailemariam-093b252ab",
    telegram: "H0lyDiv3r",
    twitter: "yohannes_hm",
    stats: "GPA: 3.74",
    techStack: [
      {
        name: "Go",
        sticker: "/stickers/golang.webp",
        size: "w-28 h-28",
      },
      {
        name: "React",
        sticker: "/stickers/react.webp",
        size: "w-20 h-20",
      },
      {
        name: "Next.js",
        sticker: "/stickers/next.webp",
        size: "w-16 h-16",
      },
      {
        name: "NestJS",
        sticker: "/stickers/nest.webp",
        size: "w-16 h-16",
      },
      {
        name: "TypeScript",
        sticker: "/stickers/ts.webp",
        size: "w-20 h-20",
      },
      {
        name: "Python",
        sticker: "/stickers/python.webp",
        size: "w-16 h-16",
      },
      {
        name: "Angular",
        sticker: "/stickers/angular.webp",
        size: "w-16 h-16",
      },
      {
        name: "SQL",
        sticker: "/stickers/postgres.webp",
        size: "w-16 h-16",
      },
      {
        name: "Docker",
        sticker: "/stickers/docker.webp",
        size: "w-20 h-20",
      },
      {
        name: "Tailwind",
        sticker: "/stickers/tailwind.webp",
        size: "w-20 h-20",
      },
      {
        name: "Chakra",
        sticker: "/stickers/chakraui.webp",
        size: "w-16 h-16",
      },
    ],
    projects: [
      {
        title: "Turtle Terminal",
        desc: "Terminal emulator from scratch. Custom ANSI parser, GPU rendering. Because I wanted one that's mine.",
        url: "https://github.com/tars-terminal/turtle",
        icon: <Terminal size={18} />,
        tags: ["React", "Chakra-UI"],
        grid: "md:col-span-3 md:row-span-1",
      },
      {
        title: "Croaqui",
        desc: "Linux music player. Go. React. Wails. Because everything else got in the way.",
        url: "https://github.com/H0lyDiv3r/croaqui",
        icon: <Music size={18} />,
        tags: ["Go", "React", "Wails"],
        grid: "md:col-span-2 md:row-span-1",
      },
      {
        title: "Medusa Storefront",
        desc: "E-commerce frontend for Medusa headless. Clean. Fast. Does the job.",
        url: "https://github.com/H0lyDiv3r/medusa-store-front",
        icon: <ShoppingBag size={18} />,
        tags: ["Next.js", "Tailwind"],
        grid: "md:col-span-2 md:row-span-1",
      },
      {
        title: "Go-Web",
        desc: "Frontend framework in Go that compiles to Wasm. Asking 'what if' until something breaks.",
        url: "https://github.com/H0lyDiv3r/go-web",
        icon: <Layers size={18} />,
        tags: ["Go", "Wasm"],
        grid: "md:col-span-2 md:row-span-1",
      },
      {
        title: "License Server",
        desc: "License server implementation with Go, Chi, Wails and Stripe payment.",
        url: "https://github.com/H0lyDiv3r/license-server",
        icon: <Key size={18} />,
        tags: ["Go", "Chi", "Wails", "Stripe"],
        grid: "md:col-span-2 md:row-span-1",
      },
    ],
  };

  const postitRotations = [-1, 1, -2, 2];

  return (
    <div className=" min-h-screen bg-[#1a1a1a] py-6 px-6 font-sans antialiased flex justify-center">
      <div className="w-full min-h-full flex justify-center">
        <div className="flex-1 max-w-3xl bg-[#f5f0e8] relative flex flex-col rounded-sm overflow-hidden">
          <div className="binder-holes" aria-hidden="true">
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
            <span className="hole"></span>
          </div>

          <div className=" h-full flex  ">
            {/* Page content */}
            <div
              className=" h-full flex flex-1 flex-col justify-center"
              style={{ color: "var(--ink)" }}
            >
              {/* Header */}
              <div className="h-20 shrink-0 flex items-end justify-between px-12">
                <span
                  className="text-base font-hand"
                  style={{ color: "var(--ink-muted)" }}
                >
                  Yohannes Hailemariam&apos;s Resume
                </span>
                <span
                  className="text-base font-hand"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {new Date().getDate()}/{new Date().getMonth() + 1}/
                  {new Date().getFullYear()} GC
                </span>
              </div>

              <div
                className="
            flex-1 px-16 bg-[var(--paper)]
            bg-[linear-gradient(90deg,var(--margin-line)_1px,transparent_1px),repeating-linear-gradient(0deg,transparent,transparent_27px,var(--line)_27px,var(--line)_28px)]
            bg-[position:52px_0] bg-[size:100%_28px]  relative overflow-visible z-[1] border border-[#d9d4c8]"
              >
                {page === "about" && (
                  <div className="space-y-18">
                    <section className="space-y-6 mt-6">
                      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex-shrink-0 -rotate-2 bg-center bg-cover">
                          <img
                            src="/paperPicture.png"
                            alt="Yohannes Hailemariam"
                            className="w-28 h-28 md:w-40 md:h-40 object-contain"
                            style={{
                              filter:
                                "drop-shadow(3px 4px 4px rgba(0,0,0,0.05))",
                            }}
                          />
                        </div>
                        <div className="space-y-3">
                          <h1
                            className="text-3xl md:text-4xl font-hand tracking-tight leading-tight"
                            style={{ color: "var(--ink)" }}
                          >
                            {userData.name}
                          </h1>

                          <div className="flex flex-wrap gap-x-12 gap-y-4">
                            <div>
                              <p
                                className="text-base font-hand"
                                style={{ color: "var(--ink)" }}
                              >
                                Full-Stack @ Teleport Tech
                              </p>
                            </div>
                            <div>
                              <p
                                className="text-base font-hand"
                                style={{ color: "var(--ink)" }}
                              >
                                Mekelle Institute of Tech
                              </p>
                              <p
                                className="text-base font-hand"
                                style={{ color: "var(--ink-muted)" }}
                              >
                                Bsc Computer Science & Engineering —{" "}
                                {userData.stats}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 max-w-2xl">
                        <p
                          className="text-lg md:text-xl font-hand leading-relaxed"
                          style={{ color: "var(--ink)" }}
                        >
                          i write go, build terminal emulators, and occasionally
                          break my own stuff. currently shipping fintech at
                          teleport technologies from addis ababa.
                        </p>

                        <div
                          className="flex flex-wrap gap-x-8 gap-y-3 text-base font-hand"
                          style={{ color: "var(--ink-muted)" }}
                        >
                          <div className="flex items-center gap-2">
                            <MapPin
                              size={16}
                              style={{ color: "var(--accent)" }}
                            />
                            <span>{userData.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail
                              size={16}
                              style={{ color: "var(--accent)" }}
                            />
                            <span>{userData.email}</span>
                          </div>
                        </div>

                        <div className="flex gap-4 items-center">
                          <a
                            href={`https://github.com/${userData.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 transition-colors hover:opacity-70"
                            style={{ color: "#1a1a1a" }}
                          >
                            <FaGithub size={22} />
                          </a>
                          <a
                            href={`https://linkedin.com/in/${userData.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 transition-colors hover:opacity-70"
                            style={{ color: "#0A66C2" }}
                          >
                            <FaLinkedinIn size={22} />
                          </a>
                          <a
                            href={`https://t.me/${userData.telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 transition-colors hover:opacity-70"
                            style={{ color: "#26A5E4" }}
                          >
                            <FaTelegramPlane size={22} />
                          </a>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-6 pb-6">
                      <h2
                        className="text-2xl font-hand"
                        style={{ color: "var(--ink)" }}
                      >
                        stuff i use
                      </h2>
                      <div className="flex flex-wrap gap-10 items-start pt-4 pb-8 justify-center">
                        {userData.techStack.map((tech, idx) => {
                          const stagger = [0, 6, 12, 4, 10, 2, 8, 14, 4, 10, 6];
                          return (
                            <div
                              key={tech.name}
                              className="flex flex-col items-center gap-1"
                              style={{
                                transform: `rotate(${postitRotations[idx % 4]}deg)`,
                                marginTop: `${stagger[idx]}px`,
                              }}
                            >
                              <div className={`${tech.size} leading-none`}>
                                <img
                                  src={tech.sticker}
                                  alt={tech.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-hand text-[var(--ink-muted)]">
                                {tech.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </div>
                )}

                {page === "work" && (
                  <div className="space-y-6">
                    <section className="space-y-4">
                      <h2
                        className="text-2xl font-hand"
                        style={{ color: "var(--ink)" }}
                      >
                        work
                      </h2>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                            <div className="space-y-1">
                              <h3
                                className="text-2xl font-hand"
                                style={{ color: "var(--ink)" }}
                              >
                                Teleport Technologies
                              </h3>
                              <p
                                className="text-base font-hand"
                                style={{ color: "var(--ink-muted)" }}
                              >
                                Full-Stack Software Engineer
                              </p>
                            </div>
                            <span
                              className="text-sm font-hand"
                              style={{ color: "var(--ink-muted)" }}
                            >
                              2024 — Present
                            </span>
                          </div>

                          <div
                            className="space-y-4 pt-3 font-hand text-base"
                            style={{ color: "var(--ink)" }}
                          >
                            <p>
                              <span>Telebirr Management System</span> —
                              reconciling millions of Birr in daily mobile
                              money. Angular + NestJS.
                            </p>
                            <p>
                              <span>IAT B2C</span> — features for the Telebirr
                              monetary transfer system. Because money needs to
                              move.
                            </p>
                            <p
                              className="text-sm"
                              style={{ color: "var(--ink-muted)" }}
                            >
                              more internal tooling — under NDA but it serves
                              millions of users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-4">
                      <h2
                        className="text-2xl font-hand"
                        style={{ color: "var(--ink)" }}
                      >
                        projects
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[190px] gap-3">
                        {userData.projects.map((project, idx) => (
                          <StickyNote project={project} idx={idx} key={idx} />
                        ))}
                      </div>

                      <div className="flex justify-center pt-2">
                        <a
                          href={`https://github.com/${userData.github}`}
                          target="_blank"
                          className="flex items-center gap-3 px-5 py-2 rounded transition-colors font-hand text-sm hover:bg-[#d9d4c8]"
                          style={{
                            border: "1.5px solid var(--card-border)",
                            color: "var(--ink)",
                          }}
                        >
                          more on github
                          <Github
                            size={14}
                            style={{ color: "var(--accent)" }}
                          />
                        </a>
                      </div>
                    </section>
                  </div>
                )}

                {page === "croaqui" && (
                  <div className="space-y-6">
                    <section className="space-y-4">
                      <h2
                        className="text-2xl font-hand"
                        style={{ color: "var(--ink)" }}
                      >
                        croaqui
                      </h2>
                      <p
                        className="font-hand text-base"
                        style={{ color: "var(--ink)" }}
                      >
                        Linux music player. Go. React. Wails. Because everything
                        else got in the way.
                      </p>
                      <div className="flex justify-center pt-2">
                        <a
                          href="https://github.com/H0lyDiv3r/croaqui"
                          target="_blank"
                          className="flex items-center gap-3 px-5 py-2 rounded transition-colors font-hand text-sm hover:bg-[#d9d4c8]"
                          style={{
                            border: "1.5px solid var(--card-border)",
                            color: "var(--ink)",
                          }}
                        >
                          view on github
                          <Github
                            size={14}
                            style={{ color: "var(--accent)" }}
                          />
                        </a>
                      </div>
                    </section>
                  </div>
                )}

                {page === "contact" && (
                  <section className="space-y-4">
                    <h2
                      className="text-2xl font-hand"
                      style={{ color: "var(--ink)" }}
                    >
                      contact
                    </h2>

                    <div className="max-w-2xl space-y-8">
                      <div className="space-y-4">
                        <h3
                          className="text-2xl md:text-3xl font-hand"
                          style={{ color: "var(--ink)" }}
                        >
                          let&apos;s build something.
                        </h3>
                        <p
                          className="text-lg md:text-xl font-hand leading-relaxed"
                          style={{ color: "var(--ink)" }}
                        >
                          i write go, build terminal emulators, and occasionally
                          break my own stuff. currently shipping fintech at
                          teleport technologies from addis ababa.
                        </p>
                        <p
                          className="text-base font-hand"
                          style={{ color: "var(--ink-muted)" }}
                        >
                          got an idea? let&apos;s talk.
                        </p>
                      </div>

                      <div
                        className="mx-auto max-w-lg -rotate-1 transition-all"
                        style={{
                          backgroundColor: "#fff8dc",
                          boxShadow: "3px 3px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div className="p-6 space-y-4">
                          <div
                            className="inline-flex items-center gap-3 py-2 px-4"
                            style={{ backgroundColor: "rgba(122,119,48,0.08)" }}
                          >
                            <MessageSquare
                              size={14}
                              style={{ color: "var(--accent)" }}
                            />
                            <span
                              className="text-sm font-hand"
                              style={{ color: "var(--ink-muted)" }}
                            >
                              available for new projects
                            </span>
                          </div>

                          <div
                            onClick={() => copyToClipboard(userData.email)}
                            className="group cursor-pointer flex items-center justify-between gap-4 p-3"
                            style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                          >
                            <span
                              className="text-base font-hand truncate"
                              style={{ color: "var(--ink)" }}
                            >
                              {userData.email}
                            </span>
                            <div className="flex-shrink-0 p-2">
                              {copied ? (
                                <Check
                                  size={14}
                                  style={{ color: "var(--accent)" }}
                                />
                              ) : (
                                <Copy
                                  size={14}
                                  style={{ color: "var(--ink-muted)" }}
                                />
                              )}
                            </div>
                          </div>

                          <div
                            className="flex items-center gap-2 text-sm font-hand"
                            style={{ color: "var(--ink-muted)" }}
                          >
                            <MapPin
                              size={14}
                              style={{ color: "var(--accent)" }}
                            />
                            <span>{userData.location}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <a
                              href={`https://t.me/${userData.telegram}`}
                              target="_blank"
                              className="flex items-center justify-center gap-2 py-2.5 px-4 transition-colors text-sm font-hand hover:bg-[#d9d4c8]"
                              style={{
                                color: "var(--ink)",
                                backgroundColor: "rgba(0,0,0,0.03)",
                              }}
                            >
                              <Send size={14} />
                              Telegram
                            </a>
                            <a
                              href={`https://linkedin.com/in/${userData.linkedin}`}
                              target="_blank"
                              className="flex items-center justify-center gap-2 py-2.5 px-4 transition-colors text-sm font-hand hover:bg-[#d9d4c8]"
                              style={{
                                color: "var(--ink)",
                                backgroundColor: "rgba(0,0,0,0.03)",
                              }}
                            >
                              <Linkedin size={14} />
                              LinkedIn
                            </a>
                          </div>

                          <a
                            href={`https://github.com/${userData.github}`}
                            target="_blank"
                            className="flex items-center justify-between p-3 transition-colors hover:bg-[#d9d4c8]"
                            style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                          >
                            <div
                              className="flex items-center gap-3 text-sm font-hand"
                              style={{ color: "var(--ink)" }}
                            >
                              <Github size={16} />
                              check my github
                            </div>
                            <ArrowUpRight
                              size={14}
                              style={{ color: "var(--ink-muted)" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>

              <div
                className="h-12 shrink-0 flex items-center font-hand text-sm px-12"
                style={{ color: "var(--ink-muted)" }}
              >
                <div>
                  {userData.email} — {userData.location}
                </div>
              </div>
            </div>
            {/* COLOR AT RIGHT EDGE OF PAPAER */}
            <div
              className="min-w-5 shrink-0"
              style={{
                backgroundColor: bookmarks.find((bm) => bm.id === page)?.color,
              }}
            />
          </div>
        </div>
        {/* Bookmark tabs */}
        <div
          className="min-h-full justify-center flex flex-col gap-1.5"
        >
          {bookmarks.map((bm) => (
            <div
              key={bm.id}
              className={`bookmark-tab ${page === bm.id ? "active" : ""}`}
              style={{
                backgroundColor: page === bm.id ? bm.color : bm.muted,
                color: page === bm.id ? bm.textActive : bm.text,
              }}
              onClick={() => setPage(bm.id)}
            >
              {bm.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
