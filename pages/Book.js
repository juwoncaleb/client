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
            Congrats! Your Call Has Been Booked.
          </p>
          <p className="text-white subbook">
            {" "}
            <span className=" font-bold bg-yellow-300 text-black ">
              IMPORTANT
            </span>{" "}
            Please complete these two quick steps to confirm your call. If we
            do not hear back, <br /> we will assume you are no longer interested and
            may offer your slot to someone else.
          </p>
          <div className="div_line"></div>

          <p className="AGent_text text-white">Step 1: Confirm Your Call </p>

          <p className="text-white subbook">
            Search your inbox for Lead Pump. Click{" "}
            <span className="bolderText">Yes</span> and for the calendar
            invitation
          </p>

          <img className="confirm" src="./ld.jpg" />
          <div className="div_line"></div>

          <p className="AGent_text text-white">
            Step 2: Learn How Our Process Works{" "}
          </p>

          <p className="text-white subbook">
            Watch a complete walkthrough of how
            we will work together.
          </p>
          <div className="pre_div"></div>
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
          
          </div>
        </div>
      </div>
    </div>
  );
}
