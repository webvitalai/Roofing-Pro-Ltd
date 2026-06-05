import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Facebook,
  Instagram,
  Linkedin,
  TelephoneFill,
  EnvelopeFill,
  GeoAltFill,
  ArrowRight,
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      <footer className="roof-footer">
        <div className="roof-footer-overlay"></div>

        <div className="container position-relative">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
              <Link to="/" className="roof-footer-logo-wrap">
                <div className="roof-footer-logo-box">
                  <div className="roof-footer-logo-frame">
                    <img
                      src="/Images/Logo.webp"
                      alt="Kings Heath Roofing Logo"
                      className="roof-footer-logo-img"
                    />
                  </div>

                  <div className="roof-footer-logo-text">
                    <h2>
                      Roofing <span>Pro Ltd</span>
                    </h2>
                    <small>Stevenson St, Liverpool</small>
                  </div>
                </div>
              </Link>

              <p className="roof-footer-desc">
                Professional roofing solutions with expert workmanship, rapid
                support, and dependable protection for homes and commercial
                properties across Birmingham.
              </p>

              <a href="tel:+447976286141" className="roof-footer-contact-card">
                <div className="roof-footer-contact-icon">
                  <TelephoneFill />
                </div>

                <div>
                  <span>24/7 Emergency Line</span>
                  <strong>+44 78366 699 933</strong>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="roof-footer-title">Quick Links</h5>

              <ul className="roof-footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/our-work">Our Work</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="roof-footer-title">Contact Info</h5>

              <ul className="roof-footer-contact-list">
                <li>
                  <TelephoneFill />
                  <a href="tel:+447836699933">+44 7836 699 933</a>
                </li>

                <li>
                  <EnvelopeFill />
                  <a href="mailto:info@roofingproltd.co.uk">
                    info@roofingproltd.co.uk
                  </a>
                </li>

                <li>
                  <GeoAltFill />
                  <span>1 Stevenson St, Liverpool L15 4HA, UK</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="roof-footer-title">Follow Us</h5>

              <p className="roof-social-text">
                Follow our latest roofing projects, transformations, customer
                reviews, and emergency roofing updates.
              </p>

              <div className="roof-social-icons">
                <a href="#" aria-label="Facebook"><Facebook /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              </div>

              <Link to="/contact" className="roof-footer-btn">
                Free Roof Inspection
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="roof-footer-bottom">
            © 2026 Roofing Pro Ltd — Built on Trust & Quality
          </div>
        </div>
      </footer>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-footer{
  position:relative;
  overflow:hidden;
  padding:90px 0 0;
  font-family:'Outfit',sans-serif;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.2),transparent 30%),
    radial-gradient(circle at bottom right,rgba(255,255,255,.08),transparent 28%),
    linear-gradient(135deg,#050805 0%,#101510 52%,#1d2a1d 100%);
}

.roof-footer-overlay{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 85% 20%,rgba(72,184,72,.18),transparent 26%),
    radial-gradient(circle at 15% 85%,rgba(255,255,255,.08),transparent 30%);
  pointer-events:none;
}

.roof-footer-logo-wrap{
  text-decoration:none;
  display:inline-block;
  max-width:100%;
}

.roof-footer-logo-box{
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:24px;
  max-width:100%;
}

.roof-footer-logo-frame{
  width:88px;
  height:82px;
  min-width:88px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent !important;
  border:none !important;
  box-shadow:none !important;
  border-radius:0 !important;
  padding:0 !important;
  margin:0 !important;
  overflow:visible !important;
  flex-shrink:0;
}

.roof-footer-logo-img{
  width:100%;
  height:100%;
  object-fit:contain;
  display:block;
  background:transparent !important;
  border:none !important;
  box-shadow:none !important;
  filter:
    brightness(1.15)
    contrast(1.22)
    saturate(1.18)
    drop-shadow(0 6px 10px rgba(0,0,0,.6))
    drop-shadow(0 0 14px rgba(72,184,72,.28));
  transition:.35s ease;
}

.roof-footer-logo-wrap:hover .roof-footer-logo-img{
  transform:scale(1.05);
}

.roof-footer-logo-text{
  margin-left:-3px;
  min-width:0;
}

.roof-footer-logo-text h2{
  margin:0;
  font-family:'Playfair Display',serif;
  font-size:28px;
  font-weight:900;
  color:#ffffff;
  line-height:1;
}

.roof-footer-logo-text h2 span{
  color:#55c755;
}

.roof-footer-logo-text small{
  display:block;
  margin-top:7px;
  color:#dfffe0;
  font-size:10px;
  font-weight:800;
  letter-spacing:2.4px;
  text-transform:uppercase;
}

.roof-footer-desc{
  color:#e9ffe9;
  line-height:1.9;
  font-size:15px;
  margin-bottom:28px;
}

