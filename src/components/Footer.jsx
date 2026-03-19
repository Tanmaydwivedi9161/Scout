import { NAV_LINKS, COURSES } from "../data/siteData";

export default function Footer() {
    const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <style>{`
        .footer { width:100%; background:#04080F; border-top:1px solid rgba(255,107,0,0.15); }
        .footer-topline { height:3px; background:linear-gradient(90deg,#FF6B00,#FFB800,#00C9A7); width:100%; }
        .footer-inner { max-width:1200px; margin:0 auto; padding:60px 6% 44px; display:grid; grid-template-columns:2fr 1fr 1fr 1.2fr; gap:48px; }
        .footer-logo-row { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
        .footer-logo-icon { width:42px; height:42px; border-radius:10px; background:linear-gradient(135deg,#FF6B00,#D45500); display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
        .footer-logo-main { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.95rem; color:#F4F0E8; }
        .footer-logo-sub { font-size:0.6rem; color:#FF6B00; letter-spacing:1.5px; text-transform:uppercase; }
        .footer-desc { font-family:'Poppins',sans-serif; font-size:0.82rem; color:#8A9BB5; line-height:1.7; margin-bottom:15px; font-weight:300; }
        .footer-gov { display:inline-block; background:rgba(255,184,0,0.08); border:1px solid rgba(255,184,0,0.2); border-radius:50px; padding:6px 14px; font-family:'Poppins',sans-serif; font-size:0.62rem; color:#FFB800; font-weight:600; letter-spacing:0.5px; }
        .footer-col-head { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.95rem; color:#F4F0E8; letter-spacing:1px; text-transform:uppercase; margin-bottom:18px; padding-bottom:10px; border-bottom:1px solid rgba(255,107,0,0.15); }
        .footer-links { list-style:none; display:flex; flex-direction:column; gap:10px; }
        .footer-links a { font-family:'Poppins',sans-serif; font-size:0.82rem; color:#8A9BB5; cursor:pointer; transition:color 0.2s; text-decoration:none; }
        .footer-links a:hover { color:#FF6B00; }
        .footer-contact-item { font-family:'Poppins',sans-serif; font-size:0.82rem; color:#8A9BB5; margin-bottom:10px; }
        .footer-enroll { display:inline-block; padding:10px 22px; border-radius:5px; background:#FF6B00; color:#fff; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; cursor:pointer; margin-top:14px; transition:background 0.2s; border:none; letter-spacing:0.5px; }
        .footer-enroll:hover { background:#D45500; }
        .footer-bottom { border-top:1px solid rgba(255,255,255,0.05); padding:18px 6%; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; max-width:1200px; margin:0 auto; }
        .footer-copy { font-family:'Poppins',sans-serif; font-size:0.73rem; color:#8A9BB5; }
        @media(max-width:900px) { .footer-inner { grid-template-columns:1fr 1fr; } }
        @media(max-width:580px) { .footer-inner { grid-template-columns:1fr; } }
      `}</style>
            <footer className="footer">
                <div className="footer-topline" />
                <div className="footer-inner">
                    <div>
                        <div className="footer-logo-row">
                            <div className="footer-logo-icon">🦅</div>
                            <div>
                                <div className="footer-logo-main">Bharat Scout Training Center</div>
                                <div className="footer-logo-sub">Prayagraj · NSDC Partner</div>
                            </div>
                        </div>
                        <p className="footer-desc">Empowering youth with industry-ready digital skills under the National Skill Development Corporation, Government of India.</p>
                        <span className="footer-gov">🏛️ Govt. of India · PMKVY · NSDC</span>
                    </div>
                    <div>
                        <div className="footer-col-head">Quick Links</div>
                        <ul className="footer-links">
                            {NAV_LINKS.map((l) => (
                                <li key={l.href}><a onClick={() => go(l.href)}>→ {l.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-head">Our Courses</div>
                        <ul className="footer-links">
                            {COURSES.map((c) => (
                                <li key={c.id}><a onClick={() => go("#courses")}>{c.icon} {c.title}</a></li>
                            ))}
                            <li style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.72rem", color: "#00C9A7", marginTop: "4px" }}>✅ NSDC Certified · 8 Months & 6 Months </li>
                        </ul>
                    </div>
                    <div>
                        <div className="footer-col-head">Reach Us</div>
                        <div className="footer-contact-item">📍 Prayagraj, Uttar Pradesh</div>
                        <div className="footer-contact-item">📞 +91 98765 43210</div>
                        <div className="footer-contact-item">✉️ info@bstcprayagraj.in</div>
                        <div className="footer-contact-item">🕐 Mon–Sat: 9AM – 6PM</div>
                        <button className="footer-enroll" onClick={() => go("#contact")}>Enroll Now →</button>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Bharat Scout Training Center, Prayagraj. All Rights Reserved.
                    </p>

                    <p className="footer-copy">
                        Powered by <span style={{ color: "#FF6B00" }}>NSDC</span> · Skill India Mission
                    </p>

                    <p className="footer-copy">
                        Developed & Maintained by{" "}
                        <a
                            href="https://www.indianexttech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#FF6B00", textDecoration: "none", fontWeight: "600" }}
                        >
                            IndiaNextTech
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
}