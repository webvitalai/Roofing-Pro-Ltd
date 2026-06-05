import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  TelephoneFill,
  ShieldCheck,
  CheckCircle,
  Clock,
  GeoAlt,
  ArrowRight,
  Headset,
  Whatsapp,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";

export default function Home() {
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(50);
  const [slider3, setSlider3] = useState(50);

  return (
    <>
      <main className="roof-home">
        <section className="roof-hero">
          <Carousel fade indicators controls interval={3500}>
            <Carousel.Item>
              <HeroSlide before="/Images/6.png" after="/Images/7.png" />
            </Carousel.Item>

            <Carousel.Item>
              <HeroSlide before="/Images/9.png" after="/Images/10.png" />
            </Carousel.Item>

            <Carousel.Item>
              <HeroSlide before="/Images/19.png" after="/Images/8.png" />
            </Carousel.Item>
          </Carousel>

          <div className="container roof-hero-content">
            <div className="roof-hero-box">
              <div className="roof-badge">
                ⭐ 4.9/5 Rated · 200+ Reviews · Est. 2009
              </div>

              <h1>
                Liverpool's <br />
                <span>Reliable Roofing Experts</span>
              </h1>

              <div className="roof-points">
                <span>✓ Fully Insured</span>
                <span>✓ Written Quotes</span>
                <span>✓ 10 Year Guarantee</span>
              </div>

              <div className="roof-actions">
                <Link to="/contact" className="roof-main-btn">
                  Get Free Quote
                </Link>

                <a href="tel:+447836699933" className="roof-call-btn">
                  <TelephoneFill />
                  +44 7836 699 933
                </a>
              </div>

              <a href="tel:+447836699933" className="roof-emergency">
                🚨 24/7 Emergency Line: +44 7836 699 933
              </a>
            </div>
          </div>
        </section>

        <section className="roof-trust">
          <div className="container">
            <div className="row gy-4">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Established 2009",
                  text: "Over 15 years serving Birmingham with trusted roofing work.",
                },
                {
                  icon: <CheckCircle />,
                  title: "Honest Prices",
                  text: "Clear written quotes with no hidden charges or surprise costs.",
                },
                {
                  icon: <Clock />,
                  title: "Fast Response",
                  text: "Punctual team, rapid support and professional workmanship.",
                },
              ].map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="roof-trust-card">
                    <div className="roof-trust-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roof-work">
          <div className="container">
            <div className="roof-section-head">
              <span>Our Latest Work</span>
              <h2>Real Jobs. Real Results.</h2>
            </div>

            <div className="row gy-4">
              <CompareCard
                title="Ridge Tile Repair"
                location="Didsbury"
                before="/Images/6.png"
                after="/Images/7.png"
                value={slider1}
                setValue={setSlider1}
              />

              <CompareCard
                title="Roof Replacement"
                location="Chorlton"
                before="/Images/9.png"
                after="/Images/10.png"
                value={slider2}
                setValue={setSlider2}
              />

              <CompareCard
                title="Flat Roof"
                location="Salford"
                before="/Images/19.png"
                after="/Images/8.png"
                value={slider3}
                setValue={setSlider3}
              />
            </div>
          </div>
        </section>

        <section className="roof-cta">
          <div className="container">
            <div className="roof-cta-wrap">
              <div className="roof-cta-head">
                <span>FREE ESTIMATE</span>
                <h2>Ready to Sort Your Roof?</h2>
                <p>
                  Call us directly, WhatsApp a photo, or request a full written
                  quote online.
                </p>
              </div>

              <div className="row gy-4">
                <CtaCard
                  href="tel:+447836699933"
                  icon={<Headset />}
                  label="Call Us"
                  text="+44 7836 699 933"
                />

                <CtaCard
                  href="https://wa.me/447836699933"
                  icon={<Whatsapp />}
                  label="WhatsApp"
                  text="Send a Photo"
                  whatsapp
                />

                <div className="col-md-4">
                  <Link to="/contact" className="roof-cta-card">
                    <div className="roof-cta-icon">
                      <ClipboardCheck />
                    </div>
                    <span>Free Quote</span>
                    <strong>2 Min Form</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-home{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f4fff4;
  color:#111827;
}

.roof-hero{
  position:relative;
  height:660px;
  min-height:660px;
  overflow:hidden;
  background:#050805;
}

.roof-hero .carousel,
.roof-hero .carousel-inner,
.roof-hero .carousel-item,
.roof-hero-slide{
  height:660px;
  min-height:660px;
}

