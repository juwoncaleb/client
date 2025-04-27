import { getCalApi } from "@calcom/embed-react";
import React, { useRef } from "react";

export default function Review() {
  const calendlyRef = useRef(null);

  const openCalAndTrack = async () => {
    // Track Facebook 'Schedule' event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Schedule");
    }

    // Call your server for Conversion API tracking
    fetch("/api/fb-schedule", { method: "POST" }).catch((err) => {
      console.error("FB CAPI error:", err);
    });

    // Open Cal.com popup
    const cal = await getCalApi({ namespace: "30min" });
    cal("open", {
      calLink: "omojuwon/30min",
      layout: "month_view",
    });
  };

  return (
    <div className="bg-black">
      <div className="vsl_div">
        <center>
          <p className="AGent_text text-white">
            Every successful Agent, we worked with started just like
            <span className="bg-yellow-300 text-black px-1 font-bold"> YOU </span>
          </p>
          <div className="pre_div">
            <p className="pre_meet">
              Please Watch the short video below — it gives a glimpse into how our system works. To Book a <span className=" font-bold bg-yellow-300 text-black "> MEETING </span> click the button below
            </p>
          </div>
          <div>
            <iframe
              className="video"
              src="https://killerplayer.com/watch/video/7ad7082b-e455-4e0b-ab68-1e7a81012276"
              frameBorder="0"
              allow="autoplay; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>

          {/* Book a Call button */}
          <button onClick={openCalAndTrack} className="next_btn mt-10 mb-4">
            Book a Call
          </button>
        </center>
      </div>

      {/* Second Book a Call button */}
      <div className="rest_review">
        <div className="caution flex justify-center gap-20">
          <img className="book" src="./right.png" />
          <div className="cautpn">
            <p className="secre mb-6">Right to Reservation</p>
            <p className="rese">
              We take on 5 new clients every 3 months so we can give you our full attention and do amazing work.- We <span className="chase_bold">CHASE</span> perfection and excellence.
            </p>
            <button onClick={openCalAndTrack} className="next_btn mt-10 mb-14">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
