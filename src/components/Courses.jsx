import { COURSES } from "../data/siteData";

function CourseCard({ course }) {
    const go = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    return (
        <div className="course-card" style={{ "--c": course.color, "--g": course.glow }}>
            <div className="course-card-topline" style={{ background: `linear-gradient(90deg,${course.color},transparent)` }} />
            <div className="course-card-header">
                <div className="course-icon-wrap" style={{ background: `${course.color}18`, border: `1px solid ${course.color}40` }}>
                    <span style={{ fontSize: "24px" }}>{course.icon}</span>
                </div>
                <div>
                    <span className="course-badge" style={{ background: `${course.color}18`, color: course.color, borderColor: `${course.color}45` }}>
                        {course.badge}
                    </span>
                    <div style={{ fontSize: "0.62rem", color: "#00C9A7", marginTop: "5px", fontWeight: 500 }}>NSDC Certified ✓</div>
                </div>
            </div>
            <h3 className="course-title" style={{ color: course.color }}>{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-meta-row">
                {["⏱ " + course.duration, "🎓 " + course.certification, "💰 " + course.fee].map((m, i) => (
                    <span key={i} className="course-meta-pill">{m}</span>
                ))}
            </div>
            <div className="course-highlights">
                <p className="hl-label">What You'll Learn</p>
                <ul className="hl-list">
                    {course.highlights.map((h, i) => (
                        <li key={i} className="hl-item">
                            <span className="hl-dot" style={{ background: course.color }} />
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="course-footer">
                <div><span className="cf-label">Eligibility</span><span className="cf-val">{course.eligibility}</span></div>
                <div><span className="cf-label">Batch Size</span><span className="cf-val">{course.seats}</span></div>
            </div>
            <button className="course-apply-btn" style={{ background: `linear-gradient(135deg,${course.color},${course.color}BB)` }} onClick={go}>
                Apply for This Course →
            </button>
        </div>
    );
}

export default function Courses() {
    return (
        <>
            <style>{`
        .courses-section {
          width:100%; padding:100px 6%;
          background:linear-gradient(180deg,#060C18 0%,#07091400 100%);
          position:relative; overflow:hidden;
        }
        .courses-head { text-align:center; margin-bottom:60px; }
        .sec-label { font-family:'Poppins',sans-serif; font-size:0.75rem; letter-spacing:3px; text-transform:uppercase; color:#FF6B00; font-weight:600; margin-bottom:12px; }
        .sec-title { font-family:'Bebas Neue',cursive; font-size:clamp(2.4rem,5vw,4rem); letter-spacing:2px; color:#F4F0E8; }
        .orange { background:linear-gradient(90deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .sec-divider { width:56px; height:3px; background:linear-gradient(90deg,#FF6B00,#FFB800); margin:16px auto; border-radius:2px; }
        .sec-sub { font-family:'Poppins',sans-serif; font-size:0.95rem; color:#8A9BB5; max-width:540px; margin:0 auto; line-height:1.7; font-weight:300; }
        .nsdc-strip {
          display:inline-flex; flex-wrap:wrap; align-items:center; gap:12px;
          background:rgba(255,184,0,0.08); border:1px solid rgba(255,184,0,0.25);
          border-radius:50px; padding:9px 22px; margin-top:22px;
          font-family:'Poppins',sans-serif; font-size:0.68rem; font-weight:600; color:#FFB800; letter-spacing:0.5px;
        }
        .nsdc-pipe { color:rgba(255,184,0,0.3); }
        .courses-grid {
          display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
          gap:32px; max-width:1200px; margin:0 auto;
        }
        .course-card {
          background:#0E1E38; border:1px solid rgba(255,107,0,0.12);
          border-radius:16px; padding:32px; position:relative; overflow:hidden;
          display:flex; flex-direction:column;
          transition:all 0.3s ease;
        }
        .course-card:hover { transform:translateY(-8px); box-shadow:0 20px 60px rgba(255,107,0,0.15); border-color:rgba(255,107,0,0.3); }
        .course-card-topline { position:absolute; top:0; left:0; right:0; height:3px; }
        .course-card-header { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:20px; }
        .course-icon-wrap { width:56px; height:56px; border-radius:12px; display:flex; align-items:center; justify-content:center; }
        .course-badge { display:inline-block; padding:4px 12px; border-radius:50px; font-size:0.65rem; font-weight:600; letter-spacing:1px; text-transform:uppercase; border:1px solid; font-family:'Poppins',sans-serif; }
        .course-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.7rem; letter-spacing:0.5px; margin-bottom:10px; }
        .course-desc { font-family:'Poppins',sans-serif; font-size:0.87rem; color:#8A9BB5; line-height:1.65; margin-bottom:18px; }
        .course-meta-row { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px; }
        .course-meta-pill { font-size:0.7rem; font-weight:500; color:#C8D6E5; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); padding:5px 12px; border-radius:50px; font-family:'Poppins',sans-serif; }
        .course-highlights { background:rgba(0,0,0,0.25); border-radius:10px; padding:18px; margin-bottom:22px; }
        .hl-label { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.8rem; letter-spacing:1px; text-transform:uppercase; color:#8A9BB5; margin-bottom:12px; }
        .hl-list { list-style:none; display:flex; flex-direction:column; gap:8px; }
        .hl-item { font-family:'Poppins',sans-serif; font-size:0.84rem; color:#C8D6E5; display:flex; align-items:center; gap:10px; }
        .hl-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .course-footer { display:flex; gap:24px; padding:18px 0; border-top:1px solid rgba(255,255,255,0.06); margin-bottom:20px; }
        .cf-label { display:block; font-size:0.62rem; color:#8A9BB5; text-transform:uppercase; letter-spacing:1px; font-weight:500; margin-bottom:3px; font-family:'Poppins',sans-serif; }
        .cf-val { font-size:0.82rem; color:#F4F0E8; font-weight:500; font-family:'Poppins',sans-serif; }
        .course-apply-btn { display:block; width:100%; text-align:center; padding:14px; border-radius:8px; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1rem; letter-spacing:0.5px; color:#fff; border:none; cursor:pointer; margin-top:auto; transition:opacity 0.2s; }
        .course-apply-btn:hover { opacity:0.85; }
      `}</style>

            <section id="courses" className="courses-section">
                <div className="courses-head">
                    <p className="sec-label">📚 Our Programs</p>
                    <h2 className="sec-title">NSDC <span className="orange">Certified</span> Courses</h2>
                    <div className="sec-divider" />
                    <p className="sec-sub">Two industry-aligned courses designed to make you job-ready. Fully subsidized under PMKVY scheme.</p>
                    <div className="nsdc-strip">
                        <span>🏛️ Authorized Training Partner</span>
                        <span className="nsdc-pipe">|</span>
                        <span>National Skill Development Corporation</span>
                        <span className="nsdc-pipe">|</span>
                        <span>Ministry of Skill Development, Govt. of India</span>
                    </div>
                </div>
                <div className="courses-grid">
                    {COURSES.map((c) => <CourseCard key={c.id} course={c} />)}
                </div>
            </section>
        </>
    );
}