.roof-hero-slide{
  position:relative;
}

.roof-hero-images{
  width:100%;
  height:100%;
  display:grid;
  grid-template-columns:1fr 1fr;
  background:#050805;
}

.roof-hero-img{
  position:relative;
  height:100%;
  overflow:hidden;
}

.roof-hero-img img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  filter:brightness(1.04) contrast(1.15) saturate(1.08);
  transform:scale(1.03);
}

.roof-hero-img.before::after{
  content:"";
  position:absolute;
  right:0;
  top:0;
  width:4px;
  height:100%;
  background:#55c755;
  box-shadow:0 0 25px rgba(85,199,85,.9);
  z-index:2;
}

.roof-hero-img span{
  position:absolute;
  bottom:34px;
  z-index:3;
  padding:9px 20px;
  border-radius:999px;
  font-size:12px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  color:#fff;
  box-shadow:0 14px 30px rgba(0,0,0,.28);
}

.roof-hero-img.before span{
  right:30px;
  background:#050805;
}

.roof-hero-img.after span{
  left:30px;
  background:linear-gradient(135deg,#238636,#55c755);
}

.roof-hero-overlay{
  position:absolute;
  inset:0;
  z-index:2;
  background:
    linear-gradient(90deg,rgba(5,8,5,.86),rgba(5,8,5,.52),rgba(5,8,5,.16)),
    linear-gradient(to top,rgba(5,8,5,.58),transparent);
}

.roof-hero-content{
  position:absolute;
  inset:0;
  z-index:5;
  display:flex;
  align-items:center;
  pointer-events:none;
}

.roof-hero-box{
  max-width:720px;
  pointer-events:auto;
}

.roof-badge{
  display:inline-block;
  padding:10px 20px;
  border-radius:999px;
  background:rgba(255,255,255,.96);
  color:#238636;
  font-size:14px;
  font-weight:900;
  box-shadow:0 18px 40px rgba(0,0,0,.25);
  margin-bottom:18px;
}

.roof-hero h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  line-height:1.05;
  color:#ffffff;
  font-weight:900;
  margin:0;
  text-shadow:0 18px 50px rgba(0,0,0,.45);
}

.roof-hero h1 span{
  color:#55c755;
}

.roof-points{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin:30px 0 26px;
}

.roof-points span{
  padding:10px 17px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.22);
  color:#f4fff4;
  font-size:13px;
  font-weight:800;
  backdrop-filter:blur(12px);
}

.roof-actions{
  display:flex;
  align-items:center;
  gap:15px;
  flex-wrap:wrap;
}

.roof-main-btn,
.roof-call-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:9px;
  text-decoration:none;
  border-radius:999px;
  font-size:15px;
  font-weight:900;
  transition:.35s ease;
}

.roof-main-btn{
  padding:15px 32px;
  color:#fff;
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 18px 40px rgba(72,184,72,.36);
}

.roof-call-btn{
  padding:13px 28px;
  color:#ffffff;
  border:2px solid rgba(85,199,85,.82);
  background:rgba(255,255,255,.08);
  backdrop-filter:blur(12px);
}

.roof-main-btn:hover,
.roof-call-btn:hover{
  transform:translateY(-5px);
  color:#fff;
}

.roof-emergency{
  display:inline-block;
  margin-top:22px;
  color:#dfffe0;
  font-weight:900;
  text-decoration:none;
  transition:.3s ease;
}

.roof-emergency:hover{
  color:#55c755;
  transform:translateX(8px);
}

.roof-hero .carousel-control-prev,
.roof-hero .carousel-control-next{
  z-index:8;
  width:6%;
}

.roof-hero .carousel-indicators{
  z-index:8;
  bottom:22px;
}

.roof-hero .carousel-indicators button{
  width:12px;
  height:12px;
  border-radius:50%;
  background:#55c755;
}

.roof-trust{
  padding:90px 0;
  background:#f4fff4;
}

.roof-trust-card{
  position:relative;
  height:100%;
  overflow:hidden;
  padding:36px 30px;
  border-radius:30px;
  background:#ffffff;
  border:1px solid rgba(72,184,72,.16);
  box-shadow:0 20px 45px rgba(17,24,39,.08);
  transition:.4s ease;
}

.roof-trust-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,#050805,#238636);
  opacity:0;
  transition:.4s ease;
}

.roof-trust-card > *{
  position:relative;
  z-index:1;
}

