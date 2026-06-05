import React, { useState } from "react";
import {
  TelephoneFill,
  Whatsapp,
  EnvelopeFill,
  ArrowRight,
  ClockFill,
  GeoAltFill,
  CheckCircleFill,
  ChevronDown,
  Check,
  X,
} from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const phoneDisplay = "+44 7836 699 933";
  const phoneHref = "tel:+447836699933";
  const whatsappHref = "https://wa.me/447836699933";

  const services = [
    "Roof Repairs",
    "Roof Replacement",
    "Flat Roofs",
    "Chimney Services",
    "Guttering & Fascias",
    "Emergency Repairs",
  ];

  const filteredServices = services.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted.");
  };

  return (
    <>
      <main className="roof-contact-page">
        <section className="roof-contact-hero">
          <div className="container">
            <div className="roof-hero-box">
              <span>Home / Contact</span>

              <h1>
                Get In <strong>Touch</strong>
              </h1>

              <p>
                Call, WhatsApp or request a written quote online. Fast replies
                and honest roofing prices.
              </p>
            </div>
          </div>
        </section>

        <section className="roof-contact-cards-section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="roof-contact-card">
                  <div className="roof-icon-box">
                    <TelephoneFill />
                  </div>

                  <h3>Call Us</h3>
                  <p>Speak directly with our roofing team.</p>

                  <a href={phoneHref} className="roof-card-btn">
                    {phoneDisplay}
                  </a>

                  <small>Mon–Sat 7am to 6pm</small>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="roof-contact-card featured">
                  <div className="roof-icon-box whatsapp">
                    <Whatsapp />
                  </div>

                  <h3>WhatsApp Quote</h3>
                  <p>Send roof photos for a faster estimate.</p>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="roof-card-btn whatsapp"
                  >
                    Open WhatsApp
                  </a>

                  <small>Replies usually within 24 hours</small>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="roof-contact-card">
                  <div className="roof-icon-box email">
                    <EnvelopeFill />
                  </div>

                  <h3>Email Us</h3>
                  <p>For non-urgent enquiries and documents.</p>

                  <a
                    href="mailto:info@roofingproltd.co.uk"
                    className="roof-card-btn email"
                  >
                    Send Email
                  </a>

                  <small>Response within 24 hours</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="roof-quote-form-section">
          <div className="container">
            <div className="roof-form-head">
              <span>FASTER RESPONSE</span>
              <h2>Request a Written Quote</h2>
              <p>
                Fill in the details below and our team will get back to you with
                a transparent quote.
              </p>
            </div>

            <div className="row gy-4 align-items-stretch">
              <div className="col-lg-6">
                <div className="roof-map-wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.8184654724346!2d-2.9290470231572185!3d53.40018717069356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21f3f39ad22b%3A0x6b01f4b17754abc1!2sRoofing%20Pro%20ltd!5e0!3m2!1sen!2s!4v1780660230909!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Roofing Pro Ltd Location"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="roof-form-wrap">
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-4">
                      <div className="col-md-12">
                        <label className="roof-form-label">
                          What do you need help with?
                        </label>

                        <div className="roof-multi-select-wrap">
                          <div
                            className="roof-multi-select-head"
                            onClick={() => setOpen(!open)}
                          >
                            <div className="roof-selected-tags">
                              {selected.length === 0 ? (
                                <span className="roof-placeholder">
                                  Select one or more services
                                </span>
                              ) : (
                                selected.map((item) => (
                                  <span className="roof-selected-tag" key={item}>
                                    {item}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleService(item);
                                      }}
                                    >
                                      <X />
                                    </button>
                                  </span>
                                ))
                              )}
                            </div>

                            <ChevronDown
                              className={`roof-dropdown-arrow ${open ? "rotate" : ""
                                }`}
                            />
                          </div>

                          {open && (
                            <div className="roof-multi-dropdown">
                              <input
                                type="text"
                                placeholder="Search service..."
                                className="roof-service-search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                              />

                              <div className="roof-service-list">
                                {filteredServices.length > 0 ? (
                                  filteredServices.map((item) => (
                                    <button
                                      type="button"
                                      key={item}
                                      className={`roof-service-list-item ${selected.includes(item) ? "selected" : ""
                                        }`}
                                      onClick={() => toggleService(item)}
                                    >
                                      {item}

                                      <span className="roof-check-box">
                                        {selected.includes(item) && <Check />}
                                      </span>
                                    </button>
                                  ))
                                ) : (
                                  <p className="roof-no-service">
                                    No service found
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="roof-form-label">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="roof-form-label">Postcode</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. B30 2TR"
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="roof-form-label">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder={phoneDisplay}
                          className="roof-input form-control"
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="roof-form-label">
                          Briefly Describe The Issue
                        </label>

                        <textarea
                          rows="4"
                          placeholder="e.g. Leak coming through the kitchen ceiling..."
                          className="roof-input roof-textarea form-control"
                        ></textarea>
                      </div>

                      <div className="col-md-12">
                        <div className="roof-gdpr-box">
                          <input id="gdpr" required type="checkbox" />

                          <label htmlFor="gdpr">
                            I agree to the <strong>Privacy Policy</strong> and
                            consent to being contacted regarding my enquiry.
                          </label>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <button type="submit" className="roof-submit-btn">
                          Request My Free Quote <ArrowRight />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="roof-info-strip">
          <div className="container">
            <div className="row gy-4">
              <InfoItem
                icon={<ClockFill />}
                title="Opening Hours"
                text="Mon-Fri 7am–6pm"
              />

              <InfoItem
                icon={<GeoAltFill />}
                title="Location"
                text="1 Stevenson St, Liverpool L15 4HA, UK"
              />

              <InfoItem
                icon={<CheckCircleFill />}
                title="Trusted Roofing Team"
                text="Fully insured and guaranteed"
              />
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-contact-page{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f4fff4;
  color:#111827;
}

.roof-contact-hero{
  padding:130px 0 95px;
  text-align:center;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.2),transparent 32%),
    radial-gradient(circle at bottom right,rgba(0,0,0,.08),transparent 35%),
    linear-gradient(135deg,#ffffff,#f4fff4);
}

.roof-hero-box{
  max-width:780px;
  margin:auto;
}

.roof-hero-box span,
.roof-form-head span{
  color:#238636;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-hero-box h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  font-weight:900;
  margin:16px 0;
  color:#050805;
}

.roof-hero-box h1 strong{
  color:#238636;
}

.roof-hero-box p{
  font-size:19px;
  color:#4b5563;
  line-height:1.8;
}

.roof-contact-cards-section{
  padding:95px 0;
  background:#f4fff4;
}

.roof-contact-card{
  height:100%;
  text-align:center;
  padding:40px 34px;
  border-radius:32px;
  background:#ffffff;
  border:1px solid rgba(72,184,72,.16);
  box-shadow:0 20px 45px rgba(17,24,39,.08);
  transition:.4s ease;
}

.roof-contact-card:hover{
  transform:translateY(-10px);
  box-shadow:0 35px 70px rgba(35,134,54,.22);
}

.roof-contact-card.featured{
  transform:scale(1.03);
}

.roof-icon-box{
  width:82px;
  height:82px;
  border-radius:25px;
  margin:0 auto 24px;
  background:linear-gradient(135deg,#238636,#55c755);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:36px;
  box-shadow:0 14px 30px rgba(72,184,72,.28);
}

.roof-icon-box.whatsapp{
  background:linear-gradient(135deg,#128C7E,#25D366);
}

.roof-icon-box.email{
  background:linear-gradient(135deg,#050805,#1d2a1d);
}

.roof-contact-card h3{
  font-size:26px;
  font-weight:900;
  color:#111827;
  margin-bottom:12px;
}

.roof-contact-card p{
  color:#4b5563;
  min-height:50px;
}

.roof-card-btn{
  display:block;
  margin:22px 0 14px;
  padding:14px;
  border-radius:999px;
  background:linear-gradient(135deg,#238636,#55c755);
  color:#fff;
  text-decoration:none;
  font-weight:900;
  transition:.35s ease;
}

.roof-card-btn.whatsapp{
  background:linear-gradient(135deg,#128C7E,#25D366);
}

.roof-card-btn.email{
  background:linear-gradient(135deg,#050805,#1d2a1d);
}

.roof-card-btn:hover{
  color:#fff;
  transform:translateY(-5px);
}

.roof-contact-card small{
  color:#238636;
  font-weight:700;
}

.roof-quote-form-section{
  padding:100px 0;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.22),transparent 30%),
    linear-gradient(135deg,#050805,#1d2a1d);
}

.roof-form-head{
  text-align:center;
  max-width:760px;
  margin:0 auto 48px;
}

.roof-form-head h2{
  font-family:'Playfair Display',serif;
  font-size:50px;
  font-weight:900;
  margin:14px 0;
  color:#ffffff;
}

.roof-form-head p{
  color:#dfffe0;
  font-size:18px;
  line-height:1.8;
}

.roof-map-wrap{
  height:100%;
  min-height:760px;
  border-radius:38px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,.34);
  border:1px solid rgba(255,255,255,.16);
  background:#ffffff;
}

.roof-map-wrap iframe{
  width:100%;
  height:100%;
  border:0;
  display:block;
}

.roof-form-wrap{
  height:100%;
  background:#ffffff;
  padding:40px;
  border-radius:38px;
  box-shadow:0 30px 80px rgba(0,0,0,.3);
  border:1px solid rgba(255,255,255,.18);
  position:relative;
  overflow:visible;
}

.roof-form-label{
  display:block;
  color:#111827;
  font-size:13px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:14px;
}

.roof-input{
  height:56px;
  border-radius:16px !important;
  border:1px solid rgba(72,184,72,.22) !important;
  background:#f4fff4 !important;
  color:#111827 !important;
  font-weight:700;
  box-shadow:none !important;
  padding:14px 18px !important;
}

.roof-input:focus{
  border-color:#55c755 !important;
  box-shadow:0 0 0 4px rgba(85,199,85,.15) !important;
}

.roof-textarea{
  height:auto;
  min-height:125px;
  resize:none;
}

.roof-multi-select-wrap{
  position:relative;
  z-index:20;
}

.roof-multi-select-head{
  min-height:58px;
  padding:12px 16px;
  border-radius:16px;
  background:#f4fff4;
  border:1px solid rgba(72,184,72,.22);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  cursor:pointer;
}

.roof-selected-tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.roof-placeholder{
  color:#6b7280;
  font-weight:700;
}

.roof-selected-tag{
  display:inline-flex;
  align-items:center;
  gap:7px;
  padding:7px 10px;
  border-radius:999px;
  background:#e6ffe6;
  color:#238636;
  font-size:12px;
  font-weight:900;
}

.roof-selected-tag button{
  border:0;
  background:transparent;
  color:#238636;
  display:flex;
  padding:0;
}

.roof-dropdown-arrow{
  color:#238636;
  transition:.3s ease;
  min-width:20px;
}

.roof-dropdown-arrow.rotate{
  transform:rotate(180deg);
}

.roof-multi-dropdown{
  position:absolute;
  left:0;
  right:0;
  top:calc(100% + 10px);
  background:#ffffff;
  border:1px solid rgba(72,184,72,.22);
  border-radius:18px;
  padding:14px;
  box-shadow:0 24px 55px rgba(0,0,0,.18);
  z-index:99;
}

.roof-service-search{
  width:100%;
  height:46px;
  border-radius:14px;
  border:1px solid rgba(72,184,72,.22);
  background:#f4fff4;
  padding:0 14px;
  font-weight:700;
  outline:none;
  margin-bottom:12px;
}

.roof-service-list{
  max-height:220px;
  overflow:auto;
}

.roof-service-list-item{
  width:100%;
  border:0;
  background:transparent;
  padding:12px 10px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#111827;
  font-weight:800;
  transition:.25s ease;
}

.roof-service-list-item:hover,
.roof-service-list-item.selected{
  background:#e6ffe6;
  color:#238636;
}

.roof-check-box{
  width:22px;
  height:22px;
  border-radius:7px;
  border:1px solid rgba(72,184,72,.35);
  display:flex;
  align-items:center;
  justify-content:center;
}

.roof-no-service{
  margin:0;
  padding:12px;
  color:#6b7280;
  font-weight:700;
}

.roof-gdpr-box{
  display:flex;
  align-items:flex-start;
  gap:12px;
  padding:16px;
  border-radius:16px;
  background:#f4fff4;
  border:1px solid rgba(72,184,72,.18);
}

.roof-gdpr-box input{
  margin-top:5px;
  accent-color:#238636;
}

.roof-gdpr-box label{
  color:#4b5563;
  font-size:14px;
  line-height:1.7;
  font-weight:600;
}

.roof-gdpr-box strong{
  color:#238636;
}

.roof-submit-btn{
  width:100%;
  height:60px;
  border:0;
  border-radius:999px;
  background:linear-gradient(135deg,#238636,#55c755);
  color:#fff;
  font-size:15px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  transition:.35s ease;
  box-shadow:0 18px 40px rgba(72,184,72,.32);
}

.roof-submit-btn:hover{
  transform:translateY(-4px);
  box-shadow:0 22px 50px rgba(72,184,72,.42);
}

.roof-info-strip{
  padding:70px 0;
  background:#f4fff4;
}

.roof-info-item{
  height:100%;
  padding:28px;
  border-radius:26px;
  background:#ffffff;
  border:1px solid rgba(72,184,72,.16);
  box-shadow:0 18px 42px rgba(17,24,39,.08);
  display:flex;
  align-items:center;
  gap:18px;
  transition:.35s ease;
}

.roof-info-item:hover{
  transform:translateY(-7px);
  box-shadow:0 30px 60px rgba(35,134,54,.18);
}

.roof-info-item > svg{
  width:54px;
  height:54px;
  padding:15px;
  border-radius:17px;
  color:#ffffff;
  background:linear-gradient(135deg,#238636,#55c755);
  flex-shrink:0;
}

.roof-info-item strong{
  display:block;
  color:#111827;
  font-size:18px;
  font-weight:900;
  margin-bottom:6px;
}

.roof-info-item p{
  margin:0;
  color:#4b5563;
  font-weight:700;
}

@media(max-width:991px){
  .roof-hero-box h1{
    font-size:50px;
  }

  .roof-form-head h2{
    font-size:40px;
  }

  .roof-map-wrap{
    min-height:420px;
  }

  .roof-contact-card.featured{
    transform:none;
  }
}

@media(max-width:575px){
  .roof-contact-hero{
    padding:90px 0 65px;
  }

  .roof-hero-box h1{
    font-size:38px;
  }

  .roof-hero-box p{
    font-size:16px;
  }

  .roof-form-head h2{
    font-size:32px;
  }

  .roof-form-wrap{
    padding:28px 20px;
    border-radius:28px;
  }

  .roof-map-wrap{
    min-height:320px;
    border-radius:28px;
  }

  .roof-contact-card{
    padding:34px 24px;
  }

  .roof-submit-btn{
    height:auto;
    min-height:58px;
    padding:14px;
  }

  .roof-info-item{
    padding:22px;
  }
}
      `}</style>
    </>
  );
}

function InfoItem({ icon, title, text }) {
  return (
    <div className="col-md-4">
      <div className="roof-info-item">
        {icon}

        <div>
          <strong>{title}</strong>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}