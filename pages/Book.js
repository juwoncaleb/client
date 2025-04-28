import { getCalApi } from "@calcom/embed-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function Review() {
  const calendlyRef = useRef(null);

  const openCalAndTrack = async () => {
    // Track Facebook 'Schedule' event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Schedule");
    }

    // Call your Conversion API
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
            See How you can fill your pipeline — Watch the Video & Book Your Free Strategy Call
          </p>
          <div className="pre_div">
            <p className="pre_meet">
              Please Watch the short video below — it gives a glimpse into how
              our system works. {" "}
              

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
          <Link href="https://cal.com/omojuwon/30min">
            <button onClick={openCalAndTrack} className="next_btn mt-10 mb-4">
              Book a Call
            </button>
          </Link>
        </center>
      </div>

      {/* Second Book a Call button below */}
      <div className="rest_review">
        <div className="caution flex justify-center gap-20">
          <img className="book" src="./right.png" />
          <div className="cautpn">
            <p className="secre mb-6">Right to Reservation</p>
            <p className="rese">
              We take on 5 new clients every 3 months so we can give you our
              full attention and do amazing work.- We{" "}
              <span className="chase_bold">CHASE</span> perfection and
              excellence.
            </p>
            {/* Book a Call button */}
            <Link href="https://cal.com/omojuwon/30min">
              <button onClick={openCalAndTrack} className="next_btn mt-10 mb-4">
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