.roof-trust-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 70px rgba(35,134,54,.22);
}

.roof-trust-card:hover::before{
  opacity:1;
}

.roof-trust-icon{
  width:78px;
  height:78px;
  border-radius:24px;
  background:#e6ffe6;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:38px;
  margin-bottom:22px;
  transition:.4s ease;
}

.roof-trust-card:hover .roof-trust-icon{
  background:#ffffff;
  color:#238636;
  transform:scale(1.12) rotate(-6deg);
}

.roof-trust-card h3{
  font-size:24px;
  font-weight:900;
  color:#111827;
  margin-bottom:12px;
}

.roof-trust-card p{
  color:#4b5563;
  line-height:1.8;
  margin:0;
}

.roof-trust-card:hover h3,
.roof-trust-card:hover p{
  color:#fff;
}

.roof-work{
  padding:100px 0;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.14),transparent 28%),
    linear-gradient(135deg,#050805 0%,#101510 55%,#1d2a1d 100%);
}

.roof-section-head{
  text-align:center;
  margin-bottom:50px;
}

.roof-section-head span{
  color:#55c755;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-section-head h2{
  font-family:'Playfair Display',serif;
  font-size:50px;
  font-weight:900;
  color:#ffffff;
  margin-top:12px;
}

.roof-work-card{
  height:100%;
  border-radius:28px;
  overflow:hidden;
  transition:.35s ease;
}

.roof-work-card:hover{
  transform:translateY(-9px);
}

.roof-before-after{
  position:relative;
  height:290px;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 25px 55px rgba(0,0,0,.34);
  user-select:none;
  background:#050805;
}

.roof-ba-img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.roof-before-layer{
  position:absolute;
  inset:0;
  overflow:hidden;
  z-index:2;
}

.roof-before-layer .roof-ba-img{
  width:100%;
  height:100%;
  object-fit:cover;
  min-width:100%;
}

.roof-ba-range{
  position:absolute;
  inset:0;
  z-index:7;
  width:100%;
  height:100%;
  opacity:0;
  cursor:ew-resize;
}

.roof-ba-line{
  position:absolute;
  top:0;
  bottom:0;
  width:3px;
  background:#55c755;
  z-index:6;
  transform:translateX(-50%);
  box-shadow:0 0 18px rgba(85,199,85,.85);
}

.roof-ba-handle{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:48px;
  height:48px;
  border-radius:50%;
  background:#ffffff;
  border:2px solid #238636;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:17px;
  box-shadow:0 12px 28px rgba(0,0,0,.28);
}

.roof-ba-label{
  position:absolute;
  bottom:16px;
  z-index:8;
  padding:7px 14px;
  border-radius:999px;
  color:#fff;
  font-size:11px;
  font-weight:900;
  letter-spacing:1px;
}

.roof-ba-label.before{
  left:16px;
  background:#050805;
}

.roof-ba-label.after{
  right:16px;
  background:#238636;
}

.roof-work-content{
  padding:24px 6px 0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}

.roof-work-content h4{
  margin:0;
  color:#ffffff;
  font-size:22px;
  font-weight:900;
}

.roof-work-content p{
  margin:8px 0 0;
  display:flex;
  align-items:center;
  gap:6px;
  color:#55c755;
  font-weight:700;
}

.roof-arrow-btn{
  min-width:46px;
  width:46px;
  height:46px;
  border-radius:50%;
  background:#55c755;
  color:#050805;
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  transition:.35s ease;
}

.roof-arrow-btn:hover{
  background:#ffffff;
  color:#238636;
  transform:scale(1.1) rotate(-8deg);
}

.roof-cta{
  padding:100px 0;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.22),transparent 30%),
    linear-gradient(135deg,#050805,#1d2a1d);
}

.roof-cta-wrap{
  padding:58px;
  border-radius:36px;
  background:rgba(255,255,255,.09);
  border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(18px);
  box-shadow:0 35px 85px rgba(0,0,0,.3);
}

.roof-cta-head{
  max-width:760px;
  text-align:center;
  margin:0 auto 44px;
}

.roof-cta-head span{
  color:#55c755;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
}

.roof-cta-head h2{
  font-family:'Playfair Display',serif;
  font-size:48px;
  color:#ffffff;
  font-weight:900;
  margin:12px 0;
}

.roof-cta-head p{
  color:#dfffe0;
  font-size:18px;
  line-height:1.8;
}

