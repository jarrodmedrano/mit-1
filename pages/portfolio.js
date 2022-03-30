// pages/index.js, returned HTML is unchanged
import React, { useEffect } from "react";
import Head from "next/head";

export default function Home() {
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
        <title>Portfolio</title>
        <meta
          name="description"
          content="A demo about NextJS and Bootstrap 5"
        />
      </Head>

      <main className="bg-dark text-white">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto bg-dark text-white">
              <h1 className="fw-light">Portfolio</h1>
              <p className="lead text-muted"></p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-dark text-white">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <a
                    href="https://jarrodmedrano.github.io/pac-men/"
                    target="_blank"
                  >
                    <div
                      className="bd-placeholder-img card-img-top pacman"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    ></div>
                  </a>

                  <div className="card-body bg-dark text-white">
                    <h2>PacMan Game</h2>
                    <p className="card-text ">
                      An array methods exercise with animated images that move
                      randomly about the screen.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://jarrodmedrano.github.io/pac-men/"
                          target="_blank"
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                        </a>
                        <a
                          href="https://github.com/jarrodmedrano/pac-men"
                          target="_blank"
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Git
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <a
                    href="https://jarrodmedrano.github.io/eyes/"
                    target="_blank"
                  >
                    <div
                      className="bd-placeholder-img card-img-top eyes"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    ></div>
                  </a>

                  <div className="card-body bg-dark text-white">
                    <h2>Eyes Animation</h2>
                    <p className="card-text">
                      Animated CSS Eyeballs that follow your mouse cursor.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          href="https://jarrodmedrano.github.io/eyes/"
                          target="_blank"
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                        </a>
                        <a
                          href="https://github.com/jarrodmedrano/eyes"
                          target="_blank"
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Git
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div
                    className="bd-placeholder-img card-img-top map"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  ></div>

                  <div className="card-body bg-dark text-white">
                    <h2>Map Animation</h2>
                    <p className="card-text">
                      Uses MapBox and MBTA bus api to calculate stops between
                      Harvard and MIT.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="toast align-items-center text-white bg-dark border-0 position-absolute top-50"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              Welcome! This page was built using Bootstrap 5.1.3
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </main>
    </div>
  );
}
