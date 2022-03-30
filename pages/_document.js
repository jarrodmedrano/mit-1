import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import { Header } from "../components/header";

export default function Document() {
  return (
    <Html className="h-100">
      <Head />
      <body className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          <Main />
          <footer className="mt-auto text-white-50">
            <p>Copyright &copy; 2022</p>
          </footer>
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
