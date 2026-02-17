"use client";

import ChatWidget from "@/components/ChatWidget";
import Link from "next/link";

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-white/5 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-white">
              TONLA
            </span>
            <span className="text-xs text-zinc-500 hidden sm:inline font-medium tracking-wider">
              MATERIALS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link
              href="/"
              className="text-xs text-zinc-500 hover:text-white border border-zinc-700 px-2.5 py-1 rounded transition-colors"
            >
              TR
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full screen with industrial background */}
      <section className="hero-bg min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 sm:p-14 shadow-2xl max-w-2xl">
            <p className="text-xs font-semibold text-red-800 tracking-widest uppercase mb-4">
              TONLA MATERIALS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-5 text-balance">
              Door-to-door raw material supply.
            </h1>
            <p className="text-zinc-600 mb-3 leading-relaxed">
              For manufacturers only. TONLA MALZEME provides reliable, on-time
              raw material supply directly to manufacturing facilities.
            </p>
            <p className="text-red-800 text-sm font-medium mb-6">
              Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const chatBtn = document.querySelector(
                    'button[aria-label="Chat"]'
                  ) as HTMLButtonElement;
                  chatBtn?.click();
                }}
                className="px-7 py-3 bg-zinc-900 text-white text-sm font-medium tracking-wide uppercase hover:bg-zinc-800 transition-all"
              >
                Get In Touch
              </button>
              <a
                href="#services"
                className="px-7 py-3 border border-zinc-300 text-zinc-700 text-sm font-medium tracking-wide uppercase hover:bg-zinc-100 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark with background imagery */}
      <section id="services" className="services-bg py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-red-400 tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why TONLA?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-3.992-3.992a2.25 2.25 0 00-1.591-.659h-1.17M8.25 18.75h6M3.375 14.25h4.875m0 0v-3.375m0 3.375h3.375"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Door-to-Door Delivery
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We deliver raw materials directly to your production facilities.
                No need to deal with logistics processes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Monthly Supply Management
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We plan your regular raw material needs and manage your monthly
                supply chain seamlessly.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Reliable Supply
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Quality raw materials, on-time delivery, and transparent process
                management to ensure your production continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Full width image background with white card */}
      <section id="about" className="about-bg py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 sm:p-14 shadow-2xl">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-red-800 tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl font-bold text-zinc-900">
                Your Trusted Supply Partner
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  At TONLA MALZEME, we provide door-to-door raw material supply
                  services to industrial manufacturing companies.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  We exclusively work with manufacturers &mdash; not brokers or
                  distributors. This allows us to build a direct and reliable
                  supply chain.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Through monthly supply planning, we ensure your production
                  processes continue without interruption.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      Needs Analysis
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      We analyze your raw material needs in detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      Supply Plan
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      We create your monthly supply plan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      Doorstep Delivery
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      We deliver your raw materials on time to your door.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section - Dark red industrial */}
      <section id="contact" className="cta-bg py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-red-300 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let&apos;s Get Started
          </h2>
          <p className="text-red-100/70 mb-8 max-w-lg mx-auto leading-relaxed">
            Click the chat button in the bottom right to discuss your raw
            material supply needs, or reach out to us directly.
          </p>
          <button
            onClick={() => {
              const chatBtn = document.querySelector(
                'button[aria-label="Chat"]'
              ) as HTMLButtonElement;
              chatBtn?.click();
            }}
            className="px-8 py-3.5 bg-white text-red-900 font-medium text-sm tracking-wide uppercase hover:bg-red-50 transition-all"
          >
            Start Chat
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; 2026 TONLA MALZEME END&Uuml;STR&#304;YEL HAMMADDE T&#304;CARET
            LTD. &#350;T&#304;. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            T&uuml;rk&ccedil;e Versiyon
          </Link>
        </div>
      </footer>

      <ChatWidget lang="en" />
    </main>
  );
}
