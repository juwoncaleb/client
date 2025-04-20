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
          content="https://ik.imagekit.io/juwoncaleb/image_wamHggfiv.png?updatedAt=1744293661643"
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
          <div className="hero_sub_div md:mt-20 mt-10">
            <p className="hero_sub">
              {" "}
              <span className="cau text-white"> IMPORTANCE NOTICE </span> For Realtors Stuck at{" "}
              <span className="text-black">$70K GCI </span>— Fed up with
              unrealistic sellers, indecisive buyers. 
            </p>
          </div>
          <div className="h_head ">
            <p className="hero_head">
              Get 10
              <span className="salescall"> Listing </span> Opportunities in 30
              days — Without Burning Cash on Monthly Marketing,{" "}
              <span className="salescall">Dependence</span> on Referrals.
            </p>
            <div className="hero_sub_div mt-4">
              <p className="hero_sub">
                <span className="salescall">Lead Pump™</span> System connects
                you to Preapproved buyers & Motivated sellers - Sellers come to
                You - not the other way around
                <span className="salescall">
                  {" "}
                  No Cold calls or Door knocking{" "}
                </span>
              </p>
            </div>
          </div>
        </center>

        <center>
          <div className="call mt-14">
            <p className="text-white prop mt-4 mb-4">
              Ready to fill your Pipeline today?
            </p>
            <button
              className="install mb-6"
              onClick={() =>
                (window.location.href =
                  "https://tally.so/r/wkkqkZ")
              }
            >
              Click to claim your area exclusivity
            </button>
          </div>
        </center>
      </div>
      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-black mb-20">
              It is challenging for me , i went months without Referrals -
              RICHARD
            </span>
          </p>{" "}
        </center>
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <iframe
              src="https://player.vimeo.com/video/1070872120?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              className="w-full h-full"
              title="Richard"
              style={{
                border: "none", // Remove the iframe border
                aspectRatio: "16/9", // Maintain the aspect ratio of the video
              }}
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center tts mt-14 px-4">
          <img className="test_Card" src="./a1.png" alt="testimonial" />
          <img className="test_Card" src="./a2.png" alt="testimonial" />
          <img className="test_Card" src="./a6.png" alt="testimonial" />
          <img className="test_Card" src="./luka.jpg" alt="testimonial" />
        </div>
        <center>
          <div className="call">
            <p className="text-white prop mt-4 mb-4">
              Ready to fill your Pipeline today?
            </p>
            <button
              className="install mb-6"
              onClick={() =>
                (window.location.href =
                  "https://tally.so/r/wkkqkZ")
              }
            >
              Click to claim your area exclusivity
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}
