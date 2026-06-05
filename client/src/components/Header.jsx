import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  const closeMobileMenu = () => {
    const menu = document.getElementById("mainMenu");
    const toggler = document.querySelector(".roof-toggler");

    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
      toggler?.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <>
      <header className="roof-header">
        <div className="roof-topbar">
          <div className="container roof-topbar-inner">
            <div className="roof-top-left">
              <span className="roof-live-dot"></span>
              <span>24/7 Emergency Roofing Support</span>
            </div>

            <div className="roof-top-right">
              <a href="tel:+447836699933">+44 7836 699 933</a>
              <Link to="/contact" onClick={closeMobileMenu}>
                Free Site Visit
              </Link>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg roof-navbar">
          <div className="roof-nav-box">
            <Link className="navbar-brand roof-brand" to="/" onClick={closeMobileMenu}>
              <div className="roof-logo-frame">
                <img
                  src="/Images/Logo.webp"
                  alt="Kings Heath Roofing Logo"
                  className="roof-logo-img"
                />
              </div>

              <div className="roof-brand-text">
                <h2>
                  Roofing <span>Pro Ltd</span>
                </h2>
                <small>Birmingham Roofing Experts</small>
              </div>
            </Link>

            <button
              className="navbar-toggler roof-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav mx-auto roof-nav-links">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" onClick={closeMobileMenu}>
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/services" onClick={closeMobileMenu}>
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/our-work" onClick={closeMobileMenu}>
                    Our Work
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing" onClick={closeMobileMenu}>
                    Pricing
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" onClick={closeMobileMenu}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="roof-nav-actions">
                <div className="roof-call-card">
                  <span>Direct Line</span>
                  <strong>+44 7836 699 933</strong>
                </div>

                <Link to="/contact" className="roof-quote-btn" onClick={closeMobileMenu}>
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-header{
  width:100%;
  position:relative;
  z-index:999;
  background:
    radial-gradient(circle at top left,rgba(70,190,65,.18),transparent 30%),
    radial-gradient(circle at bottom right,rgba(255,255,255,.08),transparent 28%),
    linear-gradient(135deg,#050805 0%,#101510 48%,#1d2a1d 100%);
  font-family:'Outfit',sans-serif;
  overflow:hidden;
}

.roof-topbar{
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,.12);
  background:rgba(0,0,0,.28);
}

.roof-topbar-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}

.roof-top-left,
.roof-top-right{
  display:flex;
  align-items:center;
  gap:14px;
}

.roof-top-left{
  color:#f4fff4;
  font-size:13px;
  font-weight:800;
}

.roof-live-dot{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#48b848;
  animation:roofPulse 1.6s infinite;
}

.roof-top-right a{
  text-decoration:none;
  color:#ffffff;
  font-size:13px;
  font-weight:900;
  white-space:nowrap;
  transition:.3s ease;
}

.roof-top-right a:last-child{
  padding:9px 17px;
  border-radius:999px;
  background:linear-gradient(135deg,#2f9e44,#5fd45f);
  box-shadow:0 12px 28px rgba(72,184,72,.28);
}

.roof-top-right a:hover{
  color:#75dc75;
}

.roof-navbar{
  width:100%;
  padding:16px 18px;
}

.roof-nav-box{
  width:100%;
  max-width:1360px;
  margin:0 auto;
  padding:14px 20px;
  border-radius:26px;
  display:flex;
  align-items:center;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.14);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  box-shadow:0 25px 70px rgba(0,0,0,.35);
}

.roof-brand{
  display:flex;
  align-items:center;
  gap:9px;
  text-decoration:none;
  margin:0;
  flex-shrink:0;
}

