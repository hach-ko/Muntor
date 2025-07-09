import React from "react";

const Section = React.forwardRef(function Section({ title, children, style, hoverCards = false }, ref) {
  return (
    <section ref={ref} style={{ marginBottom: "2.5rem", ...style }}>
      {title && (
        <h2 style={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1.2rem",
          letterSpacing: "-1px"
        }}>{title}</h2>
      )}
      <div
        className={hoverCards ? "section-cards-hover" : ""}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "1.5rem"
        }}
      >
        {children}
      </div>
      <style>
        {`
        .section-cards-hover .interactive-card {
          transition: box-shadow 0.28s cubic-bezier(.4,2,.6,1), transform 0.22s cubic-bezier(.4,2,.6,1);
          box-shadow: 0 2px 12px 0 #00000033;
          border-radius: 1rem;
          background: #181a20;
          border: none;
          cursor: pointer;
          will-change: transform, box-shadow;
        }
        .section-cards-hover .interactive-card:hover, 
        .section-cards-hover .interactive-card:focus {
          box-shadow: 0 16px 40px 0 #646cff77, 0 4px 16px 0 #23263a55;
          transform: translateY(-10px) scale(1.06) rotate(-1deg);
          z-index: 2;
        }
        `}
      </style>
    </section>
  );
});

export default Section;