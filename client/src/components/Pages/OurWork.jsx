import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GeoAlt,
  StarFill,
  ArrowRight,
  TelephoneFill,
  Whatsapp,
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";

export default function OurWork() {
  const [active, setActive] = useState("All");

  const projects = [
    {
      title: "Ridge Tile Repair",
      category: "Repairs",
      location: "Didsbury, Manchester",
      before: "/Images/11.png",
      after: "/Images/11.png",
      review: "Called at 9am, fixed by 2pm. Exactly what they quoted.",
      customer: "David H.",
    },
    {
      title: "Full Slate Replacement",
      category: "Replacements",
      location: "Chorlton, Manchester",
      before: "/Images/9.png",
      after: "/Images/10.png",
      review: "Team were here 4 days, cleaned up every evening. Brilliant.",
      customer: "Sandra B.",
    },
    {
      title: "GRP Flat Roof",
      category: "Flat Roofs",
      location: "Salford",
      before: "/Images/19.png",
      after: "/Images/8.png",
      review: "Six years of leaks sorted in two days. 25 year guarantee.",
      customer: "Janet W.",
    },
    {
      title: "Chimney Repointing",
      category: "Chimneys",
      location: "Withington",
      before: "/Images/17.png",
      after: "/Images/18.png",
      review: "Most professional of the three quotes I got.",
      customer: "Mohammed R.",
    },
    {
      title: "Gutter Replacement",
      category: "Guttering",
      location: "Sale",
      before: "/Images/15.png",
      after: "/Images/16.png",
      review: "Quick, tidy, exactly as quoted. Booked them again.",
      customer: "Gary F.",
    },
    {
      title: "Emergency Storm Repair",
      category: "Repairs",
      location: "Gorton",
      before: "/Images/13.png",
      after: "/Images/14.png",
      review: "At my door by 10am after calling at 8pm. Incredible.",
      customer: "Patricia O.",
    },
  ];

  const categories = [
    "All",
    "Repairs",
    "Replacements",
    "Flat Roofs",
    "Chimneys",
    "Guttering",
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <>
      <main className="roof-work-page">
        <section className="roof-work-hero">
          <div className="container">
            <div className="roof-work-hero-content">
              <span>Home / Our Work</span>

              <h1>
                Our Roofing <strong>Work</strong>
              </h1>

              <p>Real roofing jobs completed across Liverpool.</p>
            </div>
          </div>
        </section>

        <section className="roof-portfolio-section">
          <div className="container">
            <div className="roof-filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={active === cat ? "active" : ""}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="row gy-5">
              {filtered.map((item, index) => (
                <ProjectCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="roof-testimonials-section">
          <div className="container">
            <div className="row gy-4">
              {[
                {
                  name: "David Hartley",
                  area: "Didsbury",
                  text: "Called Peak Roofing at 8pm. At my house by 10am. Sorted by lunch. Exactly as quoted.",
                },
                {
                  name: "Sandra Booth",
                  area: "Chorlton",
                  text: "The team were here 4 days. Cleaned up every evening. Result is beautiful.",
                },
                {
                  name: "Janet Williams",
                  area: "Sale",
                  text: "Three other roofers failed to fix it. Peak replaced the whole flat roof.",
                },
              ].map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="roof-testimonial-card">
                    <Stars />
                    <p>"{item.text}"</p>
                    <h5>{item.name}</h5>
                    <span>{item.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roof-work-cta">
          <div className="container">
            <div className="roof-work-cta-wrap">
              <h3>Like what you see? Get a free quote.</h3>

              <div className="roof-cta-actions">
                <a href="tel:+447836699933" className="roof-call-work-btn">
                  <TelephoneFill /> Call
                </a>

                <a
                  href="https://wa.me/447836699933"
                  target="_blank"
                  rel="noreferrer"
                  className="roof-whatsapp-work-btn"
                >
                  <Whatsapp /> WhatsApp
                </a>

                <Link to="/contact" className="roof-quote-work-btn">
                  Get Quote <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

.roof-work-page{
  font-family:'Outfit',sans-serif;
  overflow:hidden;
  background:#f4fff4;
  color:#111827;
}

.roof-work-hero{
  padding:130px 0 95px;
  text-align:center;
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.2),transparent 32%),
    radial-gradient(circle at bottom right,rgba(0,0,0,.08),transparent 35%),
    linear-gradient(135deg,#ffffff,#f4fff4);
}

.roof-work-hero-content span{
  color:#238636;
  font-size:13px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;
}

.roof-work-hero-content h1{
  font-family:'Playfair Display',serif;
  font-size:68px;
  font-weight:900;
  margin:18px 0 12px;
  color:#050805;
}

.roof-work-hero-content h1 strong{
  color:#238636;
}

.roof-work-hero-content p{
  color:#4b5563;
  font-size:19px;
  margin:0;
}

.roof-portfolio-section{
  padding:95px 0;
  background:#f4fff4;
}

.roof-filter-buttons{
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:55px;
}

.roof-filter-buttons button{
  border:1px solid rgba(72,184,72,.18);
  background:#ffffff;
  color:#4b5563;
  padding:11px 24px;
  border-radius:999px;
  font-size:14px;
  font-weight:900;
  transition:.35s ease;
}

.roof-filter-buttons button:hover,
.roof-filter-buttons button.active{
  background:linear-gradient(135deg,#238636,#55c755);
  color:#fff;
  transform:translateY(-5px);
  box-shadow:0 16px 32px rgba(72,184,72,.25);
}

.roof-project-card{
  height:100%;
  overflow:hidden;
  border-radius:34px;
  background:#ffffff;
  border:1px solid rgba(72,184,72,.16);
  box-shadow:0 20px 45px rgba(17,24,39,.08);
  transition:.45s ease;
}

.roof-project-card:hover{
  transform:translateY(-12px);
  box-shadow:0 35px 75px rgba(35,134,54,.22);
}

.roof-before-after-slider{
  position:relative;
  height:340px;
  overflow:hidden;
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
  min-width:100%;
  height:100%;
  object-fit:cover;
}

.roof-ba-range{
  position:absolute;
  inset:0;
  z-index:9;
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
  width:50px;
  height:50px;
  border-radius:50%;
  background:#ffffff;
  color:#238636;
  display:flex;
  align-items:center;
  justify-content:center;
  border:2px solid #238636;
  box-shadow:0 10px 26px rgba(0,0,0,.28);
  font-size:18px;
}

.roof-ba-labels{
  position:absolute;
  left:18px;
  right:18px;
  bottom:18px;
  z-index:10;
  display:flex;
  justify-content:space-between;
  pointer-events:none;
}

.roof-ba-labels span{
  color:#fff;
  font-size:10px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  padding:7px 14px;
  border-radius:999px;
  box-shadow:0 8px 20px rgba(0,0,0,.24);
}

.roof-before-label{
  background:#050805;
}

.roof-after-label{
  background:linear-gradient(135deg,#238636,#55c755);
}

.roof-work-body{
  padding:34px;
}

.roof-work-meta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  flex-wrap:wrap;
  margin-bottom:18px;
}

.roof-work-meta span{
  background:#e6ffe6;
  color:#238636;
  font-size:10px;
  font-weight:900;
  letter-spacing:2px;
  text-transform:uppercase;
  padding:8px 14px;
  border-radius:999px;
}

.roof-work-meta p{
  margin:0;
  color:#4b5563;
  font-size:13px;
  font-weight:800;
  display:flex;
  align-items:center;
  gap:5px;
}

.roof-work-meta svg{
  color:#238636;
}

.roof-work-body h3{
  color:#111827;
  font-size:28px;
  font-weight:900;
  margin-bottom:22px;
}

.roof-review-box{
  background:#e6ffe6;
  border:1px solid rgba(72,184,72,.16);
  border-radius:24px;
  padding:22px;
  margin-bottom:26px;
}

.roof-review-box p{
  margin:0;
  color:#111827;
  font-size:16px;
  line-height:1.7;
  font-style:italic;
}

.roof-work-footer{
  border-top:1px solid rgba(72,184,72,.16);
  padding-top:24px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
}

.roof-stars{
  display:flex;
  gap:3px;
  color:#55c755;
  margin-bottom:6px;
}

.roof-work-footer h5{
  margin:0;
  color:#111827;
  font-weight:900;
  font-size:14px;
}

.roof-similar-btn{
  background:linear-gradient(135deg,#238636,#55c755);
  color:#fff;
  text-decoration:none;
  padding:13px 22px;
  border-radius:999px;
  font-size:13px;
  font-weight:900;
  display:flex;
  align-items:center;
  gap:8px;
  transition:.35s ease;
  box-shadow:0 14px 30px rgba(72,184,72,.25);
}

.roof-similar-btn:hover{
  color:#fff;
  transform:translateY(-5px) scale(1.04);
  box-shadow:0 22px 42px rgba(72,184,72,.36);
}

.roof-testimonials-section{
  background:
    radial-gradient(circle at top left,rgba(72,184,72,.14),transparent 28%),
    linear-gradient(135deg,#050805 0%,#101510 55%,#1d2a1d 100%);
  padding:90px 0;
}

.roof-testimonial-card{
  height:100%;
  background:#ffffff;
  border-left:5px solid #238636;
  border-radius:24px;
  padding:30px;
  box-shadow:0 20px 48px rgba(0,0,0,.18);
  transition:.4s ease;
}

.roof-testimonial-card:hover{
  transform:translateY(-10px);
}

.roof-testimonial-card p{
  color:#111827;
  font-size:15px;
  line-height:1.7;
  font-style:italic;
  margin:14px 0 22px;
}

.roof-testimonial-card h5{
  margin:0;
  color:#111827;
  font-weight:900;
}

.roof-testimonial-card span{
  color:#4b5563;
  font-size:13px;
  font-weight:700;
}

.roof-work-cta{
  background:linear-gradient(135deg,#050805,#1d2a1d);
  padding:42px 0;
}

.roof-work-cta-wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
  flex-wrap:wrap;
}

.roof-work-cta h3{
  color:#ffffff;
  font-size:30px;
  font-weight:900;
  margin:0;
}

.roof-cta-actions{
  display:flex;
  gap:13px;
  flex-wrap:wrap;
}

.roof-call-work-btn,
.roof-whatsapp-work-btn,
.roof-quote-work-btn{
  text-decoration:none;
  min-height:50px;
  padding:0 26px;
  border-radius:999px;
  font-weight:900;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  transition:.35s ease;
}

.roof-call-work-btn,
.roof-quote-work-btn{
  background:#ffffff;
  color:#050805;
}

.roof-whatsapp-work-btn{
  background:#25D366;
  color:#fff;
}

.roof-call-work-btn:hover,
.roof-whatsapp-work-btn:hover,
.roof-quote-work-btn:hover{
  color:#fff;
  background:#238636;
  transform:translateY(-6px);
}

@media(max-width:991px){
  .roof-work-hero-content h1{
    font-size:50px;
  }

  .roof-work-cta-wrap{
    justify-content:center;
    text-align:center;
  }
}

@media(max-width:575px){
  .roof-work-hero{
    padding:90px 0 65px;
  }

  .roof-work-hero-content h1{
    font-size:38px;
  }

  .roof-work-hero-content p{
    font-size:16px;
  }

  .roof-before-after-slider{
    height:260px;
  }

  .roof-work-body{
    padding:26px 22px;
  }

  .roof-work-body h3{
    font-size:23px;
  }

  .roof-similar-btn,
  .roof-call-work-btn,
  .roof-whatsapp-work-btn,
  .roof-quote-work-btn{
    width:100%;
    justify-content:center;
  }

  .roof-cta-actions{
    width:100%;
  }
}
      `}</style>
    </>
  );
}

function ProjectCard({ item }) {
  const [value, setValue] = useState(50);

  return (
    <div className="col-lg-6">
      <div className="roof-project-card">
        <div className="roof-before-after-slider">
          <img
            src={item.after}
            alt={`${item.title} after`}
            className="roof-ba-img"
          />

          <div className="roof-before-layer" style={{ width: `${value}%` }}>
            <img
              src={item.before}
              alt={`${item.title} before`}
              className="roof-ba-img"
            />
          </div>

          <input
            min="0"
            max="100"
            type="range"
            value={value}
            className="roof-ba-range"
            onChange={(e) => setValue(e.target.value)}
          />

          <div className="roof-ba-line" style={{ left: `${value}%` }}>
            <div className="roof-ba-handle">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>

          <div className="roof-ba-labels">
            <span className="roof-before-label">Before</span>
            <span className="roof-after-label">After</span>
          </div>
        </div>

        <div className="roof-work-body">
          <div className="roof-work-meta">
            <span>{item.category}</span>

            <p>
              <GeoAlt /> {item.location}
            </p>
          </div>

          <h3>{item.title}</h3>

          <div className="roof-review-box">
            <p>"{item.review}"</p>
          </div>

          <div className="roof-work-footer">
            <div>
              <Stars />
              <h5>{item.customer}</h5>
            </div>

            <Link to="/contact" className="roof-similar-btn">
              Similar Quote <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="roof-stars">
      <StarFill />
      <StarFill />
      <StarFill />
      <StarFill />
      <StarFill />
    </div>
  );
}