// pages/index.js, returned HTML is unchanged
import React, { useEffect } from "react";
import Head from "next/head";

export default function Contact() {
  // See https://en.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require("bootstrap/dist/js/bootstrap");
    }

    // load JS bootstrap dependency
    let bootstrap = require("bootstrap/dist/js/bootstrap");

    // find all toasts
    let toastElList = [].slice.call(document.querySelectorAll(".toast"));
    let toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });

    // show each toast explicitly
    toastList.forEach(function (element, index) {
      element.show();
    });
    // Run useEffect only once
    // Read https://css-tricks.com/run-useeffect-only-once/
  }, []);

  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="A demo of my MIT projects" />
      </Head>

      <main className="bg-dark text-white">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto bg-dark text-white">
              <h1 className="fw-light">Coming Soon</h1>
              <p className="lead text-muted"></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
