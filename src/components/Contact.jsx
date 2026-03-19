import { useState } from "react";
import { CONTACT } from "../data/siteData";

function EnquiryForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        course: "",
        message: ""
    });

    const [done, setDone] = useState(false);

    const change = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = () => {
        const GOOGLE_FORM_ACTION =
            "https://docs.google.com/forms/d/e/1FAIpQLSdue_Ojh3ZKmL1FtDDlqtOZXSX20RI8qszVPbcp9K_uAWM53w/formResponse";

        const formEl = document.createElement("form");
        formEl.action = GOOGLE_FORM_ACTION;
        formEl.method = "POST";
        formEl.target = "hidden_iframe";

        const fields = {
            "entry.1158138794": form.name,
            "entry.321314578": form.email,
            "entry.1832383019": form.course,
            "entry.292506348": form.message
        };

        for (let key in fields) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = fields[key];
            formEl.appendChild(input);
        }

        document.body.appendChild(formEl);
        formEl.submit();
        document.body.removeChild(formEl);

        setDone(true);
    };

    if (done)
        return (
            <div className="contact-success">
                <div style={{ fontSize: "56px", marginBottom: "14px" }}>✅</div>

                <h3 className="cs-title">Thank You, {form.name}!</h3>

                <p className="cs-msg">
                    Your enquiry has been submitted successfully.
                </p>

                <button
                    className="cs-reset"
                    onClick={() => {
                        setDone(false);
                        setForm({
                            name: "",
                            email: "",
                            course: "",
                            message: ""
                        });
                    }}
                >
                    Submit Another Enquiry
                </button>
            </div>
        );

    return (
        <>
            <h3 className="cf-head">Enquiry / Enrollment Form</h3>

            <p className="cf-sub">
                Free counseling · No commitment required
            </p>

            <div className="cf-grid">

                <div className="cf-field">
                    <label className="cf-label">Full Name *</label>

                    <input
                        name="name"
                        value={form.name}
                        onChange={change}
                        placeholder="Your full name"
                        className="cf-input"
                    />
                </div>

                <div className="cf-field">
                    <label className="cf-label">Email *</label>

                    <input
                        name="email"
                        value={form.email}
                        onChange={change}
                        placeholder="your@email.com"
                        className="cf-input"
                    />
                </div>

                <div
                    className="cf-field"
                    style={{ gridColumn: "1/-1" }}
                >
                    <label className="cf-label">Course *</label>

                    <select
                        name="course"
                        value={form.course}
                        onChange={change}
                        className="cf-input"
                    >
                        <option value="">Select Course</option>

                        <option value="Full Stack Development">
                            Full Stack Development
                        </option>

                        <option value="Animation & VFX">
                            Animation & VFX
                        </option>
                    </select>
                </div>

                <div
                    className="cf-field"
                    style={{ gridColumn: "1/-1" }}
                >
                    <label className="cf-label">Message</label>

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={change}
                        rows={4}
                        placeholder="Your message..."
                        className="cf-input"
                    />
                </div>

            </div>

            <button
                className="cf-submit"
                onClick={() => {
                    if (form.name && form.email && form.course)
                        submitForm();
                }}
            >
                🚀 Submit Enquiry
            </button>

            <p className="cf-privacy">
                🔒 Your details are safe. We never share personal info.
            </p>
        </>
    );
}

