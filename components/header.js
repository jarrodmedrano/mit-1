import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Header = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      // router.query.lang is defined
    }
  }, [router]);

  return (
    <header className="mb-auto">
      <div>
        <a className="text-white" href="/">
          <h3 className="float-md-start mb-0">Jarrod Medrano</h3>
        </a>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link" aria-current="page" href="/">
            Home
          </a>
          <a className="nav-link" aria-current="page" href="/portfolio">
            Portfolio
          </a>
          <a className="nav-link" aria-current="page" href="/portfolio">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