.roof-logo-frame{
  width:74px;
  height:68px;
  min-width:74px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.roof-logo-img{
  width:100%;
  height:100%;
  object-fit:contain;
  display:block;
  filter:
    brightness(1.15)
    contrast(1.2)
    saturate(1.2)
    drop-shadow(0 5px 10px rgba(0,0,0,.6))
    drop-shadow(0 0 14px rgba(72,184,72,.28));
  transition:.35s ease;
}

.roof-brand:hover .roof-logo-img{
  transform:scale(1.05);
}

.roof-brand-text h2{
  margin:0;
  font-family:'Playfair Display',serif;
  font-size:25px;
  font-weight:900;
  color:#ffffff;
  line-height:1;
  white-space:nowrap;
}

.roof-brand-text h2 span{
  color:#55c755;
}

.roof-brand-text small{
  display:block;
  margin-top:7px;
  color:#dfffe0;
  font-size:9px;
  font-weight:800;
  letter-spacing:1.4px;
  text-transform:uppercase;
  white-space:nowrap;
}

.roof-nav-links{
  gap:20px;
  align-items:center;
}

.roof-nav-links .nav-link{
  color:#ffffff !important;
  font-size:13px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.8px;
  position:relative;
  padding:10px 0 !important;
  white-space:nowrap;
  transition:.3s ease;
}

.roof-nav-links .nav-link::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  width:0;
  height:3px;
  transform:translateX(-50%);
  border-radius:20px;
  background:linear-gradient(90deg,#ffffff,#55c755);
  transition:.3s ease;
}

.roof-nav-links .nav-link:hover,
.roof-nav-links .nav-link.active{
  color:#66d466 !important;
}

.roof-nav-links .nav-link:hover::after,
.roof-nav-links .nav-link.active::after{
  width:100%;
}

.roof-nav-actions{
  display:flex;
  align-items:center;
  gap:12px;
  flex-shrink:0;
}

.roof-call-card{
  padding:9px 13px;
  border-radius:16px;
  text-align:right;
  background:rgba(255,255,255,.09);
  border:1px solid rgba(255,255,255,.14);
}

.roof-call-card span{
  display:block;
  color:#dfffe0;
  font-size:9px;
  font-weight:900;
  letter-spacing:1px;
  text-transform:uppercase;
}

.roof-call-card strong{
  color:#ffffff;
  font-size:13px;
  font-weight:900;
  white-space:nowrap;
}

.roof-quote-btn{
  text-decoration:none;
  padding:12px 17px;
  border-radius:15px;
  color:#fff;
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.8px;
  background:linear-gradient(135deg,#238636,#55c755);
  box-shadow:0 16px 34px rgba(72,184,72,.32);
  white-space:nowrap;
  transition:.35s ease;
}

.roof-quote-btn:hover{
  color:#fff;
  transform:translateY(-3px);
  box-shadow:0 20px 42px rgba(72,184,72,.45);
}

.roof-toggler{
  margin-left:auto;
  background:#ffffff !important;
  border:none !important;
  border-radius:13px !important;
  padding:8px 10px !important;
  box-shadow:none !important;
}

@keyframes roofPulse{
  0%{box-shadow:0 0 0 0 rgba(72,184,72,.6);}
  70%{box-shadow:0 0 0 12px rgba(72,184,72,0);}
  100%{box-shadow:0 0 0 0 rgba(72,184,72,0);}
}

/* Large screens */
@media(min-width:1400px){
  .roof-nav-box{
    max-width:1440px;
    padding:16px 26px;
  }

  .roof-nav-links{
    gap:30px;
  }

  .roof-logo-frame{
    width:84px;
    height:78px;
    min-width:84px;
  }

  .roof-brand-text h2{
    font-size:28px;
  }

  .roof-brand-text small{
    font-size:10px;
    letter-spacing:2px;
  }

  .roof-call-card strong{
    font-size:15px;
  }

  .roof-quote-btn{
    padding:13px 21px;
    font-size:13px;
  }
}

/* Laptop fix */
@media(max-width:1280px){
  .roof-navbar{
    padding:14px 12px;
  }

  .roof-nav-box{
    padding:13px 16px;
  }

  .roof-nav-links{
    gap:14px;
  }

  .roof-logo-frame{
    width:66px;
    height:62px;
    min-width:66px;
  }

  .roof-brand-text h2{
    font-size:22px;
  }

  .roof-brand-text small{
    font-size:8px;
    letter-spacing:1px;
  }

  .roof-call-card{
    padding:8px 10px;
  }

  .roof-call-card strong{
    font-size:12px;
  }

  .roof-quote-btn{
    padding:11px 14px;
    font-size:11px;
  }
}

/* Small laptop */
@media(max-width:1120px){
  .roof-nav-links{
    gap:11px;
  }

  .roof-nav-links .nav-link{
    font-size:12px;
  }

  .roof-call-card{
    display:none;
  }
}

/* Tablet and mobile */
@media(max-width:991px){
  .roof-navbar{
    padding:12px;
  }

  .roof-nav-box{
    padding:13px 14px;
    border-radius:22px;
    flex-wrap:wrap;
  }

  .roof-brand{
    max-width:calc(100% - 58px);
  }

  .roof-logo-frame{
    width:66px;
    height:62px;
    min-width:66px;
  }

  .roof-brand-text h2{
    font-size:22px;
  }

  .roof-brand-text small{
    font-size:8px;
  }

  #mainMenu{
    width:100%;
    margin-top:14px;
    padding-top:14px;
    border-top:1px solid rgba(255,255,255,.12);
  }

  .roof-nav-links{
    gap:0;
    align-items:flex-start;
  }

  .roof-nav-links .nav-link{
    width:100%;
    padding:13px 0 !important;
    font-size:13px;
  }

  .roof-nav-actions{
    width:100%;
    margin-top:16px;
    flex-direction:column;
    align-items:stretch;
  }

  .roof-call-card{
    display:block;
    width:100%;
    text-align:center;
  }

  .roof-quote-btn{
    width:100%;
    text-align:center;
    padding:14px;
  }
}

/* Mobile */
@media(max-width:575px){
  .roof-topbar{
    padding:9px 0;
  }

  .roof-topbar-inner{
    flex-direction:column;
    align-items:flex-start;
    gap:10px;
  }

  .roof-top-right{
    width:100%;
    justify-content:space-between;
  }

  .roof-top-left,
  .roof-top-right a{
    font-size:12px;
  }

  .roof-top-right a:last-child{
    padding:8px 12px;
  }

  .roof-navbar{
    padding:10px;
  }

  .roof-nav-box{
    padding:11px;
    border-radius:18px;
  }

  .roof-logo-frame{
    width:56px;
    height:52px;
    min-width:56px;
  }

  .roof-brand{
    gap:7px;
    max-width:calc(100% - 54px);
  }

  .roof-brand-text h2{
    font-size:18px;
  }

  .roof-brand-text small{
    font-size:6.8px;
    letter-spacing:.6px;
    white-space:normal;
    line-height:1.2;
  }
}

/* Extra small */
@media(max-width:390px){
  .roof-top-right{
    flex-direction:column;
    align-items:flex-start;
  }

  .roof-top-right a:last-child{
    width:100%;
    text-align:center;
  }

  .roof-logo-frame{
    width:50px;
    height:48px;
    min-width:50px;
  }

  .roof-brand-text h2{
    font-size:16px;
  }

  .roof-brand-text small{
    display:none;
  }
}
      `}</style>
    </>
  );
}