import React from "react";
import Head from "next/head";

export default function LandingPage() {
  // Track Quora Lead + redirect
  const trackLeadAndRedirect = () => {
    if (typeof window !== "undefined" && window.qp) {
      window.qp("track", "GenerateLead");
    }

    // Redirect after firing event
    window.location.href = "https://tally.so/r/xXrpJG";
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
                <span className="salescall"> Google. </span> We make it easier for clients already
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

        {/* ===== STEPS (unchanged) ===== */}
        {/* ...your existing steps content stays exactly the same... */}
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
