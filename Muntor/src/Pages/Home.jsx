import { Helmet } from "react-helmet-async";
import "../index.css";
import image1 from "../assets/image1.png";
import Section from "../components/Section";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

function Home() {
  const navigate = useNavigate();

  // Animation state for logo
  const [logoVisible, setLogoVisible] = useState(false);

  // Animation state for sections
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  useEffect(() => {
    // Logo animation on mount
    setTimeout(() => setLogoVisible(true), 200);

    // Intersection Observer for sections (show/hide on scroll in/out)
    const handleIntersection = (setter) => (entries) => {
      setter(entries[0].isIntersecting);
    };

    const featuresObs = new window.IntersectionObserver(
      handleIntersection(setFeaturesVisible),
      { threshold: 0.01 } // Trigger as soon as section enters/leaves
    );
    const testimonialsObs = new window.IntersectionObserver(
      handleIntersection(setTestimonialsVisible),
      { threshold: 0.01 }
    );

    if (featuresRef.current) featuresObs.observe(featuresRef.current);
    if (testimonialsRef.current) testimonialsObs.observe(testimonialsRef.current);

    return () => {
      featuresObs.disconnect();
      testimonialsObs.disconnect();
    };
  }, []);

  const handleLearnMore = () => {
    navigate("/about");
  };

  // Feature and testimonial data
  const features = [
    {
      title: "Comprehensive Resources",
      desc: "Access guides, sample papers, and tips curated by experienced MUNers.",
      icon: "📚",
    },
    {
      title: "Upcoming Events",
      desc: "Stay updated with the latest MUN conferences, workshops, and webinars.",
      icon: "📅",
    },
    {
      title: "Community Support",
      desc: "Join a network of passionate delegates and mentors ready to help you succeed.",
      icon: "🤝",
    },
  ];

  const testimonials = [
    {
      quote: "“MUNTOR helped me prepare for my first MUN conference. The resources are top-notch!”",
      name: "Priya S.",
      icon: "🌟",
    },
    {
      quote: "“The events calendar keeps me in the loop. I never miss a workshop now!”",
      name: "Arjun M.",
      icon: "🗓️",
    },
    {
      quote: "“I love the community vibe. Everyone is so supportive!”",
      name: "Alex R.",
      icon: "🤗",
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/muntor/src/assets/logo.png" />
        <title>MUNTOR - Model UN Platform</title>
      </Helmet>
      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          minHeight: "68vh",
          textAlign: "left",
          gap: "2.2rem",
          background: "linear-gradient(90deg, #181a20 0%, #23263a 100%)",
          borderRadius: "2rem",
          boxShadow: "0 4px 32px 0 rgba(100, 108, 255, 0.10)",
          padding: "2.2rem 1rem",
          color: "#e5e7eb",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "5.5rem auto 2.5rem auto", // <-- This line shifts the card down!
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 0,
            width: "100%",
            maxWidth: "380px",
          }}
        >
          <img
            src={image1}
            alt="Model UN"
            style={{
              maxWidth: "380px",
              width: "32vw",
              minWidth: "160px",
              borderRadius: "1.5rem",
              filter: "brightness(0.95)",
              objectFit: "contain",
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
              transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
              animation: logoVisible ? "fadeInUp 1.2s both" : "none",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 0,
            flex: "1 1 340px",
            minWidth: 0,
            animation: "fadeInUp 1.2s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1.3rem",
              color: "#fff",
              letterSpacing: "-1px",
              textShadow: "0 2px 24px #646cff33",
              textAlign: "left",
              lineHeight: 1.1,
            }}
          >
            Welcome to <span style={{ color: "#646cff" }}>MUNTOR</span>
          </h1>
          <p
            style={{
              fontSize: "clamp(1.08rem, 2.5vw, 1.35rem)",
              marginBottom: "2.1rem",
              color: "#bfc4d0",
              maxWidth: 540,
              lineHeight: 1.6,
              textAlign: "left",
            }}
          >
            {/* Placeholder text for now */}
            Your all-in-one platform for Model United Nations. Connect, learn, and grow with resources, events, and a vibrant MUN community. <br />
            <span style={{ color: "#646cff" }}>#MUNLife #Debate #GlobalCitizens</span>
          </p>
          <Button
            onClick={handleLearnMore}
            style={{
              fontSize: "1.15rem",
              padding: "0.9rem 2.5rem",
              background: "linear-gradient(90deg, #646cff 60%, #23263a 100%)",
              color: "#fff",
              border: "none",
              boxShadow: "0 2px 12px 0 #646cff33",
              transition: "background 0.3s, transform 0.2s",
              outline: "none",
              cursor: "pointer",
            }}
            className="bubblyButton"
          >
            Learn More
          </Button>
        </div>
       
      </section>

      {/* Spacer to push "Why Choose MUNTOR?" below the fold, but not too much */}
      <div style={{ height: "3vh" }} />

      {/* Features Section */}
      <Section
        title={
          <span
            className={`section-title-animate${featuresVisible ? " section-title-animate--visible" : ""}`}
          >
            Why Choose MUNTOR?
          </span>
        }
        style={{ marginTop: "0" }}
        hoverCards={true}
      >
        <div
          ref={featuresRef}
          className={`scroll-fade-section${featuresVisible ? " scroll-fade-section--visible" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "1.2rem",
            opacity: 0,
            transform: "translateY(40px) scale(0.97)",
            transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className="interactive-card"
              style={{
                background: "#181a20",
                borderRadius: "1rem",
                boxShadow: "0 2px 12px 0 #646cff11",
                padding: "1.2rem 1.1rem",
                maxWidth: "270px",
                flex: "1 1 220px",
                color: "#e5e7eb",
                border: "none",
                animation: featuresVisible ? `fadeInUp 0.7s ${i * 0.12 + 0.1}s both` : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "150px",
                cursor: "pointer",
                transition: "box-shadow 0.22s, transform 0.18s cubic-bezier(.4,2,.6,1)",
              }}
              tabIndex={0}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{f.icon}</div>
              <h3 style={{ color: "#646cff", marginBottom: "0.6rem", fontSize: "1.15rem" }}>{f.title}</h3>
              <p style={{ color: "#bfc4d0", textAlign: "center", fontSize: "1rem" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title={
          <span
            className={`section-title-animate${testimonialsVisible ? " section-title-animate--visible" : ""}`}
          >
            What Our Users Say
          </span>
        }
        style={{ marginTop: "4.5rem" }}
        hoverCards={true}
      >
        <div
          ref={testimonialsRef}
          className={`scroll-fade-section${testimonialsVisible ? " scroll-fade-section--visible" : ""}`}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "1.2rem",
            opacity: 0,
            transform: "translateY(40px) scale(0.97)",
            transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="interactive-card"
              style={{
                background: "#181a20",
                borderRadius: "1rem",
                boxShadow: "0 2px 12px 0 #646cff11",
                padding: "1.2rem 1.1rem",
                maxWidth: "270px",
                flex: "1 1 220px",
                color: "#e5e7eb",
                border: "none",
                animation: testimonialsVisible ? `fadeInUp 0.7s ${i * 0.12 + 0.1}s both` : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "150px",
                cursor: "pointer",
                transition: "box-shadow 0.22s, transform 0.18s cubic-bezier(.4,2,.6,1)",
              }}
              tabIndex={0}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>{t.icon}</div>
              <p style={{ color: "#bfc4d0", textAlign: "center", fontStyle: "italic", fontSize: "1rem" }}>{t.quote}</p>
              <span style={{ fontWeight: 600, color: "#646cff", marginTop: "0.6rem", fontSize: "0.98rem" }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Animations & Interactivity */}
      <style>
        {`
        .logo-animate {
          opacity: 0;
          transform: scale(0.85);
        }
        .logo-animate.logo-animate--visible {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        .section-title-animate {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          display: inline-block;
          transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
        }
        .section-title-animate--visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        .interactive-card {
          will-change: transform, box-shadow;
        }
        .interactive-card:hover, .interactive-card:focus {
          box-shadow: 0 8px 32px 0 #646cff55;
          transform: scale(1.045) rotate(-1deg);
          z-index: 2;
        }
        .bubblyButton {
          transition: background 0.2s, color 0.2s, transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
        }
        .bubblyButton:hover, .bubblyButton:focus {
          background: linear-gradient(90deg, #7a7cff 60%, #23263a 100%);
          color: #fff;
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 32px 0 #646cff22;
        }
        .scroll-fade-section {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
        }
        .scroll-fade-section--visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
          transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
        }
        @media (max-width: 900px) {
          section[style] {
            flex-direction: column !important;
            gap: 2rem !important;
            padding: 1.2rem !important;
            max-width: 98vw !important;
            min-height: 80vh !important;
          }
          .logo-animate, .logo-animate.logo-animate--visible {
            max-width: 220px !important;
            width: 60vw !important;
          }
        }
        @media (max-width: 600px) {
          section[style] {
            flex-direction: column !important;
            gap: 1rem !important;
            padding: 0.5rem !important;
            max-width: 100vw !important;
            min-height: 70vh !important;
          }
          h1 {
            font-size: 1.5rem !important;
          }
          .logo-animate, .logo-animate.logo-animate--visible {
            max-width: 140px !important;
            width: 80vw !important;
          }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </>
  );
}

export default Home;