.roof-footer-contact-card{
  display:flex;
  align-items:center;
  gap:16px;
  padding:18px;
  border-radius:22px;
  text-decoration:none;
  background:rgba(255,255,255,.09);
  border:1px solid rgba(255,255,255,.14);
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  transition:.35s ease;
}

.roof-footer-contact-card:hover{
  transform:translateY(-5px);
  background:rgba(255,255,255,.13);
}

.roof-footer-contact-icon{
  width:56px;
  height:56px;
  min-width:56px;
  border-radius:17px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:23px;
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 14px 30px rgba(72,184,72,.3);
}

.roof-footer-contact-card span{
  display:block;
  color:#dfffe0;
  font-size:12px;
  font-weight:700;
  margin-bottom:5px;
}

.roof-footer-contact-card strong{
  color:#ffffff;
  font-size:18px;
  font-weight:900;
}

.roof-footer-title{
  color:#ffffff;
  font-size:20px;
  font-weight:900;
  margin-bottom:30px;
  position:relative;
}

.roof-footer-title::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-11px;
  width:58px;
  height:4px;
  border-radius:30px;
  background:linear-gradient(90deg,#ffffff,#55c755);
}

.roof-footer-links,
.roof-footer-contact-list{
  list-style:none;
  padding:0;
  margin:0;
}

.roof-footer-links li{
  margin-bottom:15px;
}

.roof-footer-links a{
  color:#e9ffe9;
  text-decoration:none;
  font-size:15px;
  font-weight:700;
  transition:.3s ease;
}

.roof-footer-links a:hover{
  color:#66d466;
  padding-left:8px;
}

.roof-footer-contact-list li{
  display:flex;
  align-items:flex-start;
  gap:13px;
  margin-bottom:18px;
  color:#e9ffe9;
  font-size:15px;
  line-height:1.7;
}

.roof-footer-contact-list svg{
  color:#66d466;
  min-width:18px;
  margin-top:4px;
}

.roof-footer-contact-list a,
.roof-footer-contact-list span{
  color:#e9ffe9;
  text-decoration:none;
  font-weight:700;
}

.roof-footer-contact-list a:hover{
  color:#66d466;
}

.roof-social-text{
  color:#e9ffe9;
  line-height:1.8;
  margin-bottom:22px;
}

.roof-social-icons{
  display:flex;
  align-items:center;
  gap:14px;
  margin-bottom:28px;
}

.roof-social-icons a{
  width:50px;
  height:50px;
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  color:#ffffff;
  font-size:20px;
  background:rgba(255,255,255,.09);
  border:1px solid rgba(255,255,255,.14);
  transition:.35s ease;
}

.roof-social-icons a:hover{
  color:#fff;
  transform:translateY(-5px);
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 14px 30px rgba(72,184,72,.3);
}

.roof-footer-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:9px;
  text-decoration:none;
  padding:15px 24px;
  border-radius:16px;
  color:#fff;
  font-size:13px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 16px 34px rgba(72,184,72,.32);
  transition:.35s ease;
}

.roof-footer-btn:hover{
  color:#fff;
  transform:translateY(-4px);
  box-shadow:0 20px 42px rgba(72,184,72,.45);
}

.roof-footer-bottom{
  margin-top:70px;
  padding:24px 0;
  text-align:center;
  color:#dfffe0;
  font-size:14px;
  border-top:1px solid rgba(255,255,255,.12);
  background:rgba(0,0,0,.22);
}

@media(max-width:991px){
  .roof-footer{
    padding-top:70px;
  }

  .roof-footer-logo-frame{
    width:78px;
    height:72px;
    min-width:78px;
  }

  .roof-footer-logo-text h2{
    font-size:25px;
  }
}

@media(max-width:575px){
  .roof-footer{
    padding-top:60px;
  }

  .roof-footer-logo-box{
    align-items:center;
    gap:6px;
  }

  .roof-footer-logo-frame{
    width:66px;
    height:60px;
    min-width:66px;
  }

  .roof-footer-logo-text{
    margin-left:-2px;
  }

  .roof-footer-logo-text h2{
    font-size:22px;
  }

  .roof-footer-logo-text small{
    font-size:8px;
    letter-spacing:1px;
  }

  .roof-footer-contact-card{
    padding:15px;
  }

  .roof-footer-contact-card strong{
    font-size:16px;
  }

  .roof-social-icons a{
    width:45px;
    height:45px;
  }

  .roof-footer-btn{
    width:100%;
  }

  .roof-footer-bottom{
    margin-top:50px;
    font-size:13px;
    padding:20px 10px;
  }
}

@media(max-width:390px){
  .roof-footer-logo-frame{
    width:58px;
    height:54px;
    min-width:58px;
  }

  .roof-footer-logo-text h2{
    font-size:19px;
  }

  .roof-footer-logo-text small{
    font-size:7px;
    letter-spacing:.8px;
  }
}
      `}</style>
    </>
  );
}