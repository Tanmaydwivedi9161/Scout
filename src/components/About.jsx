export default function About() {
    const points = [
        { icon: "🏆", text: "Established under Bharat Scouts & Guides — a 100-year legacy of nation-building." },
        { icon: "🤝", text: "Official NSDC Training Partner providing government-recognized certifications." },
        { icon: "🌍", text: "Empowering youth of Prayagraj & surrounding districts with digital skills." },
        { icon: "📊", text: "Aligned with PM Kaushal Vikas Yojana (PMKVY) for subsidized training." },
    ];
    return (
        <>
            <style>{`
        .about-section { width:100%; padding:100px 6%; background:#060C18; position:relative; overflow:hidden; }
        .about-glow { position:absolute; bottom:0; left:-100px; width:500px; height:500px; background:radial-gradient(circle,rgba(0,201,167,0.06) 0%,transparent 70%); border-radius:50%; pointer-events:none; }
        .about-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1.4fr; gap:80px; align-items:center; }
        .about-visual-wrap { display:flex; justify-content:center; }
        .about-circle {
          width:280px; height:280px; border-radius:50%;
          background:radial-gradient(circle at 40% 40%,#0D1F3C,#060C18);
          border:2px solid rgba(255,107,0,0.2);
          display:flex; align-items:center; justify-content:center;
          position:relative; box-shadow:0 0 80px rgba(255,107,0,0.12);
        }
        .about-emoji { font-size:88px; }
        .ab1 { position:absolute; top:16px; right:-22px; background:linear-gradient(135deg,#FF6B00,#D45500); color:#fff; padding:6px 13px; border-radius:50px; font-family:'Poppins',sans-serif; font-size:0.68rem; font-weight:600; letter-spacing:1px; }
        .ab2 { position:absolute; bottom:24px; left:-28px; background:rgba(0,201,167,0.15); border:1px solid rgba(0,201,167,0.4); color:#00C9A7; padding:6px 13px; border-radius:50px; font-family:'Poppins',sans-serif; font-size:0.68rem; font-weight:600; }
        .about-ring1 { position:absolute; inset:-22px; border:1px dashed rgba(255,107,0,0.15); border-radius:50%; animation:spinR 20s linear infinite; }
        .about-ring2 { position:absolute; inset:-42px; border:1px dashed rgba(0,201,167,0.1); border-radius:50%; animation:spinL 30s linear infinite; }
        @keyframes spinR { to { transform:rotate(360deg); } }
        @keyframes spinL { to { transform:rotate(-360deg); } }
        .ab-label { font-family:'Poppins',sans-serif; font-size:0.75rem; letter-spacing:3px; text-transform:uppercase; color:#FF6B00; font-weight:600; margin-bottom:12px; }
        .ab-title { font-family:'Bebas Neue',cursive; font-size:clamp(2rem,4vw,3.2rem); letter-spacing:2px; color:#F4F0E8; line-height:1.05; }
        .ab-orange { background:linear-gradient(90deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .ab-divider { width:50px; height:3px; background:linear-gradient(90deg,#FF6B00,#FFB800); margin:18px 0; border-radius:2px; }
        .ab-para { font-family:'Poppins',sans-serif; font-size:0.92rem; color:#8A9BB5; line-height:1.75; margin-bottom:26px; font-weight:300; }
        .ab-points { display:flex; flex-direction:column; gap:12px; margin-bottom:32px; }
        .ab-point { display:flex; align-items:flex-start; gap:12px; background:rgba(255,107,0,0.04); border:1px solid rgba(255,107,0,0.1); border-radius:8px; padding:12px 15px; }
        .ab-pt-icon { font-size:17px; flex-shrink:0; margin-top:1px; }
        .ab-pt-text { font-family:'Poppins',sans-serif; font-size:0.84rem; color:#C8D6E5; line-height:1.5; }
        .ab-cards { display:flex; gap:14px; }
        .ab-card { flex:1; padding:16px; border-radius:10px; background:rgba(255,107,0,0.06); border:1px solid rgba(255,107,0,0.15); text-align:center; }
        .ab-card-val { font-family:'Bebas Neue',cursive; font-size:1.9rem; letter-spacing:1px; color:#FF6B00; }
        .ab-card-lbl { font-family:'Poppins',sans-serif; font-size:0.62rem; color:#8A9BB5; text-transform:uppercase; letter-spacing:1px; }
        @media(max-width:768px) { .about-inner { grid-template-columns:1fr; gap:48px; } .about-visual-wrap { display:none; } }
      `}</style>
            <section id="about" className="about-section">
                <div className="about-glow" />
                <div className="about-inner">
                    <div className="about-visual-wrap">
                        <div className="about-circle">
                            <span className="about-emoji">🦅</span>
                            <span className="ab1">Est. Prayagraj</span>
                            <span className="ab2">NSDC Partner</span>
                            <div className="about-ring1" />
                            <div className="about-ring2" />
                        </div>
                    </div>
                    <div>
                        <p className="ab-label">🏛️ About Us</p>
                        <h2 className="ab-title">SHAPING INDIA'S<br /><span className="ab-orange">DIGITAL WORKFORCE</span></h2>
                        <div className="ab-divider" />
                        <p className="ab-para"><strong>Bharat Scout Training Center, Prayagraj</strong> is a government-recognized skill development center under the prestigious Bharat Scouts & Guides organization. We bridge the digital skills gap in Uttar Pradesh with world-class training at subsidized rates for every student.</p>
                        <div className="ab-points">
                            {points.map((p, i) => (
                                <div key={i} className="ab-point">
                                    <span className="ab-pt-icon">{p.icon}</span>
                                    <span className="ab-pt-text">{p.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="ab-cards">
                            {[["2", "Active Courses"], ["NSDC", "Scheme Covered"], ["100%", "Govt. Certified"]].map(([v, l], i) => (
                                <div key={i} className="ab-card">
                                    <div className="ab-card-val">{v}</div>
                                    <div className="ab-card-lbl">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}