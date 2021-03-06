// pages/index.js, returned HTML is unchanged
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { YoutubeVideo } from "../components/youtube";

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
        <title>Jarrod Medrano</title>
        <meta
          name="description"
          content="A demo about NextJS and Bootstrap 5"
        />
      </Head>
      <main className="px-3">
        <h1>Welcome</h1>

        <YoutubeVideo embed="iyWLhwy39C8" />

        <p className="lead">
          I&rsquo;m a remote-working software engineer from El Paso, Texas.
        </p>
        <p>
          I&rsquo;m a professional in frontend web technologies such as React
          JS, SCSS & HTML. I am studying for a Professional Certificate in
          Coding: Full Stack Development with MERN. Here you&rsquo;ll find my
          portfolio with some examples of my work.
        </p>
        <p>
          <Link href="https://linkedin.com/jarrod-medrano">Linkedin</Link> |{" "}
          <Link href="https://github.com/jarrodmedrano">Github</Link> |{" "}
          <Link href="mailto:jarrod@slashclick.com">jarrod@slashclick.com</Link>
        </p>
        <p className="lead">
          <Link href="/mit-1/portfolio">
            <a className="btn btn-lg btn-secondary fw-bold border-white bg-white text-black">
              Portfolio
            </a>
          </Link>
        </p>
      </main>
    </div>
  );
}
