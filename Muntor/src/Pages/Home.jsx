import { Helmet } from "react-helmet-async";
import "../index.css";
import image2 from "../assets/image2.png";
import Section from "../components/Section";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  // Handle form submit: redirect to home page
  const handleContactSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/muntor/src/assets/logo.png" />
      </Helmet>
      {/* Hero Section: image left, text right */}
      <div
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "3.5rem",
          marginBottom: "3.5rem",
          minHeight: "60vh",
          textAlign: "left",
          gap: "3rem",
        }}
      >
        <div className="image-container" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
          <img src={image2} alt="Mode-specific image" style={{ maxWidth: "320px", width: "30vw", minWidth: "180px" }} />
        </div>
        <div className="text-container" style={{ marginTop: 0, flex: "1 1 0", minWidth: 0 }}>
          <h2 className="text-3xl font-bold" style={{ marginBottom: "1.5rem" }}>Welcome to MUNTOR</h2>
          <p className="text" style={{ marginBottom: "2rem" }}>Your go-to platform for Model United Nations.</p>
          <Button onClick={handleLearnMore}>
            Learn More
          </Button>
        </div>
      </div>
      {/* Bubble Sections */}
      <Section
        title="About MUNTOR"
        style={{ marginTop: "0" }}
      >
        <p>
          MUNTOR is a comprehensive platform designed to enhance your Model United Nations experience. Whether you're a delegate, organizer, or enthusiast, MUNTOR provides the tools and resources you need to succeed.
        </p>
      </Section>
      <Section title="Upcoming Events" style={{ marginTop: "3rem" }}>
        <ul>
          <li>MUN Conference 2025 – 15th July 2025 (Online)</li>
          <li>Workshop: MUN Basics – 1st August 2025 (Campus Hall)</li>
        </ul>
      </Section>
      <Section title="Resources" style={{ marginTop: "3rem" }}>
        <ul>
          <li>Beginner’s Guide to MUN (PDF)</li>
          <li>Sample Position Papers</li>
          <li>Tips for First-Time Delegates</li>
        </ul>
      </Section>
      <Section title="Contact Us" style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-input" rows={4} required></textarea>
          <Button type="submit" style={{ marginTop: "0.5rem" }}>Send Message</Button>
        </form>
      </Section>
    </>
  );
}

export default Home;