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
    fetch('/api/fb-lead', { method: 'POST' });
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

      <div className="mx-auto text-center">
        <center>
          <p className="notice mb-10">
            <span className="not"> WHO IS THIS FOR </span>- For Realtors Tired
            of
            <span className="bg-yellow-300 text-black px-1 font-bold">
              Unpredictable Lead{" "}
            </span>{" "}
            flow & Chasing Referrals{" "}
          </p>
          <div className="h_head ">
            <p className="hero_head">
              Close
              <span className="salescall"> 3+ Deals Monthly </span> — Without
              Posting Daily or Wondering Where Your Next Client Will Come From
            </p>
            <div className="hero_sub_div mt-4">
              <p className="hero_sub">
                {" "}
                Get the <span className="salescall">
                  Lead Pump™ System{" "}
                </span>{" "}
                that delivers Preapproved buyers & Motivated sellers on{" "}
                <span className="sales">AutoPilot</span>.
                <span className="text_under">
                  {" "}
                  No Monthly Fees, posting on Social Media
                </span>
                <span className="salescall text_under"> Referral-Begging</span>
              </p>
            </div>
          </div>
        </center>

        <center className="mt-10">
          <div className="button_bg">
            <p className="qualifier">
              Usually $997 <span className="free">FREE</span> TODAY
            </p>
            <center>
              <p className="mb-2"></p>
              <button
                className="install mb-14"
                onClick={() =>
                  (window.location.href =
                    "https://cal.com/omojuwon/30min?overlayCalendar=true")
                }
              >
                GET ACCESS TO LEAD PUMP
              </button>
            </center>
          </div>
        </center>
      </div>

      <div className="bg-white screenshot">
        <center>
          <p className="testimonila_header rev_head text-white text-center">
            <span className="text-white mb-20">
              A while back, they had the same issues you’re going through.{" "}
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
          
            <center className="mt-10">
              <div className="button_bg">
                <p className="qualifier">
                  Usually $997 <span className="free">FREE</span> TODAY
                </p>
                <center>
                  <p className="mb-2"></p>
                  <button
                    className="install mb-14"
                    onClick={() =>
                      (window.location.href =
                        "https://cal.com/omojuwon/30min?overlayCalendar=true")
                    }
                  >
                    GET ACCESS TO LEAD PUMP
                  </button>
                </center>
              </div>
            </center>
            
        </center>
      </div>
    </div>
  );
}
