import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .bstc-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          width: 100%; padding: 0 6%;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; transition: all 0.3s;
        }
        .bstc-nav.scrolled {
          background: rgba(8,15,30,0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,107,0,0.22);
          box-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }
        .nav-logo { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .nav-logo-icon {
          width:42px; height:42px; border-radius:10px;
          background:linear-gradient(135deg,#FF6B00,#D45500);
          display:flex; align-items:center; justify-content:center;
          font-size:20px; box-shadow:0 4px 16px rgba(255,107,0,0.45); flex-shrink:0;
        }
        .nav-logo-main { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1rem; color:#F4F0E8; }
        .nav-logo-sub { font-size:0.6rem; color:#FF6B00; letter-spacing:1.5px; text-transform:uppercase; }
        .nav-links-list { display:flex; gap:30px; list-style:none; }
        .nav-links-list a {
          font-family:'Rajdhani',sans-serif; font-weight:600; font-size:0.95rem;
          color:#8A9BB5; text-decoration:none; cursor:pointer;
          transition:color 0.2s;
        }
        .nav-links-list a:hover { color:#FF6B00; }
        .nav-enroll-btn {
          background:linear-gradient(135deg,#FF6B00,#D45500);
          color:#fff; padding:9px 22px; border-radius:4px;
          font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem;
          letter-spacing:0.5px; cursor:pointer; border:none;
          box-shadow:0 4px 16px rgba(255,107,0,0.4); transition:all 0.25s;
        }
        .nav-enroll-btn:hover { transform:translateY(-1px); box-shadow:0 8px 24px rgba(255,107,0,0.6); }
        .nav-hamburger {
          display:none; flex-direction:column; gap:5px;
          cursor:pointer; background:none; border:none; padding:4px;
        }
        .nav-bar { width:24px; height:2px; background:#F4F0E8; border-radius:2px; transition:all 0.3s; }
        .mobile-menu {
          position:fixed; top:68px; left:0; right:0; width:100%;
          background:rgba(8,15,30,0.99); backdrop-filter:blur(20px);
          border-bottom:1px solid rgba(255,107,0,0.2);
          padding:24px 6% 32px; z-index:999;
        }
        .mobile-links { list-style:none; display:flex; flex-direction:column; gap:20px; }
        .mobile-links a {
          font-family:'Rajdhani',sans-serif; font-weight:600; font-size:1.1rem;
          color:#F4F0E8; cursor:pointer;
        }
        @media(max-width:768px) {
          .nav-links-list { display:none !important; }
          .nav-enroll-btn { display:none !important; }
          .nav-hamburger { display:flex !important; }
        }
      `}</style>

      <nav className={`bstc-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => go("#home")}>
          <div className="nav-logo-icon">🦅</div>
          <div>
            <div className="nav-logo-main">Bharat Scout Training Center</div>
            <div className="nav-logo-sub">Prayagraj · NSDC Partner</div>
          </div>
        </div>

        <ul className="nav-links-list">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a onClick={(e) => { e.preventDefault(); go(l.href); }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button className="nav-enroll-btn" onClick={() => go("#contact")}>Enroll Now</button>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="nav-bar" style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span className="nav-bar" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="nav-bar" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a onClick={(e) => { e.preventDefault(); go(l.href); }}>{l.label}</a>
              </li>
            ))}
            <li>
              <button className="nav-enroll-btn" style={{ width: "100%" }} onClick={() => go("#contact")}>
                Enroll Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}