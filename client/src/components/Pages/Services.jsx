import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TelephoneFill,
  Whatsapp,
  Wrench,
  HouseGear,
  Layers,
  Fire,
  DropletHalf,
  ExclamationTriangle,
  InfoCircle,
  CheckCircle,
} from "react-bootstrap-icons";

export default function Services() {
  const services = [
    {
      title: "Roof Repairs",
      desc: "Tiles, ridge, flashing, valleys and leak repairs.",
      price: "From £150",
      icon: <Wrench />,
    },
    {
      title: "Roof Replacement",
      desc: "Complete slate and tile roof replacement.",
      price: "From £3,800",
      badge: "10 Year Guarantee",
      icon: <HouseGear />,
    },
    {
      title: "Flat Roofs",
      desc: "GRP fibreglass and EPDM rubber roofing.",
      price: "From £1,500",
      badge: "25 Year GRP Guarantee",
      icon: <Layers />,
    },
    {
      title: "Chimney Services",
      desc: "Chimney repointing, repairs and removal.",
      price: "From £300",
      icon: <Fire />,
    },
    {
      title: "Guttering & Fascias",
      desc: "Gutter repair, replacement and cleaning.",
      price: "From £80",
      badge: "Most Requested",
      icon: <DropletHalf />,
    },
    {
      title: "Emergency Repairs",
      desc: "24/7 rapid response across Birmingham.",
      price: "Call for pricing",
      badge: "24/7",
      emergency: true,
      icon: <ExclamationTriangle />,
    },
  ];

  return (
    <>
      <main className="roof-services-page">
        <section className="roof-services-hero">
          <div className="container">
            <div className="roof-services-hero-content">
              <span>Home / Services</span>

              <h1>
                Our Roofing <br />
                <strong>Services</strong>
              </h1>

              <p>
                Professional roof repairs, replacements, flat roofing, chimney
                work and emergency roofing support across Liverpool.
              </p>

              <div className="roof-service-actions">
                <Link to="/contact" className="roof-primary-btn">
                  Get Free Quote <ArrowRight />
                </Link>

                <a href="tel:+447836699933" className="roof-emergency-btn">
                  🚨 Emergency Call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="roof-services-grid">
          <div className="container">
            <div className="row gy-4">
              {services.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div
                    className={`roof-service-card ${
                      item.emergency ? "urgent" : ""
                    }`}
                  >
                    <div className="roof-service-icon">{item.icon}</div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <div className="roof-service-price">
                      <div>
                        <span>Starting From</span>
                        <strong>{item.price}</strong>
                      </div>

                      {item.badge && <small>{item.badge}</small>}
                    </div>

                    {item.emergency ? (
                      <a
                        href="tel:+447836699933"
                        className="roof-service-btn urgent"
                      >
                        Call Now <TelephoneFill />
                      </a>
                    ) : (
                      <Link to="/contact" className="roof-service-btn">
                        Get Quote <ArrowRight />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roof-pricing-section">
          <div className="container">
            <div className="roof-pricing-box">
              <div className="roof-pricing-icon">
                <InfoCircle />
              </div>

              <h2>About Our Pricing</h2>

              <p>
                Every price shown is a genuine starting guide. Your exact quote
                is confirmed after a free assessment — always in writing and
                always agreed before we start.
              </p>

              <h5>
                <CheckCircle />
                We never charge more than the written quote.
              </h5>

              <Link to="/contact" className="roof-primary-btn">
                Get Your Free Quote <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="roof-bottom-cta">
          <div className="container">
            <div className="roof-bottom-wrap">
              <h3>Questions about a service?</h3>

              <div className="roof-bottom-actions">
                <a href="tel:+447836699933">
                  <TelephoneFill />
                  +44 7836 699 933
                </a>

                <a
                  href="https://wa.me/447836699933"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp"
                >
                  <Whatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-services-page{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f4fff4;
  color:#111827;
}

.roof-services-hero{
  padding:130px 0 95px;
  text-align:center;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.2),transparent 32%),
    radial-gradient(circle at bottom right,rgba(0,0,0,.08),transparent 35%),
    linear-gradient(135deg,#ffffff,#f4fff4);
}

.roof-services-hero-content{
  max-width:880px;
  margin:auto;
}

.roof-services-hero-content > span{
  color:#238636;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-services-hero h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  line-height:1.05;
  font-weight:900;
  margin:18px 0;
  color:#050805;
}

.roof-services-hero h1 strong{
  color:#238636;
}

.roof-services-hero p{
  max-width:730px;
  margin:auto;
  color:#4b5563;
  font-size:19px;
  line-height:1.8;
}

.roof-service-actions{
  margin-top:34px;
  display:flex;
  justify-content:center;
  gap:16px;
  flex-wrap:wrap;
}

.roof-primary-btn,
.roof-emergency-btn,
.roof-service-btn,
.roof-bottom-actions a{
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:9px;
  border-radius:999px;
  font-weight:900;
  transition:.35s ease;
}

.roof-primary-btn{
  padding:15px 32px;
  color:#fff;
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 18px 40px rgba(72,184,72,.3);
}

.roof-primary-btn:hover{
  color:#fff;
  transform:translateY(-6px);
  box-shadow:0 22px 48px rgba(72,184,72,.42);
}

.roof-emergency-btn{
  padding:14px 30px;
  color:#238636;
  border:2px solid #238636;
  background:#ffffff;
}

.roof-emergency-btn:hover{
  color:#fff;
  background:#238636;
  transform:translateY(-6px);
}

.roof-services-grid{
  padding:100px 0;
  background:#f4fff4;
}

.roof-service-card{
  position:relative;
  overflow:hidden;
  height:100%;
  padding:38px;
  border-radius:34px;
  background:#ffffff;
  border:1px solid rgba(72,184,72,.16);
  box-shadow:0 20px 45px rgba(17,24,39,.08);
  transition:.45s ease;
}

.roof-service-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,#050805,#238636);
  opacity:0;
  transition:.45s ease;
}

.roof-service-card::after{
  content:"";
  position:absolute;
  width:180px;
  height:180px;
  border-radius:50%;
  background:rgba(255,255,255,.16);
  right:-85px;
  top:-85px;
  transform:scale(0);
  transition:.45s ease;
}

.roof-service-card > *{
  position:relative;
  z-index:1;
}

.roof-service-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 75px rgba(35,134,54,.22);
}

.roof-service-card:hover::before{
  opacity:1;
}

.roof-service-card:hover::after{
  transform:scale(1.5);
}

.roof-service-icon{
  width:82px;
  height:82px;
  border-radius:25px;
  background:#e6ffe6;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:38px;
  margin-bottom:26px;
  transition:.4s ease;
}

.roof-service-card:hover .roof-service-icon{
  background:#ffffff;
  color:#238636;
  transform:scale(1.14) rotate(-6deg);
}

.roof-service-card h3{
  font-size:24px;
  font-weight:900;
  color:#111827;
  margin-bottom:12px;
}

.roof-service-card p{
  color:#4b5563;
  font-size:16px;
  line-height:1.75;
  min-height:58px;
}

.roof-service-card:hover h3,
.roof-service-card:hover p{
  color:#fff;
}

.roof-service-price{
  margin-top:26px;
  padding-top:24px;
  border-top:1px solid rgba(72,184,72,.16);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
}

.roof-service-card:hover .roof-service-price{
  border-color:rgba(255,255,255,.24);
}

.roof-service-price span{
  display:block;
  color:#238636;
  font-size:10px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:6px;
}

.roof-service-price strong{
  color:#238636;
  font-size:25px;
  font-weight:900;
}

.roof-service-card:hover .roof-service-price span,
.roof-service-card:hover .roof-service-price strong{
  color:#fff;
}

.roof-service-price small{
  padding:7px 12px;
  border-radius:999px;
  background:#e6ffe6;
  color:#238636;
  font-size:9px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  white-space:nowrap;
}

.roof-service-card:hover .roof-service-price small{
  background:#ffffff;
}

.roof-service-btn{
  width:100%;
  margin-top:28px;
  padding:14px 24px;
  color:#238636;
  border:2px solid #238636;
  background:#ffffff;
}

.roof-service-btn:hover{
  background:#050805;
  border-color:#050805;
  color:#fff;
  transform:translateY(-5px);
}

.roof-service-card.urgent::before{
  background:linear-gradient(135deg,#064e3b,#16a34a);
}

.roof-service-card.urgent .roof-service-icon{
  background:#dcfce7;
  color:#16a34a;
}

.roof-service-btn.urgent{
  background:#16a34a;
  border-color:#16a34a;
  color:#fff;
}

.roof-service-btn.urgent:hover{
  background:#064e3b;
  border-color:#064e3b;
}

.roof-pricing-section{
  padding:95px 0;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.14),transparent 28%),
    linear-gradient(135deg,#050805 0%,#101510 55%,#1d2a1d 100%);
}

.roof-pricing-box{
  max-width:760px;
  margin:auto;
  padding:50px;
  border-radius:36px;
  text-align:center;
  background:#ffffff;
  box-shadow:0 30px 70px rgba(0,0,0,.25);
}

.roof-pricing-icon{
  width:78px;
  height:78px;
  border-radius:50%;
  margin:0 auto 24px;
  background:#e6ffe6;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:36px;
}

.roof-pricing-box h2{
  font-family:'Playfair Display',serif;
  color:#111827;
  font-size:44px;
  font-weight:900;
  margin-bottom:14px;
}

.roof-pricing-box p{
  color:#4b5563;
  line-height:1.8;
  font-size:16px;
}

.roof-pricing-box h5{
  color:#238636;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:8px;
  font-weight:900;
  margin:22px 0 30px;
}

.roof-bottom-cta{
  padding:42px 0;
  background:linear-gradient(135deg,#050805,#1d2a1d);
}

.roof-bottom-wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:22px;
  flex-wrap:wrap;
}

.roof-bottom-wrap h3{
  color:#ffffff;
  font-size:30px;
  font-weight:900;
  margin:0;
}

.roof-bottom-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}

.roof-bottom-actions a{
  padding:15px 28px;
  background:#ffffff;
  color:#050805;
}

.roof-bottom-actions a.whatsapp{
  background:#25D366;
  color:#fff;
}

.roof-bottom-actions a:hover{
  transform:translateY(-5px);
  background:#238636;
  color:#fff;
}

@media(max-width:991px){
  .roof-services-hero h1{
    font-size:50px;
  }

  .roof-bottom-wrap{
    justify-content:center;
    text-align:center;
  }
}

@media(max-width:575px){
  .roof-services-hero{
    padding:90px 0 65px;
  }

  .roof-services-hero h1{
    font-size:38px;
  }

  .roof-services-hero p{
    font-size:16px;
  }

  .roof-primary-btn,
  .roof-emergency-btn{
    width:100%;
  }

  .roof-service-card{
    padding:30px 24px;
  }

  .roof-service-price{
    flex-direction:column;
    align-items:flex-start;
  }

  .roof-pricing-box{
    padding:34px 22px;
  }

  .roof-pricing-box h2{
    font-size:32px;
  }

  .roof-bottom-actions,
  .roof-bottom-actions a{
    width:100%;
  }
}
      `}</style>
    </>
  );
}