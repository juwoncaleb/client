import React, { useEffect, useRef } from "react";

export default function Review() {
  const calendlyRef = useRef(null);

  const handleScroll = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Client-side Pixel event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Schedule");
    }

    // Server-side CAPI call
    fetch("/api/fb-schedule", {
      method: "POST",
    }).catch((err) => {
      console.error("FB CAPI error:", err);
    });
  }, []);

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
              Please Watch the short video below — it gives a glimpse into how our system works, helps you get ready for our meeting.
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
        </center>
      </div>

      <div className="rest_review">
        <div className="caution flex justify-center gap-20">
          <img className="book" src="./right.png" />
          <div className="cautpn">
            <p className="secre mb-6">Right to Reservation</p>
            <p className="rese">
              We take on 5 new clients every 3 months so we can give you our full attention and do amazing work.- We <span className="chase_bold">CHASE</span> perfection and excellence.
            </p>
            <button onClick={handleScroll} className="next_btn mt-10 mb-14">
              Book a Call
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-white mb-20">
              A while back, they had the same issues you’re going through.
            </span>
          </p>
        </center>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center tts mt-14 px-4">
          <img className="test_Card" src="./a1.png" alt="testimonial" />
          <img className="test_Card" src="./a2.png" alt="testimonial" />
          <img className="test_Card" src="./a6.png" alt="testimonial" />
          <img className="test_Card" src="./luka.jpg" alt="testimonial" />
        </div>
      </div>
    </div>
  );
}