.roof-cta-card{
  height:100%;
  display:block;
  text-align:center;
  text-decoration:none;
  padding:42px 24px;
  border-radius:30px;
  background:#ffffff;
  box-shadow:0 25px 55px rgba(0,0,0,.18);
  transition:.4s ease;
}

.roof-cta-icon{
  width:78px;
  height:78px;
  border-radius:24px;
  margin:0 auto 22px;
  background:#e6ffe6;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:35px;
  transition:.4s ease;
}

.roof-cta-card span{
  display:block;
  color:#238636;
  font-size:12px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
  margin-bottom:12px;
}

.roof-cta-card strong{
  color:#111827;
  font-size:29px;
  font-weight:900;
}

.roof-cta-card:hover{
  background:linear-gradient(135deg,#050805,#238636);
  transform:translateY(-12px);
}

.roof-cta-card:hover .roof-cta-icon{
  background:#ffffff;
  transform:scale(1.14) rotate(-6deg);
}

.roof-cta-card:hover span,
.roof-cta-card:hover strong{
  color:#fff;
}

.roof-cta-card.whatsapp:hover{
  background:linear-gradient(135deg,#128C7E,#25D366);
}

@media(max-width:991px){
  .roof-hero,
  .roof-hero .carousel,
  .roof-hero .carousel-inner,
  .roof-hero .carousel-item,
  .roof-hero-slide{
    height:560px;
    min-height:560px;
  }

  .roof-hero h1{
    font-size:48px;
  }

  .roof-cta-wrap{
    padding:42px 26px;
  }

  .roof-section-head h2,
  .roof-cta-head h2{
    font-size:40px;
  }
}

@media(max-width:575px){
  .roof-hero,
  .roof-hero .carousel,
  .roof-hero .carousel-inner,
  .roof-hero .carousel-item,
  .roof-hero-slide{
    height:520px;
    min-height:520px;
  }

  .roof-hero-images{
    grid-template-columns:1fr;
  }

  .roof-hero-img.after{
    display:none;
  }

  .roof-hero h1{
    font-size:34px;
  }

  .roof-badge{
    font-size:10px;
    padding:7px 12px;
  }

  .roof-points span{
    font-size:11px;
    padding:8px 12px;
  }

  .roof-actions{
    flex-direction:column;
    align-items:stretch;
  }

  .roof-main-btn,
  .roof-call-btn{
    width:100%;
  }

  .roof-before-after{
    height:245px;
  }

  .roof-section-head h2,
  .roof-cta-head h2{
    font-size:32px;
  }

  .roof-cta-card strong{
    font-size:23px;
  }
}
      `}</style>
    </>
  );
}

function HeroSlide({ before, after }) {
  return (
    <div className="roof-hero-slide">
      <div className="roof-hero-images">
        <div className="roof-hero-img before">
          <img src={before} alt="Before roofing work" />
          <span>Before</span>
        </div>

        <div className="roof-hero-img after">
          <img src={after} alt="After roofing work" />
          <span>After</span>
        </div>
      </div>

      <div className="roof-hero-overlay"></div>
    </div>
  );
}

function CompareCard({ title, location, before, after, value, setValue }) {
  return (
    <div className="col-md-4">
      <div className="roof-work-card">
        <div className="roof-before-after">
          <img src={after} className="roof-ba-img" alt={`${title} after`} />

          <div className="roof-before-layer" style={{ width: `${value}%` }}>
            <img src={before} className="roof-ba-img" alt={`${title} before`} />
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="roof-ba-range"
          />

          <div className="roof-ba-line" style={{ left: `${value}%` }}>
            <div className="roof-ba-handle">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>

          <span className="roof-ba-label before">Before</span>
          <span className="roof-ba-label after">After</span>
        </div>

        <div className="roof-work-content">
          <div>
            <h4>{title}</h4>
            <p>
              <GeoAlt />
              {location}
            </p>
          </div>

          <Link to="/our-work" className="roof-arrow-btn">
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CtaCard({ href, icon, label, text, whatsapp }) {
  return (
    <div className="col-md-4">
      <a
        href={href}
        target={whatsapp ? "_blank" : undefined}
        rel={whatsapp ? "noreferrer" : undefined}
        className={`roof-cta-card ${whatsapp ? "whatsapp" : ""}`}
      >
        <div className="roof-cta-icon">{icon}</div>
        <span>{label}</span>
        <strong>{text}</strong>
      </a>
    </div>
  );
}