import Link from "next/link";
import React, { useEffect } from "react";
import Head from "next/head";

export default function LandingPage() {
  // Fire the Facebook Pixel 'Lead' event when the page loads
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);
  useEffect(() => {
    fetch("/api/fb-lead", { method: "POST" });
  }, []);
  const scrollToTestimonials = () => {
    const element = document.getElementById("testimonials");
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen ">
      <Head>
        <title>
          Lead Pump™ for Realtors - Get Clients Without Posting Daily
        </title>
        <meta
          property="og:title"
          content="Close 3 deals momthly without Chasing Referrals"
        />
        <meta
          property="og:description"
          content="For Realtors tired of chasing referrals — get preapproved buyers & motivated sellers on autopilot. No posting. No retainers."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/juwoncaleb/Screenshot%202025-04-29%20164345_mnrAnKNT4.jpg?updatedAt=1745941553167"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lead Pump™ for Realtors - Get Clients Without Posting Daily"
        />
        <meta
          name="twitter:description"
          content="For Realtors tired of chasing referrals — get preapproved buyers & motivated sellers on autopilot."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
      </Head>

      <div className="mx-auto landp text-center">
        <center>
          <div className="hero_sub_div ">
            <p className="hero_sub">
              {" "}
            <span className="cau mr-1"> IMPORTANCE NOTICE </span> For full time Real estate Brokers
              Stuck at <span className="text-white">$70K GCI </span>— Fed up
              with unrealistic sellers, indecisive buyers.
            </p>
          </div>
          <div className="h_head ">
            <p className="hero_head">
              Get 3+
              <span className="salescall"> Listing </span> Opportunities in 30
              days — Without Burning Cash on{" "}
              <span className="marketing">Marketing</span>,{" "}
            </p>
            <div className="hero_sub_div mt-4 mb-14">
              <p className="hero_sub">
                <span className="salescall">Lead Pump™</span> System connects
                you to Preapproved buyers & Motivated sellers - Sellers come to
                You - not the other way around
                <span className="salescall">
                  {" "}
                  No Cold calls or Buying Leads{" "}
                </span>
              </p>
            </div>
          </div>
          <iframe
            
            className="video"
            src="https://killerplayer.com/watch/video/4a9f8b09-76ae-41a9-9199-bdefa30f3d6b"
            frameBorder="0"
            allow="autoplay; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </center>

        <center>
          <div className="call mt-20 mb-20">
            <p className="text-white  mt-4 mb-4">
              Ready to fill your Pipeline today?
            </p>
            <button
              className="install mb-6"
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "Scheduled"); // Fire custom FB event for scheduling
                }
                fetch("/api/fb-scheduled", { method: "POST" }); // Hit your scheduled endpoint
                window.location.href = "https://cal.com/omojuwon/30min"; // Redirect to cal.com
              }}
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </center>
      </div>
      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-white mb-20">Testimonial and Reviews</span>
          </p>{" "}
        </center>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center tts mt-14 px-4">
    
          <img className="test_Card" src="./a6.png" alt="testimonial" />
          <img className=" cdh" src="./luka.jpg" alt="testimonial" />
        </div>
        <center>
          <div className="call">
            <p className="text-white prop mt-4 mb-4">
              Ready to fill your Pipeline today?
            </p>
            <button
              className="install mb-6"
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "Scheduled"); // Fire custom FB event for scheduling
                }
                fetch("/api/fb-scheduled", { method: "POST" }); // Hit your scheduled endpoint
                window.location.href = "https://cal.com/omojuwon/30min"; // Redirect to cal.com
              }}
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}
