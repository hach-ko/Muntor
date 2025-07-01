import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import "./Coming_Soon.css";

function ComingSoon() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Muntor - Coming Soon</title>
        <link rel="icon" type="image/png" href="/muntor/src/assets/logo.png" />
      </Helmet>
      <div className="coming-soon-page coming-soon-has-footer">
        <div
          className="coming-soon-container"
          key={location.pathname}
        >
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-text">We are working hard to bring this page to you!</p>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;