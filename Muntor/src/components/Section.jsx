import React from "react";
import styles from "../components_styles/Section.module.css";
import useScrollReveal from "../hooks/useScrollReveal";

const Section = React.forwardRef(function Section({ title, children, style }, ref) {
  const [innerRef, visible] = useScrollReveal();

  // Use the forwarded ref if provided, otherwise use the internal one
  const sectionRef = ref || innerRef;

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionBubble} ${
        visible ? styles.revealed : styles.hidden
      }`}
      style={style}
    >
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
});

export default Section;