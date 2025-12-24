import React from "react";
import Head from "next/head";

export default function LandingPage() {
  // Track Meta Lead on CTA click
  const trackLeadAndRedirect = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }

    // Redirect after firing event
    window.location.href =
      "https://tally.so/forms/xXrpJG/edit";
  };

  return (
    <div className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen">
      <Head>
        <title>For Interior Designers</title>
      </Head>

      <div className="mx-auto landp text-center">
        <center>
          <div className="hero_sub_div"></div>

          <div className="h_head">
            <p className="hero_sub">
              <span className="whitediv">
                For Established Interior Design Firms ONLY!
              </span>
            </p>

            <p className="hero_head mt-10">
              We send 10 Qualified Consultations
              <span className="salescall mr-2"> Weekly. </span>
              Fill your calendar with qualified bookings
              <span className="marketing ml-1"> without depending</span> on
              referrals or
              <span className="salescall ml-1"> Instagram.</span>
            </p>

            <div className="hero_sub_div mt-8 mb-14">
              <p className="hero_sub">
                Our system connects you with clients actively searching for
                design studios on
                <span className="salescall"> Google </span>—turning intent into
                booked consultations. We make it easier for clients already
                looking for you to
                <span className="salescall"> find you.</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <iframe
              style={{
                display: "block",
                margin: "auto",
                width: "1042px",
                maxWidth: "100%",
                aspectRatio: "1.77",
              }}
              src="https://killerplayer.com/watch/video/2586e38e-302e-4472-9bdb-022a4f50beec"
              frameBorder="0"
              allow="autoplay; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </center>

        {/* ===== CTA 1 ===== */}
        <center>
          <div className="call mt-20 mb-20">
            <p className="text-white click mt-4 mb-4">
              Learn More From My YouTube
            </p>

            <button
              onClick={trackLeadAndRedirect}
              className="install mb-6"
            >
              Yes! I want a Calendar Full of Appointments
            </button>
          </div>
        </center>

        {/* ===== STEPS ===== */}
        <center>
          <p className="success_min step2">
            STEP 1 – GET TO KNOW OUR SYSTEM
          </p>
          <div className="success_div">
            <p className="success_call">
              Before booking a call, it helps to understand how our system works
              and see if we’re a good fit. The best place to start is our YouTube
              channel, where we share free training and real examples.
            </p>
          </div>

          <img className="booking hidden sm:block" src="./Ytfunell.png" />
          <img className="booking block sm:hidden" src="./ytmob.png" />

          <p className="success_min step2">
            STEP 2 – GET ACCESS TO OUR FREE GUIDE
          </p>
          <div className="success_div">
            <p className="success_call">
              This free guide breaks down a simple system for attracting
              residential and commercial clients—without referrals, endless
              Instagram posting, or guesswork. The link is available in every
              YouTube video description.
            </p>
          </div>

          <img className="booking" src="./hotel.png" />

          <p className="success_min step2">
            STEP 3 – BOOK A CALL
          </p>
          <div className="success_div">
            <p className="success_call">
              If you’d like us to implement this system so qualified residential
              and commercial clients book calls with you weekly—without relying
              on referrals or Instagram—you can book a call with me.
              <br /><br />
              This is not a sales call. There’s no pressure or hard selling.
              The goal is simply to walk you through the system and see if it’s
              a good fit.
            </p>
          </div>

          <img className="booking hidden sm:block" src="./bookcall.png" />
          <img className="booking block sm:hidden" src="./bookmin.png" />
        </center>
      </div>

      {/* ===== CTA 2 ===== */}
      <center>
        <div className="call mt-20 mb-20">
          <p className="text-white click mt-4 mb-4">
            Learn More From My YouTube
          </p>

          <button 
            onClick={trackLeadAndRedirect}
            className="install mb-6"
          >
            Yes! I want a Calendar Full of Appointments
          </button>
        </div>
      </center>
    </div>
  );
}
