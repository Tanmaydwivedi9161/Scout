import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/siteData";

export default function Hero() {
  const canvasRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { icon: "💻", label: "FullStack Development", color: "#FF6B00" },
    { icon: "🎨", label: "Frontend Development", color: "#FFB800" },
    { icon: "🎬", label: "2D Animation", color: "#00C9A7" },
    { icon: "⚙️", label: "Backend Development", color: "#A78BFA" },
    { icon: "☁️", label: "Deployment", color: "#38BDF8" },
    { icon: "🎭", label: "3D Animation & Mocap", color: "#F472B6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((p) => (p + 1) % skills.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.45 + 0.1,
      color: Math.random() > 0.5 ? "#FF6B00" : "#FFB800",
    }));
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.opacity; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.y < 0) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        .hero-section {
          width: 100%; min-height: 100vh;
          display: flex; align-items: center;
          padding: 110px 6% 80px; position: relative; overflow: hidden;
          background: linear-gradient(160deg, #08101F 0%, #0A1628 60%, #05080F 100%);
        }
        .hero-canvas { position:absolute; inset:0; pointer-events:none; width:100%; height:100%; }
        .hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-orb1 { position:absolute; width:500px; height:500px; top:-120px; right:-100px; border-radius:50%; background:rgba(255,107,0,0.11); filter:blur(90px); pointer-events:none; }
        .hero-orb2 { position:absolute; width:380px; height:380px; bottom:-80px; left:-80px; border-radius:50%; background:rgba(0,201,167,0.07); filter:blur(90px); pointer-events:none; }

        .hero-inner {
          width: 100%; display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
          position: relative; z-index: 2;
        }

        /* ── LEFT ── */
        .hero-badge {
          display:inline-flex; align-items:center; gap:9px;
          background:rgba(255,184,0,0.1); border:1px solid rgba(255,184,0,0.3);
          border-radius:50px; padding:7px 18px; margin-bottom:28px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .hero-badge-dot { width:8px; height:8px; border-radius:50%; background:#FFB800; box-shadow:0 0 8px #FFB800; animation:pulse 1.5s infinite; }
        .hero-badge-text { font-family:'Poppins',sans-serif; font-size:0.72rem; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:#FFB800; }
        .hero-h1 {
          font-family:'Bebas Neue',cursive;
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          line-height:1; letter-spacing:2px; color:#F4F0E8;
          animation: fadeUp 0.7s 0.2s ease both;
        }
        .hero-h1-orange { background:linear-gradient(90deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .hero-sub { font-family:'Poppins',sans-serif; font-size:0.98rem; color:#8A9BB5; margin-top:20px; line-height:1.75; font-weight:300; animation: fadeUp 0.7s 0.3s ease both; }
        .hero-ctas { display:flex; gap:14px; flex-wrap:wrap; margin-top:32px; animation: fadeUp 0.7s 0.4s ease both; }
        .hero-btn-primary {
          display:inline-flex; align-items:center; gap:8px; padding:14px 28px; border-radius:4px;
          background:linear-gradient(135deg,#FF6B00,#D45500); color:#fff;
          font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1rem; letter-spacing:0.5px;
          cursor:pointer; border:none; box-shadow:0 6px 24px rgba(255,107,0,0.4); transition:all 0.25s;
        }
        .hero-btn-primary:hover { transform:translateY(-3px); box-shadow:0 12px 36px rgba(255,107,0,0.6); }
        .hero-btn-outline {
          display:inline-flex; align-items:center; gap:8px; padding:13px 26px; border-radius:4px;
          background:transparent; border:1.5px solid rgba(255,255,255,0.25); color:#F4F0E8;
          font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1rem; letter-spacing:0.5px;
          cursor:pointer; transition:all 0.25s;
        }
        .hero-btn-outline:hover { border-color:#FF6B00; color:#FF6B00; transform:translateY(-3px); }
        .hero-stats {
          display:flex; gap:28px; flex-wrap:wrap; margin-top:44px;
          padding-top:32px; border-top:1px solid rgba(255,255,255,0.07);
          animation: fadeUp 0.7s 0.5s ease both;
        }
        .stat-val { font-family:'Bebas Neue',cursive; font-size:2rem; letter-spacing:1px; background:linear-gradient(135deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .stat-lbl { font-size:0.65rem; color:#8A9BB5; text-transform:uppercase; letter-spacing:1px; font-weight:500; }

        /* ── RIGHT VISUAL ── */
        .hero-right {
          display: flex; flex-direction: column; gap: 18px;
          animation: fadeUp 0.9s 0.4s ease both;
        }

        /* Central glowing orb card */
        .hero-orb-card {
          position: relative;
          background: rgba(14,30,56,0.8);
          border: 1px solid rgba(255,107,0,0.2);
          border-radius: 20px;
          padding: 36px 28px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 16px;
          overflow: hidden;
        }
        .orb-card-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .orb-main {
          width: 110px; height: 110px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,107,0,0.2), rgba(255,184,0,0.1));
          border: 2px solid rgba(255,107,0,0.35);
          display: flex; align-items: center; justify-content: center;
          position: relative; flex-shrink: 0;
        }
        .orb-main-inner {
          width: 76px; height: 76px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B00, #D45500);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          box-shadow: 0 0 30px rgba(255,107,0,0.6);
        }
        .orb-ring1 { position:absolute; inset:-14px; border-radius:50%; border:1px dashed rgba(255,107,0,0.25); animation: spinR 8s linear infinite; }
        .orb-ring2 { position:absolute; inset:-28px; border-radius:50%; border:1px dashed rgba(255,184,0,0.15); animation: spinL 12s linear infinite; }
        .orb-title {
          font-family:'Bebas Neue',cursive; font-size:1.5rem; letter-spacing:1.5px;
          color:#F4F0E8; position:relative; z-index:1;
        }
        .orb-subtitle {
          font-family:'Poppins',sans-serif; font-size:0.78rem; color:#8A9BB5;
          line-height:1.6; position:relative; z-index:1; max-width:280px;
        }

        /* Skill pills cycling */
        .skills-row {
          display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
          position: relative; z-index:1;
        }
        .skill-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 50px;
          font-family:'Poppins',sans-serif; font-size:0.75rem; font-weight:500;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #C8D6E5;
          transition: all 0.4s ease;
        }
        .skill-pill.active {
          background: rgba(255,107,0,0.15);
          border-color: rgba(255,107,0,0.45);
          color: #FF6B00;
          transform: scale(1.08);
          box-shadow: 0 0 16px rgba(255,107,0,0.25);
        }
        .skill-pill-icon { font-size: 14px; }

        /* Three bottom cards */
        .hero-bottom-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .hbc {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 16px 14px;
          text-align: center; transition: all 0.3s;
        }
        .hbc:hover { border-color: rgba(255,107,0,0.3); background: rgba(255,107,0,0.06); transform: translateY(-3px); }
        .hbc-icon { font-size: 22px; margin-bottom: 8px; }
        .hbc-val { font-family:'Bebas Neue',cursive; font-size:1.6rem; letter-spacing:1px; background:linear-gradient(135deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .hbc-lbl { font-family:'Poppins',sans-serif; font-size:0.62rem; color:#8A9BB5; text-transform:uppercase; letter-spacing:0.8px; margin-top:2px; }

        /* NSDC strip */
        .hero-nsdc {
          display: flex; align-items: center; gap: 12px;
          background: linear-gradient(135deg, rgba(255,184,0,0.08), rgba(255,107,0,0.05));
          border: 1px solid rgba(255,184,0,0.22); border-radius: 12px; padding: 13px 18px;
        }
        .hn-icon { font-size: 24px; flex-shrink: 0; }
        .hn-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.92rem; color:#F4F0E8; }
        .hn-sub { font-family:'Poppins',sans-serif; font-size:0.64rem; color:#FFB800; margin-top:2px; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes spinR { to { transform:rotate(360deg); } }
        @keyframes spinL { to { transform:rotate(-360deg); } }

        @media(max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-right { display: none; }
        }
      `}</style>

      <section id="home" className="hero-section">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-grid" />
        <div className="hero-orb1" />
        <div className="hero-orb2" />

        <div className="hero-inner">

          {/* ── LEFT ── */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">NSDC Certified Training Center · Prayagraj</span>
            </div>
            <h1 className="hero-h1">
              BUILD YOUR<br />
              <span className="hero-h1-orange">FUTURE</span> WITH<br />
              SKILL INDIA
            </h1>
            <p className="hero-sub">
              Join Bharat Scout Training Center — Prayagraj's premier NSDC partner offering
              industry-ready courses in{" "}
              <strong style={{ color: "#FF6B00" }}>Full Stack Development</strong> &{" "}
              <strong style={{ color: "#00C9A7" }}>Animation & VFX</strong>.
              Free certification. Real jobs.
            </p>
            <div className="hero-ctas">
              <button className="hero-btn-primary" onClick={() => go("#courses")}>🚀 Explore Courses</button>
              <button className="hero-btn-outline" onClick={() => go("#contact")}>📞 Free Counseling</button>
            </div>
            {/* <div className="hero-stats">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-right">

            {/* NSDC strip */}
            <div className="hero-nsdc">
              <span className="hn-icon">🏛️</span>
              <div>
                <div className="hn-title">NSDC Authorized Training Partner</div>
                {/* <div className="hn-sub">Pradhan Mantri Kaushal Vikas Yojana · Skill India</div> */}
              </div>
            </div>

            {/* Central orb card */}
            <div className="hero-orb-card">
              <div className="orb-card-glow" />
              <div className="orb-main">
                <div className="orb-main-inner">🦅</div>
                <div className="orb-ring1" />
                <div className="orb-ring2" />
              </div>
              <div className="orb-title">YOUR CAREER STARTS HERE</div>
              <p className="orb-subtitle">
                Industry-certified skills that employers demand.
                Learn from experts. Get placed. Build your future.
              </p>
              <div className="skills-row">
                {skills.map((sk, i) => (
                  <span key={i} className={`skill-pill${activeSkill === i ? " active" : ""}`}>
                    <span className="skill-pill-icon">{sk.icon}</span>
                    {sk.label}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 bottom stat cards */}
            <div className="hero-bottom-cards">
              <div className="hbc">
                <div className="hbc-icon">🎓</div>
                <div className="hbc-val">80+</div>
                <div className="hbc-lbl">Students</div>
              </div>
              <div className="hbc">
                <div className="hbc-icon">🏆</div>
                <div className="hbc-val">90%</div>
                <div className="hbc-lbl">Placed</div>
              </div>
              <div className="hbc">
                <div className="hbc-icon">🤝</div>
                <div className="hbc-val">100+</div>
                <div className="hbc-lbl">Partners</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}