"use client";

import React, { useEffect, useState } from 'react';
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
  Mic2
} from 'lucide-react';

const App = () => {
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState('hero');

  useEffect(() => {
    const devIcons = document.createElement('link');
    devIcons.rel = 'stylesheet';
    devIcons.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(devIcons);
  }, []);

  const copyToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const brandHover: Record<string, string> = {
    'Go': 'group-hover:text-[#00ADD8]',
    'React': 'group-hover:text-[#61DAFB]',
    'Next.js': 'group-hover:text-[#1a1a1a]',
    'NestJS': 'group-hover:text-[#E0234E]',
    'TypeScript': 'group-hover:text-[#3178C6]',
    'Python': 'group-hover:text-[#3776AB]',
    'Angular': 'group-hover:text-[#DD0031]',
    'SQL': 'group-hover:text-[#336791]',
    'Docker': 'group-hover:text-[#2496ED]',
    'Tailwind': 'group-hover:text-[#06B6D4]',
    'Chakra': 'group-hover:text-[#319795]',
  };

  const bookmarks = [
    { id: 'hero', label: 'about', color: '#e07a7a', muted: '#cfb0b0' },
    { id: 'tech', label: 'tech', color: '#8fa84a', muted: '#aab08a' },
    { id: 'experience', label: 'work', color: '#5a8db5', muted: '#8dabb8' },
    { id: 'projects', label: 'projects', color: '#c9a03a', muted: '#b8b08a' },
    { id: 'contact', label: 'hmu', color: '#a070c0', muted: '#b0a0b8' },
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
      { name: "Go", icon: "devicon-go-original-wordmark", size: "md:col-span-3 md:row-span-2", iconSize: "text-7xl" },
      { name: "React", icon: "devicon-react-original", size: "md:col-span-2 md:row-span-1", iconSize: "text-5xl" },
      { name: "Next.js", icon: "devicon-nextjs-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "NestJS", icon: "devicon-nestjs-original", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "TypeScript", icon: "devicon-typescript-plain", size: "md:col-span-2 md:row-span-1", iconSize: "text-5xl" },
      { name: "Python", icon: "devicon-python-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "Angular", icon: "devicon-angular-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "SQL", icon: "devicon-postgresql-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "Docker", icon: "devicon-docker-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
      { name: "Chakra", icon: "devicon-chakraui-plain", size: "md:col-span-1 md:row-span-1", iconSize: "text-4xl" },
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
        title: "Podcast App",
        desc: "Podcast browser. Next.js. Listen Notes API. Actually helps you find stuff worth listening to.",
        url: "https://github.com/H0lyDiv3r/podcast-app",
        icon: <Mic2 size={18} />,
        tags: ["Next.js", "Tailwind"],
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
        title: "Go Fetch",
        desc: "Desktop API client in Go. Like Postman. Without the 400MB install.",
        url: "https://github.com/H0lyDiv3r/go-fetch",
        icon: <Globe size={18} />,
        tags: ["Go", "React", "Wails"],
        grid: "md:col-span-2 md:row-span-1",
      },
      {
        title: "Go-Web",
        desc: "Frontend framework in Go that compiles to Wasm. Asking 'what if' until something breaks.",
        url: "https://github.com/H0lyDiv3r/go-web",
        icon: <Layers size={18} />,
        tags: ["Go", "Wasm"],
        grid: "md:col-span-2 md:row-span-1",
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-16 px-6 font-sans antialiased flex justify-center">
      
      <div className="w-full max-w-4xl notebook-page">
        
        {/* Bookmark tabs */}
        <div 
          className="absolute flex flex-col gap-1.5 z-10"
          style={{ left: '100%', top: '50%', transform: 'translateY(-50%)' }}
        >
          {bookmarks.map((bm) => (
            <div
              key={bm.id}
              className={`bookmark-tab ${page === bm.id ? 'active' : ''}`}
              style={{ backgroundColor: page === bm.id ? bm.color : bm.muted }}
              onClick={() => setPage(bm.id)}
            >
              {bm.label}
            </div>
          ))}
        </div>

        {/* Page content */}
        <div className="px-10 md:px-16" style={{ color: 'var(--ink)' }}>
          
          {/* Header */}
          <div className="h-16 flex items-end justify-between pb-1 border-b" style={{ borderColor: 'var(--line)' }}>
            <span className="text-sm font-hand" style={{ color: 'var(--ink-muted)' }}>Yohannes Hailemariam&apos;s Resume</span>
            <span className="text-sm font-hand" style={{ color: 'var(--ink-muted)' }}>
              {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} GC
            </span>
          </div>

          <div className="pt-10 pb-4">
          
          {page === 'hero' && (
            <section className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-hand font-bold tracking-tight leading-tight" style={{ color: 'var(--ink)' }}>
                {userData.name}
              </h1>
              
              <div className="space-y-6 max-w-2xl">
                <p className="text-lg md:text-xl font-hand leading-relaxed" style={{ color: 'var(--ink)' }}>
                  i write go, build terminal emulators, and occasionally break my own stuff. currently shipping fintech at teleport technologies from addis ababa.
                </p>
                
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-base font-hand" style={{ color: 'var(--ink-muted)' }}>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} style={{ color: 'var(--accent)' }} />
                    <span>{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} style={{ color: 'var(--accent)' }} />
                    <span>{userData.email}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded transition-colors hover:bg-[#d9d4c8]"
                    style={{ border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                  >
                    <Github size={18} />
                  </a>
                  <a href={`https://linkedin.com/in/${userData.linkedin}`} target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded transition-colors hover:bg-[#d9d4c8]"
                    style={{ border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a href={`https://t.me/${userData.telegram}`} target="_blank" rel="noopener noreferrer" 
                    className="p-3 rounded transition-colors hover:bg-[#d9d4c8]"
                    style={{ border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                  >
                    <Send size={18} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-4 pt-6 border-t" style={{ borderColor: 'var(--line)' }}>
                <div>
                  <p className="text-base font-hand font-semibold" style={{ color: 'var(--ink)' }}>Full-Stack @ Teleport Tech</p>
                </div>
                <div>
                  <p className="text-base font-hand font-semibold" style={{ color: 'var(--ink)' }}>Mekelle Institute of Tech</p>
                  <p className="text-sm font-hand" style={{ color: 'var(--ink-muted)' }}>Bsc Computer Science & Engineering — {userData.stats}</p>
                </div>
              </div>
            </section>
          )}

          {page === 'tech' && (
            <section className="space-y-8">
              <h2 className="text-2xl font-hand font-bold" style={{ color: 'var(--ink)' }}>stuff i use</h2>

              <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[110px] gap-3">
                {userData.techStack.map((tech) => (
                  <div 
                    key={tech.name} 
                    className={`${tech.size} group relative flex flex-col items-center justify-center rounded transition-colors overflow-hidden cursor-default`}
                    style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    <div className={`z-10 ${tech.iconSize} mb-2 transition-colors text-zinc-400 ${brandHover[tech.name]}`}>
                      <i className={`${tech.icon}`}></i>
                    </div>
                    <span className="z-10 text-xs font-hand transition-colors text-zinc-400 group-hover:text-zinc-600">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {page === 'experience' && (
            <section className="space-y-8">
              <h2 className="text-2xl font-hand font-bold" style={{ color: 'var(--ink)' }}>work</h2>
              
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-hand font-bold" style={{ color: 'var(--ink)' }}>Teleport Technologies</h3>
                      <p className="text-sm font-hand" style={{ color: 'var(--accent)' }}>Full-Stack Software Engineer</p>
                    </div>
                    <span className="text-xs font-hand" style={{ color: 'var(--ink-muted)' }}>2024 — Present</span>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 pt-6 border-t" style={{ borderColor: 'var(--line)' }}>
                    <div className="lg:col-span-7 space-y-5 font-hand text-base" style={{ color: 'var(--ink)' }}>
                      <p>
                        <span className="font-bold">Telebirr Management System</span> — reconciling millions of Birr in daily mobile money. Angular + NestJS.
                      </p>
                      <p>
                        <span className="font-bold">IAT B2C</span> — features for the Telebirr monetary transfer system. Because money needs to move.
                      </p>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9 p-5 rounded" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                      <p className="text-sm font-hand leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                        More internal fintech tooling — money transfer, agent management, payment orchestration. NDA&apos;d but it serves millions of users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {page === 'projects' && (
            <section className="space-y-8">
              <h2 className="text-2xl font-hand font-bold" style={{ color: 'var(--ink)' }}>projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[200px] gap-3">
                {userData.projects.map((project, idx) => (
                  <a 
                    key={idx}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.grid} group relative flex flex-col p-5 rounded transition-colors overflow-hidden`}
                    style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  >
                    <div className="flex justify-between items-start mb-auto">
                      <div className="p-2 rounded" style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--card-border)' }}>
                        <span className="text-zinc-500 group-hover:text-[#7a7730] transition-colors">{project.icon}</span>
                      </div>
                      <ArrowUpRight className="text-zinc-500 group-hover:text-[#7a7730] transition-colors" size={18} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-hand font-semibold" style={{ color: 'var(--ink)' }}>{project.title}</h4>
                      <p className="text-sm font-hand leading-relaxed max-w-xs" style={{ color: 'var(--ink-muted)' }}>{project.desc}</p>
                      
                      <div className="flex gap-3 flex-wrap pt-1">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-hand" style={{ color: 'var(--ink-muted)' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex justify-center pt-2">
                <a 
                  href={`https://github.com/${userData.github}`}
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-2.5 rounded transition-colors font-hand text-sm hover:bg-[#d9d4c8]"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                >
                  more on github
                  <Github size={16} style={{ color: 'var(--accent)' }} />
                </a>
              </div>
            </section>
          )}

          {page === 'contact' && (
            <section className="space-y-8">
              <h2 className="text-2xl font-hand font-bold" style={{ color: 'var(--ink)' }}>hmu</h2>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-hand font-bold" style={{ color: 'var(--ink)' }}>let&apos;s build something.</h3>
                    <p className="text-lg font-hand" style={{ color: 'var(--ink-muted)' }}>got an idea? let&apos;s talk.</p>
                  </div>

                  <div className="inline-flex items-center gap-3 py-3 px-4 rounded" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <div className="p-2 rounded" style={{ backgroundColor: 'rgba(122,119,48,0.1)' }}>
                      <MessageSquare size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <span className="text-sm font-hand" style={{ color: 'var(--ink-muted)' }}>available for new projects</span>
                  </div>
                </div>

                <div className="space-y-6 p-8 rounded" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <div 
                    onClick={() => copyToClipboard(userData.email)}
                    className="group cursor-pointer flex items-center justify-between gap-4 p-4 rounded transition-colors hover:bg-[#d9d4c8]"
                    style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--card-border)' }}
                  >
                    <span className="text-lg font-hand truncate group-hover:text-[#7a7730] transition-colors" style={{ color: 'var(--ink)' }}>
                      {userData.email}
                    </span>
                    <div className="flex-shrink-0 p-2.5 rounded" style={{ backgroundColor: 'var(--card-bg)' }}>
                      {copied ? <Check size={16} style={{ color: 'var(--accent)' }} /> : <Copy size={16} style={{ color: 'var(--ink-muted)' }} />}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a href={`https://t.me/${userData.telegram}`} target="_blank" 
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded transition-colors text-sm font-hand hover:bg-[#d9d4c8]"
                      style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                    >
                      <Send size={16} />
                      Telegram
                    </a>
                    <a href={`https://linkedin.com/in/${userData.linkedin}`} target="_blank" 
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded transition-colors text-sm font-hand hover:bg-[#d9d4c8]"
                      style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--card-border)', color: 'var(--ink)' }}
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>

                  <div className="pt-4 border-t" style={{ borderColor: 'var(--line)' }}>
                    <a href={`https://github.com/${userData.github}`} target="_blank" 
                      className="flex items-center justify-between p-4 rounded transition-colors hover:bg-[#d9d4c8]"
                      style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--card-border)' }}
                    >
                      <div className="flex items-center gap-3 text-sm font-hand" style={{ color: 'var(--ink)' }}>
                        <Github size={18} />
                        check my github
                      </div>
                      <ArrowUpRight size={16} style={{ color: 'var(--ink-muted)' }} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          </div>

          <div className="pt-8 mt-8 border-t pb-12 font-hand text-sm" style={{ borderColor: 'var(--line)', color: 'var(--ink-muted)' }}>
            <div>{userData.email} — {userData.location}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;