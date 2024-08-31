import { useState } from "react";
import { TimerCard } from "../components";

export const Launch = () => {
  const [timerDidEnd, setTimerDidEnd] = useState(false);

  return (
    <div id="launch" className="poppins-regular">
      <div className="flex-col justify-center align-center">
        <div className="flex-row justify-center align-center">
          <img src="src/assets/light-rocket-1.svg" className="logo" />
          <h1>Launching New Module Soon!</h1>
        </div>
        <h3 className="px-3">
          Exciting things are in the works! We're currently{" "}
          <b>Crafting a new feature</b> for you. Keep an eye out for updates –
          We're working to make it available soon!
        </h3>
      </div>
      <h2>GET READY FOR THE REVEAL!</h2>
      <TimerCard setTimerDidEnd={setTimerDidEnd} />
      <div className="w-80">
        <p>
          Be the first to know! Share your email and We'll notify you when it's
          live
        </p>
        <div className="flex-row justify-center align-center gap-1">
          <input id="input-mail" placeholder="Please enter your email id" />
          <button id="notify-button">Notify Me</button>
        </div>
      </div>
    </div>
  );
};
