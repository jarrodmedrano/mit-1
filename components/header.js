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
        <Link className="text-white" href="/">
          <h3 className="float-md-start mb-0">Jarrod Medrano</h3>
        </Link>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link className="nav-link" aria-current="page" href="/">
            Home
          </Link>
          <Link className="nav-link" aria-current="page" href="/portfolio">
            Portfolio
          </Link>
          <Link className="nav-link" aria-current="page" href="/portfolio">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};
