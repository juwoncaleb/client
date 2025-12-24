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

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className="vsl_page bg-cover bg-center bg-no-repeat min-h-screen ">
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
              We send 10 Qualified Consultations
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
                booked consultations. We make it easier for clients already
                looking for you to
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
            <p className="text-white click mt-4 mb-4">
              Learn More From my Youtube
            </p>
            <Link href="https://mainstack.com/marketing-consultations">
              <button className="install mb-6">
                Yes! I want a Calendar Full of Appointments{" "}
              </button>
            </Link>
          </div>
        </center>

        <center>
          <p className="success_min step2">
            STEP 1 - GET TO KNOW OUR SYSTEM MORE{" "}
          </p>
          <div className="success_div">
            <p className="success_call">
              Before you get on a call with me, it helps to understand how our
              system works and see if we’re a good fit for you. The best place
              to access our free resources is our YouTube channel.
            </p>
          </div>
          <img className="booking hidden sm:block" src="./Ytfunell.png" />
          <img className="booking block sm:hidden" src="./ytmob.png" />
          <p className="success_min step2">
            STEP 2 - GET ACCESS TO OUR FREE GUIDE{" "}
          </p>
          <div className="success_div">
            <p className="success_call">
              This free guide breaks down a simple system for attracting
              residential and commercial clients—without referrals, constant
              Instagram posting, or guesswork. Link is in every DESCRIPTION of
              my Youtube Videos
            </p>
          </div>
          <img className="booking" src="./hotel.png" />

          <p className="success_min step2">STEP 3 - BOOK A CALL </p>
          <div className="success_div">
            <p className="success_call">
              If you’d like us to implement a system where qualified residential
              and commercial clients book calls with you weekly—without relying
              on referrals or Instagram—you can book a call with me.<br/><br/> BOOKING
              LINK IS IN EVERY DESCRIPTION OF MY YOUTUBE VIDOES. This is not a
              sales call. There’s no pressure and no hard selling. The goal is
              simply to walk you through our system and see if it’s a good fit.
            </p>
          </div>
          <img className="booking hidden sm:block" src="./bookcall.png" />
          <img className="booking block sm:hidden" src="./bookmin.png" />
        </center>
      </div>
      <center>
         <div className="call mt-20 mb-20">
            <p className="text-white click mt-4 mb-4">
              Learn More From my Youtube
            </p>
            <Link href="https://mainstack.com/marketing-consultations">
              <button className="install mb-6">
                Yes! I want a Calendar Full of Appointments{" "}
              </button>
            </Link>
          </div>
      </center>
    </div>
  );
}
