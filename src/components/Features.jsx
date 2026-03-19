import { FEATURES } from "../data/siteData";

export default function Features() {
    const go = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    return (
        <>
            <style>{`
        .features-section { width:100%; padding:100px 6%; background:#080F1E; position:relative; overflow:hidden; }
        .feat-glow { position:absolute; top:0; right:-200px; width:600px; height:600px; background:radial-gradient(circle,rgba(255,107,0,0.05) 0%,transparent 70%); border-radius:50%; pointer-events:none; }
        .feat-head { text-align:center; margin-bottom:60px; }
        .feat-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:22px; max-width:1200px; margin:0 auto 56px; }
        .feat-card { padding:30px 26px; border-radius:14px; border:1px solid rgba(255,107,0,0.1); background:#0E1E38; transition:all 0.3s; }
        .feat-card:hover { transform:translateY(-6px); border-color:rgba(255,107,0,0.38); background:linear-gradient(135deg,rgba(255,107,0,0.07),#0E1E38); box-shadow:0 16px 48px rgba(255,107,0,0.15); }
        .feat-icon { width:54px; height:54px; border-radius:13px; background:rgba(255,107,0,0.1); border:1px solid rgba(255,107,0,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:18px; font-size:24px; }
        .feat-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.15rem; color:#F4F0E8; margin-bottom:9px; letter-spacing:0.5px; }
        .feat-desc { font-family:'Poppins',sans-serif; font-size:0.84rem; color:#8A9BB5; line-height:1.65; font-weight:300; }
        .feat-cta { max-width:1200px; margin:0 auto; background:linear-gradient(135deg,rgba(255,107,0,0.1),rgba(255,184,0,0.05)); border:1px solid rgba(255,107,0,0.22); border-radius:16px; padding:34px 44px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:22px; }
        .feat-cta-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.4rem; color:#F4F0E8; margin-bottom:5px; }
        .feat-cta-sub { font-family:'Poppins',sans-serif; font-size:0.87rem; color:#8A9BB5; }
        .feat-cta-btn { display:inline-flex; align-items:center; padding:14px 32px; border-radius:6px; background:linear-gradient(135deg,#FF6B00,#D45500); color:#fff; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1rem; letter-spacing:0.5px; border:none; cursor:pointer; box-shadow:0 6px 20px rgba(255,107,0,0.4); transition:all 0.25s; }
        .feat-cta-btn:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(255,107,0,0.6); }
        .f-sec-label { font-family:'Poppins',sans-serif; font-size:0.75rem; letter-spacing:3px; text-transform:uppercase; color:#FF6B00; font-weight:600; margin-bottom:12px; }
        .f-sec-title { font-family:'Bebas Neue',cursive; font-size:clamp(2.2rem,5vw,3.8rem); letter-spacing:2px; color:#F4F0E8; line-height:1.05; }
        .f-orange { background:linear-gradient(90deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .f-divider { width:56px; height:3px; background:linear-gradient(90deg,#FF6B00,#FFB800); margin:16px auto; border-radius:2px; }
        .f-sub { font-family:'Poppins',sans-serif; font-size:0.95rem; color:#8A9BB5; max-width:520px; margin:0 auto; line-height:1.7; font-weight:300; }
      `}</style>
            <section id="features" className="features-section">
                <div className="feat-glow" />
                <div className="feat-head">
                    <p className="f-sec-label">⭐ Why Choose Us</p>
                    <h2 className="f-sec-title">EVERYTHING YOU NEED TO <span className="f-orange">SUCCEED</span></h2>
                    <div className="f-divider" />
                    <p className="f-sub">We don't just teach — we transform careers. Here's what makes Bharat Scout Training Center the best choice in Prayagraj.</p>
                </div>
                <div className="feat-grid">
                    {FEATURES.map((f, i) => (
                        <div key={i} className="feat-card">
                            <div className="feat-icon">{f.icon}</div>
                            <h3 className="feat-title">{f.title}</h3>
                            <p className="feat-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="feat-cta">
                    <div>
                        <h3 className="feat-cta-title">🎯 Limited Seats Available!</h3>
                        <p className="feat-cta-sub">New batches starting soon. Register now to secure your seat.</p>
                    </div>
                    <button className="feat-cta-btn" onClick={go}>Register Free →</button>
                </div>
            </section>
        </>
    );
}