import React, { useEffect, useState } from "react";

const TYPING_TEXT = "we are working. going live soon.";
const COPY = {
  en: {
    title: "One Name. Infinite Possibilities.",
    subtitle: "Welcome to the Multiverse of Adi."
  },
  hi: {
    title: "Ek naam. Anant sambhavnayein.",
    subtitle: "Adi ke multiverse mein aapka swagat hai."
  }
};

function Doodles() {
  return (
    <svg className="doodles" viewBox="0 0 1440 1024" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="var(--doodle)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M102 68l16 34 35 12-35 12-16 34-16-34-35-12 35-12z" />
        <path d="M211 96l8 18 19 7-19 7-8 18-8-18-19-7 19-7z" />
        <path d="M1314 74c18-8 41 0 51 17 4 7 6 15 5 23-8-5-15-6-22-4-7 3-12 8-15 14-16-3-29-14-35-28" />
        <path d="M1277 134c12-16 31-24 51-21 20 4 36 20 40 40" />
        <path d="M85 281c31-18 78-18 111 0" />
        <path d="M79 318c28-16 68-16 96 0" />
        <path d="M94 353c20-10 44-10 64 0" />
        <path d="M132 520c17-26 42-41 68-35 23 5 32 31 22 50H93c-7-4-8-10-5-15 8-13 22-12 31 0" />
        <path d="M1252 410c0 0 25-7 41 10 0 0-18 8-20 22 0 0-12-7-21-2" />
        <path d="M1296 476c7-6 18-7 26-1" />
        <path d="M1338 450c5 6 5 15 0 21" />
        <path d="M1262 454c0 0 7 7 0 15" />
        <path d="M1290 522c7-6 18-7 26-1" />
        <path d="M1331 503c6 6 6 15 1 21" />
        <path d="M1268 506c0 0 7 7 0 15" />
        <path d="M77 782c22-21 57-21 79 0 0 0-7 36-39 36-31 0-40-36-40-36z" />
        <path d="M90 768c5-8 12-12 20-12" />
        <path d="M143 756c-5-8-12-12-20-12" />
        <path d="M1301 841c39-21 82-18 111 4" />
        <path d="M1262 790c38-19 80-13 112 12" />
        <path d="M1237 724l26 21" />
        <path d="M197 921l0-34" />
        <path d="M197 921l21 24" />
        <path d="M197 921l-21 24" />
        <path d="M197 921l34 0" />
        <path d="M197 921l-34 0" />
        <path d="M197 921l24-21" />
        <path d="M197 921l-24-21" />
        <path d="M197 921l24 21" />
        <path d="M197 921l-24 21" />
        <path d="M919 857c-27 1-51 19-58 44 32-13 69-2 88 25-1-34-7-60-30-69z" />
        <path d="M957 908c0 0 13 34 47 45" />
        <path d="M975 828c-4 19-2 37 6 54" />
        <path d="M428 71l18 8-5 21-21 4-13-14z" />
        <path d="M962 90l10 17" />
        <path d="M982 79l8 17" />
        <path d="M950 72l4 18" />
        <path d="M999 90l8 13" />
      </g>
    </svg>
  );
}

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedText(TYPING_TEXT.slice(0, index));
      if (index >= TYPING_TEXT.length) {
        window.clearInterval(interval);
      }
    }, 75);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="page">
      <Doodles />

      <section className="shell">
        <h1 className="title">
          <em>onlyadi</em>
          <span>.in</span>
        </h1>
        <section className="hero-card" aria-label="Coming soon">
          <div className="badge">community login</div>
          <div className="hero-head">
            <div>
              <h2 className={`hero-title ${language === "hi" ? "hero-title-hi" : ""}`}>
                {COPY[language].title}
              </h2>
              <p className="hero-copy">{COPY[language].subtitle}</p>
            </div>

            <button
              className={`lang-switch ${language === "hi" ? "is-hindi" : ""}`}
              type="button"
              aria-label="Switch language"
              onClick={() => setLanguage((current) => (current === "en" ? "hi" : "en"))}
            >
              <span className="lang-switch-track">
                <span className="lang-switch-thumb" />
              </span>
              <span className="lang-switch-label">{language === "en" ? "EN" : "HI"}</span>
            </button>
          </div>

          <div className="type-box" aria-live="polite">
            <span>{typedText}</span>
            <span className="caret" aria-hidden="true" />
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              Login
            </button>
            <button className="btn btn-secondary" type="button">
              Sign in
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
