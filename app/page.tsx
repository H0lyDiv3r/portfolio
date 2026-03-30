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
  Lock,
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

  useEffect(() => {
    // Brand Icons
    const devIcons = document.createElement('link');
    devIcons.rel = 'stylesheet';
    devIcons.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    
    // Clean Sans and Mono Fonts
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap';
    
    document.head.appendChild(devIcons);
    document.head.appendChild(fonts);

    const handleScroll = (e: Event) => {
      const targetId = (e.target as HTMLElement).getAttribute('href');
      if (targetId?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navHeight = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));
    return () => links.forEach(link => link.removeEventListener('click', handleScroll));
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

  // Helper to get brand colors for project badges
  const getBadgeStyles = (tag: string) => {
    const colors: Record<string, string> = {
      'Go': 'text-[#00ADD8] border-[#00ADD8]/30 bg-[#00ADD8]/5',
      'React': 'text-[#61DAFB] border-[#61DAFB]/30 bg-[#61DAFB]/5',
      'Next.js': 'text-white border-white/30 bg-white/5',
      'Tailwind': 'text-[#06B6D4] border-[#06B6D4]/30 bg-[#06B6D4]/5',
      'Wails': 'text-[#E24E1B] border-[#E24E1B]/30 bg-[#E24E1B]/5',
      'Chakra-UI': 'text-[#319795] border-[#319795]/30 bg-[#319795]/5',
      'Wasm': 'text-[#654FF0] border-[#654FF0]/30 bg-[#654FF0]/5',
      'CLI': 'text-[#4ade80] border-[#4ade80]/30 bg-[#4ade80]/5',
    };
    return colors[tag] || 'text-zinc-400 border-zinc-800 bg-zinc-900';
  };

  const userData = {
    name: "YOHANNES HAILEMARIAM",
    role: "Full-Stack Software Engineer",
    location: "Addis Ababa, Ethiopia",
    email: "yohannes.hailemariam@gmail.com",
    github: "H0lyDiv3r",
    linkedin: "yohannes-hailemariam-093b252ab",
    telegram: "H0lyDiv3r",
    twitter: "yohannes_hm",
    stats: "GPA: 3.74",
    techStack: [
      { name: "Go", icon: "devicon-go-original-wordmark", size: "md:col-span-3 md:row-span-2", hoverColor: "group-hover:text-[#00ADD8]", iconSize: "text-7xl", glow: "from-[#00ADD8]/10" },
      { name: "React", icon: "devicon-react-original", size: "md:col-span-2 md:row-span-1", hoverColor: "group-hover:text-[#61DAFB]", iconSize: "text-5xl", glow: "from-[#61DAFB]/10" },
      { name: "Next.js", icon: "devicon-nextjs-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-white", iconSize: "text-4xl", glow: "from-white/5" },
      { name: "NestJS", icon: "devicon-nestjs-original", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#E0234E]", iconSize: "text-4xl", glow: "from-[#E0234E]/10" },
      { name: "TypeScript", icon: "devicon-typescript-plain", size: "md:col-span-2 md:row-span-1", hoverColor: "group-hover:text-[#3178C6]", iconSize: "text-5xl", glow: "from-[#3178C6]/10" },
      { name: "Python", icon: "devicon-python-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#3776AB]", iconSize: "text-4xl", glow: "from-[#3776AB]/10" },
      { name: "Angular", icon: "devicon-angular-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#DD0031]", iconSize: "text-4xl", glow: "from-[#DD0031]/10" },
      { name: "SQL", icon: "devicon-postgresql-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#336791]", iconSize: "text-4xl", glow: "from-[#336791]/10" },
      { name: "Docker", icon: "devicon-docker-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#2496ED]", iconSize: "text-4xl", glow: "from-[#2496ED]/10" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#06B6D4]", iconSize: "text-4xl", glow: "from-[#06B6D4]/10" },
      { name: "Chakra", icon: "devicon-chakraui-plain", size: "md:col-span-1 md:row-span-1", hoverColor: "group-hover:text-[#319795]", iconSize: "text-4xl", glow: "from-[#319795]/10" },
    ],
    projects: [
      {
        title: "Turtle Terminal",
        desc: "High-performance terminal emulator with custom ANSI parsing.",
        url: "https://github.com/tars-terminal/turtle",
        icon: <Terminal size={20} />,
        tags: ["React", "Chakra-UI"],
        grid: "md:col-span-3 md:row-span-1",
        type: "System Tooling",
        color: "group-hover:text-[#319795] group-hover:border-[#319795]/30"
      },
      {
        title: "Podcast App",
        desc: "Modern podcast discovery platform powered by Listen Notes API.",
        url: "https://github.com/H0lyDiv3r/podcast-app",
        icon: <Mic2 size={20} />,
        tags: ["Next.js", "Tailwind"],
        grid: "md:col-span-3 md:row-span-1",
        type: "Media",
        color: "group-hover:text-white group-hover:border-white/30"
      },
      {
        title: "Croaqui",
        desc: "Native Linux music player using Go (Wails) and React.",
        url: "https://github.com/H0lyDiv3r/croaqui",
        icon: <Music size={20} />,
        tags: ["Go", "React", "Wails"],
        grid: "md:col-span-2 md:row-span-1",
        type: "Native Desktop",
        color: "group-hover:text-[#00ADD8] group-hover:border-[#00ADD8]/30"
      },
      {
        title: "Medusa Storefront",
        desc: "Modern e-commerce frontend for Medusa headless backend.",
        url: "https://github.com/H0lyDiv3r/medusa-store-front",
        icon: <ShoppingBag size={20} />,
        tags: ["Next.js", "Tailwind"],
        grid: "md:col-span-2 md:row-span-1",
        type: "Commerce",
        color: "group-hover:text-white group-hover:border-white/30"
      },
      {
        title: "Go Fetch",
        desc: "Minimalist and high-speed API testing application built with Go.",
        url: "https://github.com/H0lyDiv3r/go-fetch",
        icon: <Globe size={20} />,
        tags: ["Go", "React", "Wails"],
        grid: "md:col-span-2 md:row-span-1",
        type: "Native Desktop",
        color: "group-hover:text-[#00ADD8] group-hover:border-[#00ADD8]/30"
      },
      {
        title: "Go-Web",
        desc: "Frontend framework developed in Go targeting WebAssembly.",
        url: "https://github.com/H0lyDiv3r/go-web",
        icon: <Layers size={20} />,
        tags: ["Go", "Wasm"],
        grid: "md:col-span-2 md:row-span-1",
        type: "Research",
        color: "group-hover:text-[#61DAFB] group-hover:border-[#61DAFB]/30"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e7eb] font-sans antialiased selection:bg-[#a4b25f]/40">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-end items-center bg-[#050505]/60 backdrop-blur-md border-b border-white/[0.05]">

        <div className="flex gap-8 items-center font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#hero" className="hover:text-white transition-colors">About</a>
          <a href="#tech" className="hover:text-white transition-colors">Stack</a>
          <a href="#experience" className="hover:text-white transition-colors">Exp</a>
          <a href="#projects" className="hover:text-white transition-colors">Proj</a>
          <a href="#contact" className="px-4 py-2 rounded-full border border-[#a4b25f]/20 bg-[#a4b25f]/5 hover:bg-[#a4b25f]/10 transition-all text-[#a4b25f]">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-48 pb-32 space-y-48">
        
        {/* 1. Hero Section (About) */}
        <section id="hero" className="scroll-mt-32 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#a4b25f]">
                <span className="h-1 w-1 rounded-full bg-[#a4b25f] animate-pulse" />
                Engineering Portfolio 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-tight">
                {userData.name}
              </h1>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl text-zinc-300 font-normal leading-relaxed max-w-xl">
                Hello! i am a full stack engineer who gets excited by hard problems and creative problem solving. <span className="text-white font-medium">LET WORK TOGETHER!</span>
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] font-medium text-zinc-300 font-mono">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#a4b25f]" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#a4b25f]" />
                  <span>{userData.email}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-[#a4b25f]/50 hover:bg-[#a4b25f]/5 transition-all text-zinc-300 hover:text-white">
                  <Github size={20} />
                </a>
                <a href={`https://linkedin.com/in/${userData.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-[#a4b25f]/50 hover:bg-[#a4b25f]/5 transition-all text-zinc-300 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href={`https://t.me/${userData.telegram}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-[#a4b25f]/50 hover:bg-[#a4b25f]/5 transition-all text-zinc-300 hover:text-white">
                  <Send size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-10 pt-4 lg:border-l lg:border-zinc-900 lg:pl-16">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">Current Role</span>
              <p className="text-lg font-medium text-white">Full-Stack @ Teleport Tech</p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">Academic Background</span>
              <p className="text-lg font-medium text-white">Mekelle Institute of Tech</p>
              <p className="text-[13px] text-zinc-400 font-mono italic">Bsc Computer Science & Engineering • {userData.stats}</p>
            </div>
          </div>
        </section>

        {/* 2. Tech Stack */}
        <section id="tech" className="scroll-mt-32 space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
             <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.5em] text-zinc-300">_Tech Stack</h2>
            <span className="hidden md:block text-[11px] font-mono text-zinc-500 uppercase tracking-widest">Stack_Analysis.v3</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[140px] gap-4">
            {userData.techStack.map((tech) => (
              <div 
                key={tech.name} 
                className={`${tech.size} group relative flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-[#0A0A0A] transition-all duration-500 hover:border-zinc-700 hover:bg-[#111] overflow-hidden shadow-2xl`}
              >
                <div className={`z-10 ${tech.iconSize} mb-4 transition-all duration-500 text-[#a4b25f]/40 ${tech.hoverColor} group-hover:scale-110`}>
                  <i className={`${tech.icon}`}></i>
                </div>
                <span className="z-10 text-[13px] font-mono font-semibold tracking-[0.25em] text-zinc-500 group-hover:text-white uppercase transition-colors">
                  {tech.name}
                </span>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              </div>
            ))}
          </div>
        </section>

        {/* 3. Experience */}
        <section id="experience" className="scroll-mt-32 space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.5em] text-zinc-300">_Career / Log</h2>
          </div>
          
          <div className="space-y-16">
            <div className="group relative">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-medium text-white tracking-tight">Teleport Technologies</h3>
                    <p className="text-sm font-mono text-[#a4b25f] uppercase tracking-widest font-semibold">Full-Stack Software Engineer</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-widest">2024 — Present</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-900">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex gap-6">
                      <span className="font-mono text-sm text-zinc-500 font-semibold">01</span>
                      <p className="text-zinc-300 text-base leading-relaxed font-normal">
                        <span className="text-white">Telebirr Management System (TMS)</span> for managing transactions and reconciliations. Built with Angular and NestJS.
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <span className="font-mono text-sm text-zinc-500 font-semibold">02</span>
                      <p className="text-zinc-300 text-base leading-relaxed font-normal">
                        <span className="text-white">IAT B2C</span> features for monetary transfer system.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 p-6 rounded-lg bg-zinc-900/20 border border-zinc-800/80 flex items-start gap-4">
                    <Lock size={18} className="text-zinc-500 mt-1" />
                    <div className="space-y-2">
                      <p className="text-[12px] font-mono uppercase tracking-widest text-zinc-300 font-semibold">Internal Projects</p>
                      <p className="text-[12px] text-zinc-400 leading-relaxed italic font-normal">
                        Private company projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects" className="scroll-mt-32 space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.5em] text-zinc-300">_Work / Selected</h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Grid_Layout.v3</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[220px] gap-4">
            {userData.projects.map((project, idx) => (
              <a 
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.grid} group relative flex flex-col p-6 rounded-xl border border-zinc-900 bg-[#080808] transition-all duration-500 overflow-hidden ${project.color}`}
              >
                <div className="flex justify-between items-start mb-auto">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#a4b25f] group-hover:text-inherit group-hover:scale-110 transition-all duration-500">
                    {project.icon}
                  </div>
                  <ArrowUpRight className="text-zinc-700 group-hover:text-inherit transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-semibold">{project.type}</span>
                    <h4 className="text-xl font-medium text-[#e5e7eb] tracking-tight group-hover:text-inherit transition-colors">{project.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">{project.desc}</p>
                  
                  <div className="flex gap-2 flex-wrap pt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[8px] font-mono px-2 py-0.5 rounded border font-semibold tracking-widest uppercase transition-all duration-500 ${getBadgeStyles(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 font-mono text-[60px] font-black text-white/[0.02] pointer-events-none select-none uppercase leading-none">
                  {project.title.split(' ')[0]}
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <a 
              href={`https://github.com/${userData.github}`}
              target="_blank"
              className="flex items-center gap-4 px-8 py-3 rounded-full border border-zinc-800 bg-[#0A0A0A] hover:bg-[#111] hover:border-[#a4b25f]/50 transition-all group"
            >
               <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-white">See More</span>
              <Github size={16} className="text-zinc-500 group-hover:text-[#a4b25f]" />
            </a>
          </div>
        </section>

        {/* 5. Contact Section */}
        <section id="contact" className="scroll-mt-32 space-y-12">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-[0.5em] text-zinc-300">_Comm / Channel</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-5xl font-medium text-white tracking-tight">LETS BUILD SOMETHING TOGETHER.</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  excited to start.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="group inline-flex items-center gap-4 p-1 rounded-full border border-zinc-800 bg-zinc-900/40 hover:border-[#a4b25f]/40 transition-all pr-6">
                <div className="h-12 w-12 rounded-full bg-[#a4b25f]/10 flex items-center justify-center text-[#a4b25f]">
                  <MessageSquare size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 font-semibold uppercase tracking-widest">Current Status</span>
                  <span className="text-sm font-medium text-white">Available for new projects</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-10 space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                   <span className="text-xs font-mono text-[#a4b25f] font-semibold tracking-[0.3em] uppercase">Primary Endpoint</span>
                   {copied && <span className="text-[10px] font-mono text-[#a4b25f] uppercase tracking-widest animate-pulse">Address Copied</span>}
                </div>
                
                <div 
                  onClick={() => copyToClipboard(userData.email)}
                  className="group cursor-pointer flex items-center justify-between gap-4 p-4 rounded-xl border border-zinc-800 hover:border-[#a4b25f]/30 hover:bg-zinc-900 transition-all"
                >
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-tighter mb-1">E-mail</span>
                    <span className="text-xl md:text-2xl font-medium text-white group-hover:text-[#a4b25f] transition-colors truncate">
                      {userData.email}
                    </span>
                  </div>
                  <div className="flex-shrink-0 p-3 rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-[#a4b25f]/10 group-hover:text-[#a4b25f] transition-all">
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href={`https://t.me/${userData.telegram}`} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 text-sky-400 transition-all font-mono text-xs font-semibold uppercase tracking-widest">
                    <Send size={18} />
                    Telegram
                  </a>
                  <a href={`https://linkedin.com/in/${userData.linkedin}`} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-[#a4b25f]/5 text-zinc-300 hover:text-white transition-all font-mono text-xs font-semibold uppercase tracking-widest">
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/50">
                <a href={`https://github.com/${userData.github}`} target="_blank" className="group flex items-center justify-between p-4 rounded-xl border border-zinc-800/50 hover:bg-zinc-800/30 transition-all">
                   <div className="flex items-center gap-3">
                     <Github size={20} className="text-zinc-500 group-hover:text-white" />
                     <span className="text-sm font-medium">checkout my github</span>
                   </div>
                   <ArrowUpRight size={16} className="text-zinc-700 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500">
          <div className="flex items-center gap-4">
             <div className="text-xs font-mono uppercase tracking-[0.4em] font-semibold">© {new Date().getFullYear()} Hailemariam</div>
             <div className="h-1 w-1 rounded-full bg-zinc-800" />
             <div className="text-xs font-mono uppercase tracking-[0.4em]">Systems Nominal</div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80 font-medium text-zinc-400">Addis Ababa, Ethiopia</div>
        </footer>

      </main>

      {/* Subtle Noise Texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay z-[100]">
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
          <filter id='noise'>
            <feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch' />
          </filter>
          <rect width='100%' height='100%' filter='url(#noise)' />
        </svg>
      </div>
    </div>
  );
};

export default App;