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
        <title>For Interior designers</title>
        <meta
          property="og:title"
          content="Close 3 deals momthly without Chasing Referrals"
        />
        <meta property="og:description" content="For Interior designers." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/juwoncaleb/Screenshot%202025-04-29%20164345_mnrAnKNT4.jpg?updatedAt=1745941553167"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="For Interior designers" />
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
          <div className="hero_sub_div "></div>
          <div className="h_head ">
            <p className="hero_sub">
              <span className=" whitediv">
                For Established Interior Design Firms ONLY!
              </span>
            </p>
            <p className="hero_head mt-10">
              We will send 10 Qualified Consultations
              <span className="salescall mr-2"> Weekly. </span> Fill your
              Calender with Qualified booking
              <span className="marketing ml-1"> Without depending</span> on
              Referrals or <span className="salescall mr-2"> Instagram. </span>
            </p>
            <div className="hero_sub_div mt-8 mb-14">
              <p className="hero_sub">
                Our system connects you with clients searching for design
                Studios on
                <span className="salescall"> Google </span> — turns intent into
                booked consultations. We make it easier for clients looking for
               design services to
                <span className="salescall"> Find You</span>
              </p>
            </div>
          </div>
          <center>
            <div className="flex justify-center my-10">
              <iframe
                style={{
                  display: "block",
                  margin: "auto",
                  width: "1042px",
                  maxWidth: "100%",
                  aspectRatio: "1.7708830548926013",
                }}
                src="https://killerplayer.com/watch/video/2586e38e-302e-4472-9bdb-022a4f50beec"
                frameBorder="0"
                allow="autoplay; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </center>
        </center>

        <center>
          <div className="call mt-20 mb-20">
            <p className="text-white click mt-4 mb-4">Check Availability</p>
            <Link href="https://mainstack.com/marketing-consultations">
              <button className="install mb-6">
                Yes! I want a Calendar Full of Appointments{" "}
              </button>
            </Link>
          </div>
        </center>

        <center>
        
          <p className="success_min">STEP 1 - BOOK A CALL </p>
          <div className="success_div">
            <p className="success_call">
              This is not a sales call. There’s no hard selling, and no pressure
              to convince you of anything. Our goal is simply to understand the
              challenges holding you back from landing high-end,
              Residential/Commercial Clients.
            </p>
          </div>
          <img className="booking hidden sm:block" src="./bookcall.png" />
          <img className="booking block sm:hidden" src="./bookmin.png" />

          <p className="success_min">STEP 2 - GET TO KNOW OUR SYSTEM MORE </p>
          <div className="success_div">
            <p className="success_call">
              Before you get on a call with me, it helps to understand how our
              system works and see if we’re a good fit for you. The best place
              to access our free resources is our YouTube channel. After you
              book a call, you’ll be redirected there, where you can find
              valuable content showing how we help designers grow.
            </p>
          </div>
          <img className="booking hidden sm:block" src="./Ytfunell.png" />
          <img className="booking block sm:hidden" src="./ytmob.png" />
        </center>
      </div>
      <center>
        <div className="call mt-20 mb-20">
          <p className="text-white click mt-4 mb-4">Check Availability</p>
          <Link href="https://juwoncaleb.mainstackbookings.com/p/688be3dc69f41338b668513d">
            <button className="install mb-6">
              Yes! I want a Calendar Full of Appointments{" "}
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
}
