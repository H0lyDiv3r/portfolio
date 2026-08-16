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
import { ScribbleButton, StickyNote } from "./components";

const githubMask =
  '[mask-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20496%20512%22%3E%3Cpath%20fill%3D%22black%22%20d%3D%22M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2%202.3zm44.2-1.7c-2.9.7-4.9%202.6-4.6%204.9.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3.3%202.9%202.3%203.9%201.6%201%203.6.7%204.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z%22%2F%3E%3C%2Fsvg%3E")] [mask-repeat:no-repeat] [mask-size:100%_100%] [mask-position:center]';

const linkedinMask =
  '[mask-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20fill%3D%22black%22%20d%3D%22M100.28%20448H7.4V148.9h92.88zM53.79%20108.1C24.09%20108.1%200%2083.5%200%2053.8a53.79%2053.79%200%200%201%20107.58%200c0%2029.7-24.1%2054.3-53.79%2054.3zM447.9%20448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29%200-55.69%2037.7-55.69%2076.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5%2042.69-48.3%2087.88-48.3%2094%200%20111.28%2061.9%20111.28%20142.3V448z%22%2F%3E%3C%2Fsvg%3E")] [mask-repeat:no-repeat] [mask-size:100%_100%] [mask-position:center]';

const telegramMask =
  '[mask-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cpath%20fill%3D%22black%22%20d%3D%22M446.7%2098.6l-67.6%20318.8c-5.1%2022.5-18.4%2028.1-37.3%2017.5l-103-75.9-49.7%2047.8c-5.5%205.5-10.1%2010.1-20.7%2010.1l7.4-104.9%20190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8%20284%2016.2%20252.2c-22.1-6.9-22.5-22.1%204.6-32.7L418.2%2066.4c18.4-6.9%2034.5%204.1%2028.5%2032.2z%22%2F%3E%3C%2Fsvg%3E")]';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState("about");
  const [contactHovered, setContactHovered] = useState(false);

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
        grid: "md:col-span-3 md:row-span-1",
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
    <div
      className="relative min-h-screen py-6 px-6 font-sans antialiased flex justify-center"
      style={{
        backgroundColor: "#0c1c33",
      }}
    >
      <div
        className="absolute inset-6 pointer-events-none"
        style={{
          border: "1.5px solid rgba(120,180,255,0.3)",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-2"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120,180,255,0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(120,180,255,0.15) 2px, transparent 2px),
              linear-gradient(rgba(120,180,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,180,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
            backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
          }}
        ></div>
      </div>
      <div className="relative w-3xl min-h-full flex justify-center items-center py-3 bg-[url('/backFace.png')] bg-top bg-cover bg-no-repeat rounded-2xl">
        <div
          className="relative left-7 h-full w-5 py-12  z-10 flex flex-col justify-between items-center gap-4 "
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="relative flex" key={i}>
              <img src={"/rings.png"} className="absolute top-0 -left-15 z-10" style={{ width: "80px", height:"auto", maxWidth: "none"}}/>
              <span className="hole absolute top-3"></span>
            </div>
          ))}
        </div>
        <div className="relative h-full flex-1 z-5 max-w-3xl bg-[#f5f0e8] flex flex-col  rounded-l-lg overflow-hidden">
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
                            className="group relative p-2 flex items-center justify-center text-[#1a1a1a]"
                          >
                            <span className="relative w-7 h-7 flex items-center justify-center">
                              <FaGithub
                                size={28}
                                className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                              />
                              <span
                                aria-hidden
                                className={`absolute inset-0 w-7 h-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:url('/scribbles/scribbleFilledSquare1.png')] [background-size:200%_200%] [background-position:center] [background-repeat:no-repeat] ${githubMask}`}
                              />
                            </span>
                          </a>
                          <a
                            href={`https://linkedin.com/in/${userData.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 flex items-center justify-center text-[#0A66C2]"
                          >
                            <span className="relative w-7 h-7 flex items-center justify-center">
                              <FaLinkedinIn
                                size={28}
                                className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                              />
                              <span
                                aria-hidden
                                className={`absolute inset-0 w-7 h-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:url('/scribbles/scribbleFilledSquare1.png')] [background-size:200%_200%] [background-position:center] [background-repeat:no-repeat] ${linkedinMask}`}
                              />
                            </span>
                          </a>
                          <a
                            href={`https://t.me/${userData.telegram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 flex items-center justify-center text-[#26A5E4]"
                          >
                            <span className="relative w-7 h-7 flex items-center justify-center">
                              <FaTelegramPlane
                                size={28}
                                className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
                              />
                              <span
                                aria-hidden
                                className={`absolute inset-0 w-7 h-7 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:url('/scribbles/scribbleFilledSquare1.png')] [background-size:200%_200%] [background-position:center] [background-repeat:no-repeat] ${telegramMask}`}
                              />
                            </span>
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
                      <div className="grid grid-cols-6 gap-x-4 gap-y-3 justify-items-center pt-1 pb-2">
                        {userData.techStack.map((tech, idx) => {
                          return (
                            <div
                              key={tech.name}
                              className="flex flex-col items-center gap-1"
                              style={{
                                transform: `rotate(${postitRotations[idx % 4]}deg)`,
                              }}
                            >
                              <div className="w-14 h-14 leading-none">
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
                        <ScribbleButton
                          href={`https://github.com/${userData.github}`}
                          emptyScribble="/scribbles/scribbleEmpty1.png"
                          filledScribble="/scribbles/scribbleFilled3.png"
                          accent="var(--accent)"
                        >
                          more on github
                        </ScribbleButton>
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
                        <ScribbleButton
                          href="https://github.com/H0lyDiv3r/croaqui"
                          emptyScribble="/scribbles/scribbleEmpty1.png"
                          filledScribble="/scribbles/scribbleFilled3.png"
                          accent="var(--accent)"
                        >
                          view on github
                        </ScribbleButton>
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
                        className="mx-auto max-w-lg -rotate-1 relative transition-all"
                        style={{
                          background: contactHovered
                            ? `linear-gradient(to bottom,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 0%,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 14%,
                            #fff8dc 16%,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 100%)`
                            : `linear-gradient(to bottom,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 0%,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 14%,
                            color-mix(in srgb, #fff8dc 80%, white 20%) 16%,
                            oklch(from #fff8dc calc(l * 0.97) calc(c * 1.15) h) 100%)`,
                          transition: "background 0.2s ease",
                          border: "0.5px solid color-mix(in srgb, #fff8dc 85%, black 15%)",
                          borderRadius: "6px",
                        }}
                        onMouseEnter={() => setContactHovered(true)}
                        onMouseLeave={() => setContactHovered(false)}
                      >
                        <div
                          className="absolute inset-x-0 bottom-0 pointer-events-none"
                          style={{
                            top: "14%",
                            boxShadow: contactHovered
                              ? "0 1px 2px rgba(0,0,0,0.15)"
                              : "0 11px 17px -6px rgba(0,0,0,0.25)",
                            transition: "box-shadow 0.2s ease",
                          }}
                        />
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
        <div className=" z-10  relative min-h-full justify-center items-center flex flex-col  ">
          <div className="z-10 flex flex-col gap-1.5">
            {bookmarks.map((bm) => (
              <div
                key={bm.id}
                className={`bookmark-tab ${page === bm.id ? "active" : ""}`}
                style={{
                  backgroundColor: page === bm.id ? bm.color : bm.muted,
                  color: page === bm.id ? bm.textActive : bm.text,
                  border: `1px solid color-mix(in srgb, ${
                    page === bm.id ? bm.color : bm.muted
                  } 90%, black)`,
                  borderLeft: page === bm.id ? "none" : undefined,
                  transform:
                    page === bm.id ? "translateX(0)" : "translateX(4px)",
                  transition:
                    "background-color 0.2s ease, width 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
                }}
                onClick={() => setPage(bm.id)}
              >
                {bm.label}
              </div>
            ))}
          </div>
          {/*pages*/}
          <div
            className="absolute left-0 top-0  h-full w-3 rounded-r-lg z-0"

            style={{
              backgroundColor: "#e8e1d2",
              backgroundImage:
                "repeating-linear-gradient(90deg, #cfc8b8 0 1px, transparent 1px 4px)",
              transform: "perspective(400px) rotateY(30deg)",
              transformOrigin: "left center",
              boxShadow: "1px 0 0 rgba(0,0,0,0.08)",
            }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default App;
