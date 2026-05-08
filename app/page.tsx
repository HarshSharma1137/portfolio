'use client'
import { useState, useEffect, useRef } from "react";

const data = {
  name: "Harsh Sharma",
  title: "Full Stack Developer",
  subtitle: "Backend Focused",
  tagline: "Building secure, scalable backends with clean architecture",
  email: "hs8926422@gmail.com",
  linkedin: "harsh-sharma-075176362",
  github: "HarshSharma1137",
  college: "Acropolis Institute of Technology and Research, Indore",
  skills: [
    { category: "Languages", items: ["JavaScript", "C++", "Java", "Python", "SQL", "C"] },
    { category: "Frameworks", items: ["Node.js", "Express.js", "React.js", "Next.js", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
    { category: "Tools", items: ["Git", "GitHub", "Vercel", "Prisma ORM", "Neon"] },
    { category: "Concepts", items: ["REST APIs", "Web Security", "WAF", "XSS/SQLi", "DSA", "OOP"] },
  ],
  projects: [
    {
      name: "Web Defend",
      desc: "Production-grade Web Application Firewall with real-time HTTP traffic filtering and live security dashboard",
      tech: ["Node.js", "Express.js", "JavaScript"],
      github: "https://github.com/HarshSharma1137/web-defend",
      highlight: "Neutralizes 90% of XSS & SQL Injection attacks",
    },
    {
      name: "College Discovery Platform",
      desc: "Full-stack college search and comparison platform with auth, filters, and side-by-side comparison",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js"],
      github: "https://github.com/HarshSharma1137/college-discovery",
      live: "https://college-discovery-two.vercel.app",
      highlight: "Deployed on Vercel with Neon PostgreSQL",
    },
    {
      name: "Async Doc Processor",
      desc: "Scalable REST API for document upload, retrieval and async background processing without blocking",
      tech: ["FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/HarshSharma1137/async-doc-processor",
      highlight: "Async task queue architecture",
    },
  ],
  education: {
    degree: "B.Tech — Information Technology",
    college: "Acropolis Institute of Technology and Research, Indore",
    year: "Jan 2022 – Dec 2026",
  },
  certifications: [
    "NVIDIA Certified — Fundamentals of Deep Learning",
    "Certification — Web3 Verse 2.0 (Blockchain Track)",
    "Certification — Doodle for Google Competition",
  ],
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const bg = dark ? "#0a0a0a" : "#fafaf8";
  const cardBg = dark ? "#111111" : "#ffffff";
  const text = dark ? "#f0ede8" : "#1a1a1a";
  const muted = dark ? "#888880" : "#666660";
  const border = dark ? "#222220" : "#e8e5e0";
  const accent = "#f97316";
  const accentLight = "#fb923c";
  const accentDim = dark ? "#431407" : "#fff7ed";

  const navLinks = ["home", "about", "skills", "projects", "education", "contact"];

  return (
    <div style={{ background: bg, color: text, fontFamily: "'Sora', sans-serif", minHeight: "100vh", transition: "all 0.3s ease" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 2px; }
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .nav-link { position: relative; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1.5px; background: #f97316; transition: width 0.3s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .proj-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: default; }
        .proj-card:hover { transform: translateY(-6px); }
        .skill-pill { display: inline-block; padding: 5px 14px; border-radius: 100px; font-size: 12px; font-weight: 500; font-family: 'DM Mono', monospace; letter-spacing: 0.02em; transition: all 0.2s; }
        .skill-pill:hover { transform: translateY(-2px); }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; font-family: 'Sora', sans-serif; cursor: pointer; transition: all 0.2s ease; text-decoration: none; border: none; }
        .btn-primary { background: #f97316; color: white; }
        .btn-primary:hover { background: #ea6c0a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(249,115,22,0.35); }
        .btn-outline { background: transparent; border: 1.5px solid currentColor; }
        .btn-outline:hover { background: rgba(249,115,22,0.08); transform: translateY(-2px); }
        .tag { display: inline-block; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: 600; font-family: 'DM Mono', monospace; letter-spacing: 0.05em; }
        .contact-link { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-radius: 12px; text-decoration: none; transition: all 0.2s ease; font-weight: 500; }
        .contact-link:hover { transform: translateX(6px); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2);opacity:0} }
        @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { display: inline-block; width: 2px; height: 1em; background: #f97316; margin-left: 2px; animation: blink 1s infinite; vertical-align: text-bottom; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .nav-links-desktop { display: none !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 50 ? (dark ? "rgba(10,10,10,0.92)" : "rgba(250,250,248,0.92)") : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? `1px solid ${border}` : "none",
        transition: "all 0.3s ease",
        padding: "0 clamp(20px, 5vw, 80px)",
        height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-0.02em" }}>
          <span style={{ color: accent }}>H</span>arsh<span style={{ color: accent }}>.</span>
        </div>

        <div className="nav-links-desktop" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navLinks.map(link => (
            <a key={link} onClick={() => scrollTo(link)}
              className={`nav-link ${active === link ? "active" : ""}`}
              style={{ color: active === link ? accent : muted, cursor: "pointer" }}>
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button onClick={() => setDark(!dark)} style={{
            background: dark ? "#1a1a1a" : "#f0ede8",
            border: `1px solid ${border}`, borderRadius: "8px",
            padding: "8px 12px", cursor: "pointer", fontSize: "16px", transition: "all 0.2s"
          }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: text, fontSize: "20px", display: "none",
            ["@media(max-width:768px)"]: { display: "block" }
          }}>☰</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 clamp(20px, 8vw, 120px)", position: "relative", overflow: "hidden" }}>
        {/* BG decoration */}
        <div style={{
          position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px",
          background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "0%", width: "300px", height: "300px",
          background: `radial-gradient(circle, ${accent}0a 0%, transparent 70%)`,
          borderRadius: "50%", pointerEvents: "none"
        }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", paddingTop: "80px" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", background: accentDim, borderRadius: "100px", marginBottom: "24px" }}>
              <div style={{ width: "6px", height: "6px", background: accent, borderRadius: "50%", animation: "pulse-ring 2s infinite" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>Available for opportunities</span>
            </div>

            <h1 style={{ fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
              {data.name.split(" ")[0]}<br />
              <span style={{ color: accent }}>{data.name.split(" ")[1]}</span>
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 500, color: muted, fontFamily: "'DM Sans', sans-serif" }}>
                {data.title}
              </span>
              <span style={{ color: border }}>—</span>
              <span style={{ fontSize: "14px", color: accent, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{data.subtitle}</span>
            </div>

            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: muted, lineHeight: 1.7, marginBottom: "40px", maxWidth: "480px", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              {data.tagline}<span className="cursor" />
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a onClick={() => scrollTo("projects")} className="btn btn-primary" style={{ color: "white" }}>
                View Projects →
              </a>
              <a href={`mailto:${data.email}`} className="btn btn-outline" style={{ color: text, borderColor: border }}>
                Get in Touch
              </a>
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "48px" }}>
              {[
                { label: "Projects", value: "3+" },
                { label: "Technologies", value: "12+" },
                { label: "Year", value: "Final" },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: accent }}>{stat.value}</div>
                  <div style={{ fontSize: "11px", color: muted, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", animation: "float 6s ease-in-out infinite" }}>
              {/* Avatar placeholder */}
              <div style={{
                width: "280px", height: "280px", borderRadius: "50%",
                background: `linear-gradient(135deg, ${accent}40, ${accent}10)`,
                border: `2px solid ${accent}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "100px", position: "relative"
              }}>
                <span>👨‍💻</span>
                <div style={{
                  position: "absolute", inset: "-12px", borderRadius: "50%",
                  border: `1px dashed ${accent}30`, animation: "float 8s ease-in-out infinite reverse"
                }} />
              </div>

              {/* Floating tech badges */}
              {[
                { icon: "⚡", label: "Node.js", top: "0%", left: "-20%" },
                { icon: "🗄️", label: "PostgreSQL", top: "20%", right: "-25%" },
                { icon: "🔒", label: "Security", bottom: "10%", left: "-20%" },
                { icon: "🚀", label: "Vercel", bottom: "0%", right: "-20%" },
              ].map((badge, i) => (
                <div key={i} style={{
                  position: "absolute", ...badge,
                  background: cardBg, border: `1px solid ${border}`,
                  borderRadius: "10px", padding: "8px 14px",
                  display: "flex", alignItems: "center", gap: "6px",
                  fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap",
                  boxShadow: `0 4px 20px ${dark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}`,
                  animation: `float ${4 + i}s ease-in-out infinite`,
                }}>
                  <span>{badge.icon}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px" }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "11px", color: muted, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>scroll</span>
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px clamp(20px, 8vw, 120px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>01 — About</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "12px" }}>Who I Am</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div className="reveal reveal-delay-1">
              <p style={{ fontSize: "17px", color: muted, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, marginBottom: "24px" }}>
                I'm a <strong style={{ color: text, fontWeight: 600 }}>final year B.Tech IT student</strong> at Acropolis Institute of Technology and Research, Indore — passionate about building <strong style={{ color: accent, fontWeight: 600 }}>secure, production-grade backend systems</strong> that solve real problems.
              </p>
              <p style={{ fontSize: "17px", color: muted, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, marginBottom: "24px" }}>
                I specialize in <strong style={{ color: text, fontWeight: 600 }}>Node.js, PostgreSQL, and REST API design</strong>. I've built a Web Application Firewall from scratch, a full-stack college discovery platform, and an async document processing system — all deployed and production-ready.
              </p>
              <p style={{ fontSize: "17px", color: muted, lineHeight: 1.85, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                I care deeply about <strong style={{ color: text, fontWeight: 600 }}>web security, clean architecture</strong>, and writing code that scales. Currently looking for backend/full-stack opportunities where I can contribute and grow.
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "🎓", label: "Education", value: "B.Tech IT — 2022-2026" },
                { icon: "📍", label: "Location", value: "Indore, Madhya Pradesh" },
                { icon: "💼", label: "Status", value: "Final Year — Open to Work" },
                { icon: "🔥", label: "Focus", value: "Backend Development & Security" },
                { icon: "📧", label: "Email", value: data.email },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 20px", background: cardBg,
                  border: `1px solid ${border}`, borderRadius: "12px",
                  transition: "border-color 0.2s"
                }}>
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "11px", color: muted, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>{item.label}</div>
                    <div style={{ fontSize: "14px", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px clamp(20px, 8vw, 120px)", background: dark ? "#0d0d0d" : "#f5f2ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>02 — Skills</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "12px" }}>Technical Arsenal</h2>
          </div>

          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {data.skills.map((group, i) => (
              <div key={group.category} className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{ padding: "28px", background: cardBg, border: `1px solid ${border}`, borderRadius: "16px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: accent, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: "16px" }}>
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map(skill => (
                    <span key={skill} className="skill-pill" style={{
                      background: accentDim, color: dark ? accentLight : accent,
                      border: `1px solid ${dark ? "#431407" : "#fed7aa"}`
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px clamp(20px, 8vw, 120px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>03 — Projects</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "12px" }}>What I've Built</h2>
          </div>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {data.projects.map((proj, i) => (
              <div key={proj.name} className={`proj-card reveal reveal-delay-${i + 1}`}
                style={{
                  background: cardBg, border: `1px solid ${border}`,
                  borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden"
                }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, ${accent}, ${accentLight})`
                }} />

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", fontFamily: "'DM Mono', monospace", color: accent, letterSpacing: "0.1em", marginBottom: "8px" }}>
                    PROJECT 0{i + 1}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "12px" }}>{proj.name}</h3>
                  <p style={{ fontSize: "14px", color: muted, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>{proj.desc}</p>
                </div>

                <div style={{ padding: "12px 16px", background: accentDim, borderRadius: "8px", marginBottom: "20px", borderLeft: `3px solid ${accent}` }}>
                  <span style={{ fontSize: "12px", color: dark ? accentLight : accent, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>
                    ✦ {proj.highlight}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {proj.tech.map(t => (
                    <span key={t} className="tag" style={{ background: dark ? "#1a1a1a" : "#f0ede8", color: muted, border: `1px solid ${border}` }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"
                    style={{ color: text, borderColor: border, padding: "8px 18px", fontSize: "12px", flex: 1, justifyContent: "center" }}>
                    GitHub ↗
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                      style={{ padding: "8px 18px", fontSize: "12px", flex: 1, justifyContent: "center" }}>
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "100px clamp(20px, 8vw, 120px)", background: dark ? "#0d0d0d" : "#f5f2ed" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "60px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>04 — Education</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "12px" }}>Academic Background</h2>
          </div>

          <div className="reveal reveal-delay-1" style={{
            padding: "40px", background: cardBg, border: `1px solid ${border}`,
            borderRadius: "20px", position: "relative", overflow: "hidden", marginBottom: "32px"
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "4px", background: `linear-gradient(to bottom, ${accent}, ${accentLight})` }} />
            <div style={{ paddingLeft: "20px" }}>
              <div style={{ fontSize: "11px", color: accent, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", marginBottom: "8px" }}>🎓 DEGREE</div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>{data.education.degree}</h3>
              <p style={{ color: muted, fontFamily: "'DM Sans', sans-serif", marginBottom: "8px" }}>{data.education.college}</p>
              <span className="tag" style={{ background: accentDim, color: accent, border: `1px solid ${dark ? "#431407" : "#fed7aa"}` }}>{data.education.year}</span>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {data.certifications.map((cert, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "16px 20px", background: cardBg,
                  border: `1px solid ${border}`, borderRadius: "12px"
                }}>
                  <span style={{ color: accent, fontSize: "16px" }}>✦</span>
                  <span style={{ fontSize: "14px", fontFamily: "'DM Sans', sans-serif" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px clamp(20px, 8vw, 120px)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div className="reveal">
            <span style={{ fontSize: "12px", fontWeight: 600, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>05 — Contact</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-0.03em", marginTop: "12px", marginBottom: "16px", lineHeight: 1.1 }}>
              Let's Build<br /><span style={{ color: accent }}>Something Great</span>
            </h2>
            <p style={{ fontSize: "17px", color: muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, marginBottom: "48px", lineHeight: 1.7 }}>
              I'm actively looking for backend/full-stack opportunities. Whether it's a job, internship, or collaboration — I'd love to hear from you.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
            {[
              { icon: "📧", label: "Email", value: data.email, href: `mailto:${data.email}` },
              { icon: "💼", label: "LinkedIn", value: `linkedin.com/in/${data.linkedin}`, href: `https://linkedin.com/in/${data.linkedin}` },
              { icon: "🐙", label: "GitHub", value: `github.com/${data.github}`, href: `https://github.com/${data.github}` },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="contact-link"
                style={{
                  background: cardBg, border: `1px solid ${border}`,
                  color: text, borderRadius: "14px"
                }}>
                <span style={{ fontSize: "22px" }}>{item.icon}</span>
                <div style={{ textAlign: "left", flex: 1 }}>
                  <div style={{ fontSize: "11px", color: muted, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ fontSize: "14px", fontWeight: 500 }}>{item.value}</div>
                </div>
                <span style={{ color: accent }}>→</span>
              </a>
            ))}
          </div>

          <div className="reveal reveal-delay-2">
            <a href={`mailto:${data.email}`} className="btn btn-primary" style={{ fontSize: "16px", padding: "16px 40px" }}>
              Send a Message ✉️
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "32px clamp(20px, 8vw, 120px)",
        borderTop: `1px solid ${border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "16px"
      }}>
        <div style={{ fontWeight: 700, fontSize: "16px" }}>
          <span style={{ color: accent }}>H</span>arsh<span style={{ color: accent }}>.</span>
        </div>
        <p style={{ fontSize: "13px", color: muted, fontFamily: "'DM Mono', monospace" }}>
          © 2025 Harsh Sharma — Built with React
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "GitHub", href: `https://github.com/${data.github}` },
            { label: "LinkedIn", href: `https://linkedin.com/in/${data.linkedin}` },
            { label: "Email", href: `mailto:${data.email}` },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "13px", color: muted, textDecoration: "none", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = accent}
              onMouseLeave={e => e.target.style.color = muted}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