export default function Contact() {
    const [tab, setTab] = useState("form");
    const infoItems = [
        { icon: "📍", label: "Address", val: CONTACT.address },
        { icon: "📞", label: "Phone", val: CONTACT.phone },
        { icon: "✉️", label: "Email", val: CONTACT.email },
        { icon: "🕐", label: "Timings", val: CONTACT.timings },
    ];
    return (
        <>
            <style>{`
        .contact-section { width:100%; padding:100px 6%; background:linear-gradient(180deg,#060C18 0%,#080F1E 100%); position:relative; overflow:hidden; }
        .ct-glow { position:absolute; top:-100px; right:-100px; width:500px; height:500px; background:radial-gradient(circle,rgba(255,107,0,0.07) 0%,transparent 70%); border-radius:50%; pointer-events:none; }
        .ct-head { text-align:center; margin-bottom:60px; }
        .ct-label { font-family:'Poppins',sans-serif; font-size:0.75rem; letter-spacing:3px; text-transform:uppercase; color:#FF6B00; font-weight:600; margin-bottom:12px; }
        .ct-title { font-family:'Bebas Neue',cursive; font-size:clamp(2.2rem,5vw,3.8rem); letter-spacing:2px; color:#F4F0E8; }
        .ct-orange { background:linear-gradient(90deg,#FF6B00,#FFB800); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .ct-divider { width:56px; height:3px; background:linear-gradient(90deg,#FF6B00,#FFB800); margin:16px auto; border-radius:2px; }
        .ct-sub { font-family:'Poppins',sans-serif; font-size:0.93rem; color:#8A9BB5; max-width:480px; margin:0 auto; line-height:1.7; }
        .ct-inner { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr 1.45fr; gap:46px; align-items:start; }
        .ct-info-head { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.25rem; color:#F4F0E8; margin-bottom:22px; letter-spacing:0.5px; }
        .ct-info-card { display:flex; align-items:flex-start; gap:13px; padding:13px 15px; border-radius:9px; background:rgba(255,107,0,0.04); border:1px solid rgba(255,107,0,0.1); margin-bottom:10px; }
        .ct-info-icon { font-size:18px; flex-shrink:0; margin-top:2px; }
        .ct-info-lbl { display:block; font-family:'Poppins',sans-serif; font-size:0.62rem; color:#FF6B00; text-transform:uppercase; letter-spacing:1px; font-weight:600; margin-bottom:2px; }
        .ct-info-val { font-family:'Poppins',sans-serif; font-size:0.83rem; color:#C8D6E5; line-height:1.5; }
        .ct-social { display:flex; gap:8px; flex-wrap:wrap; margin-top:16px; margin-bottom:18px; }
        .ct-chip { font-family:'Poppins',sans-serif; font-size:0.7rem; font-weight:500; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:50px; padding:5px 13px; color:#C8D6E5; cursor:pointer; }
        .ct-map { padding:22px; background:linear-gradient(135deg,rgba(255,107,0,0.08),rgba(255,184,0,0.04)); border:1px solid rgba(255,107,0,0.2); border-radius:12px; text-align:center; }
        .ct-map-t { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.1rem; color:#FF6B00; }
        .ct-map-s { font-family:'Poppins',sans-serif; font-size:0.76rem; color:#8A9BB5; margin-top:4px; }
        .ct-right { background:#0E1E38; border:1px solid rgba(255,107,0,0.15); border-radius:16px; padding:34px 38px; }
        .ct-tabs { display:flex; gap:4px; background:rgba(0,0,0,0.3); border-radius:9px; padding:4px; border:1px solid rgba(255,107,0,0.12); margin-bottom:26px; }
        .ct-tab { flex:1; padding:10px 14px; border-radius:7px; background:transparent; border:none; color:#8A9BB5; font-family:'Rajdhani',sans-serif; font-weight:600; font-size:0.92rem; cursor:pointer; transition:all 0.2s; letter-spacing:0.5px; }
        .ct-tab.active { background:linear-gradient(135deg,#FF6B00,#D45500); color:#fff; }
        .cf-head { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.5rem; color:#F4F0E8; margin-bottom:5px; }
        .cf-sub { font-family:'Poppins',sans-serif; font-size:0.78rem; color:#00C9A7; margin-bottom:24px; font-weight:500; }
        .cf-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:22px; }
        .cf-field { display:flex; flex-direction:column; gap:6px; }
        .cf-label { font-family:'Poppins',sans-serif; font-size:0.72rem; font-weight:600; color:#8A9BB5; letter-spacing:0.5px; text-transform:uppercase; }
        .cf-input { padding:12px 15px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,107,0,0.2); border-radius:8px; color:#F4F0E8; font-family:'Poppins',sans-serif; font-size:0.87rem; outline:none; transition:border-color 0.2s; }
        .cf-input:focus { border-color:#FF6B00; box-shadow:0 0 0 3px rgba(255,107,0,0.1); }
        .cf-submit { width:100%; padding:15px; background:linear-gradient(135deg,#FF6B00,#D45500); border:none; border-radius:8px; color:#fff; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.1rem; letter-spacing:1px; cursor:pointer; box-shadow:0 6px 24px rgba(255,107,0,0.4); transition:all 0.25s; margin-bottom:12px; }
        .cf-submit:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(255,107,0,0.65); }
        .cf-privacy { font-family:'Poppins',sans-serif; font-size:0.7rem; color:#8A9BB5; text-align:center; }
        .gf-wrap { width:100%; }
        .gf-iframe { width:100%; min-height:580px; border:none; border-radius:10px; background:#fff; }
        .gf-empty { padding:36px 24px; background:rgba(255,184,0,0.04); border:1.5px dashed rgba(255,184,0,0.25); border-radius:12px; text-align:center; }
        .gf-icon { font-size:46px; margin-bottom:14px; }
        .gf-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:1.25rem; color:#F4F0E8; margin-bottom:10px; }
        .gf-desc { font-family:'Poppins',sans-serif; font-size:0.84rem; color:#8A9BB5; line-height:1.65; margin-bottom:18px; }
        .gf-code { font-family:monospace; background:rgba(255,107,0,0.12); color:#FF6B00; padding:2px 6px; border-radius:4px; font-size:0.8rem; }
        .gf-steps { text-align:left; background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.06); border-radius:10px; padding:16px 20px; }
        .gf-steps-title { font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.88rem; color:#FFB800; margin-bottom:10px; }
        .gf-steps ol { font-family:'Poppins',sans-serif; font-size:0.82rem; color:#C8D6E5; padding-left:18px; line-height:2; }
        .contact-success { display:flex; flex-direction:column; align-items:center; text-align:center; padding:20px 0; gap:12px; }
        .cs-title { font-family:'Bebas Neue',cursive; font-size:2.1rem; letter-spacing:1px; color:#00C9A7; }
        .cs-msg { font-family:'Poppins',sans-serif; font-size:0.93rem; color:#C8D6E5; line-height:1.6; }
        .cs-sub { font-family:'Poppins',sans-serif; font-size:0.84rem; color:#8A9BB5; }
        .cs-reset { margin-top:10px; padding:11px 26px; background:transparent; border:1.5px solid rgba(255,107,0,0.4); border-radius:6px; color:#FF6B00; font-family:'Rajdhani',sans-serif; font-weight:700; font-size:0.9rem; cursor:pointer; letter-spacing:0.5px; }
        @media(max-width:768px) { .ct-inner { grid-template-columns:1fr; } .cf-grid { grid-template-columns:1fr; } }
      `}</style>

            <section id="contact" className="contact-section">
                <div className="ct-glow" />
                <div className="ct-head">
                    <p className="ct-label">📬 Get In Touch</p>
                    <h2 className="ct-title">START YOUR <span className="ct-orange">JOURNEY</span> TODAY</h2>
                    <div className="ct-divider" />
                    <p className="ct-sub">Fill the form for free counseling, course details, or to book your seat.</p>
                </div>
                <div className="ct-inner">
                    <div>
                        <h3 className="ct-info-head">Contact Information</h3>
                        {infoItems.map((item, i) => (
                            <div key={i} className="ct-info-card">
                                <span className="ct-info-icon">{item.icon}</span>
                                <div><span className="ct-info-lbl">{item.label}</span><p className="ct-info-val">{item.val}</p></div>
                            </div>
                        ))}
                        <div className="ct-social">
                            {["📘 Facebook", "📸 Instagram", "▶️ YouTube"].map((s, i) => <span key={i} className="ct-chip">{s}</span>)}
                        </div>
                        <div className="ct-map">
                            <div className="ct-map-t">📍 Prayagraj, Uttar Pradesh</div>
                            <div className="ct-map-s">Bharat Scout Training Center</div>
                        </div>
                    </div>
                    <div className="ct-right">
                        <EnquiryForm />
                    </div>
                </div>
                <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

            </section>
        </>
    );
}