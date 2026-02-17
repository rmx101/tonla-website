"use client";

import ChatWidget from "@/components/ChatWidget";
import Link from "next/link";

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              TONLA
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              MATERIALS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-slate-600 border border-slate-200 px-2 py-1 rounded transition-colors"
            >
              TR
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-6">
            Industrial Raw Material Supply
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-balance">
            Door-to-door raw material supply.{" "}
            <span className="text-slate-400">For manufacturers only.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            TONLA MALZEME provides reliable, on-time raw material supply
            directly to manufacturing facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const chatBtn = document.querySelector(
                  'button[aria-label="Chat"]'
                ) as HTMLButtonElement;
                chatBtn?.click();
              }}
              className="px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-medium text-sm shadow-lg shadow-slate-900/20"
            >
              Get In Touch
            </button>
            <a
              href="#services"
              className="px-8 py-3.5 border border-slate-200 text-slate-700 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all font-medium text-sm"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Why TONLA?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-5">
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Door-to-Door Delivery
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We deliver raw materials directly to your production facilities.
                No need to deal with logistics processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-5">
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Monthly Supply Management
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We plan your regular raw material needs and manage your monthly
                supply chain seamlessly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-5">
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
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Reliable Supply
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Quality raw materials, on-time delivery, and transparent process
                management to ensure your production continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Your Trusted Supply Partner
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                At TONLA MALZEME, we provide door-to-door raw material supply
                services to industrial manufacturing companies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We exclusively work with manufacturers &mdash; not brokers or
                distributors. This allows us to build a direct and reliable
                supply chain.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Through monthly supply planning, we ensure your production
                processes continue without interruption.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Needs Analysis
                    </h4>
                    <p className="text-slate-500 text-sm">
                      We analyze your raw material needs in detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Supply Plan
                    </h4>
                    <p className="text-slate-500 text-sm">
                      We create your monthly supply plan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Doorstep Delivery
                    </h4>
                    <p className="text-slate-500 text-sm">
                      We deliver your raw materials on time to your door.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-400 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Get Started</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
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
            className="px-8 py-3.5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all font-medium text-sm"
          >
            Start Chat
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; 2026 TONLA MALZEME END&Uuml;STR&#304;YEL HAMMADDE T&#304;CARET
            LTD. &#350;T&#304;. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            T&uuml;rk&ccedil;e Versiyon
          </Link>
        </div>
      </footer>

      <ChatWidget lang="en" />
    </main>
  );
}
