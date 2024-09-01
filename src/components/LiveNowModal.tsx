import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LiveNowModal = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/questions"), 3000);
  }, []);

  return (
    <div id="livenow">
      <img id="confetti" />
      <div id="livenow-modal">
        <div id="livenow-text">
          <h1 id="title">We are Live Now!</h1>
          <h3 id="livenow-desc">
            Our new feature is now{" "}
            <b className="font-semibold">Live and ready</b> for you to explore.
            Go ahead and give it a try
          </h3>
        </div>
        <a id="getstarted-button" href="/questions">
          Get Started
        </a>
      </div>
    </div>
  );
};
