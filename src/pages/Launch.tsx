import { useState } from "react";
import { Header, LiveNowModal, Notify, TimerCard } from "../components";
import LightRocket1 from "../assets/light-rocket-1.svg";

export const Launch = () => {
  const [timerDidEnd, setTimerDidEnd] = useState(false);

  return (
    <>
      <Header />
      <img id="blob1" className="blob" />
      <img id="blob2" className="blob" />
      <div id="launch" className="poppins-regular">
        {timerDidEnd ? (
          <LiveNowModal />
        ) : (
          <>
            <div className="flex-col justify-center align-center">
              <h1 id="title">
                Launching New Module Soon!
                <img src={LightRocket1} className="logo" />
              </h1>
              <h3 id="desc">
                <span>Exciting things are in the works!</span> We're currently{" "}
                <b>Crafting a new feature</b> for you. Keep an eye out for
                updates – We're working to make it available soon!
              </h3>
            </div>
            <h2>GET READY FOR THE REVEAL!</h2>
            <TimerCard setTimerDidEnd={setTimerDidEnd} />
            <div className="w-80">
              <p className="mb-1">
                Be the first to know! Share your email and We'll notify you when
                it's live
              </p>
              <Notify />
            </div>
          </>
        )}
      </div>
    </>
  );
};
