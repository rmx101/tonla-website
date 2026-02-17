"use client";

import ChatWidget from "@/components/ChatWidget";
import Link from "next/link";

export default function Home() {
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
              MALZEME
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#hizmetler"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Hizmetler
            </a>
            <a
              href="#hakkimizda"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Hakk&#305;m&#305;zda
            </a>
            <a
              href="#iletisim"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              &#304;leti&#351;im
            </a>
            <Link
              href="/en"
              className="text-xs text-slate-400 hover:text-slate-600 border border-slate-200 px-2 py-1 rounded transition-colors"
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-6">
            End&uuml;striyel Hammadde Tedarik
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 text-balance">
            Kap&#305;dan kap&#305;ya hammadde tedariki.{" "}
            <span className="text-slate-400">Sadece &uuml;reticiler i&ccedil;in.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            TONLA MALZEME END&Uuml;STR&#304;YEL HAMMADDE T&#304;CARET LTD. &#350;T&#304; olarak,
            &uuml;retici firmalara g&uuml;venilir ve zaman&#305;nda hammadde tedariki
            sa&#287;l&#305;yoruz.
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
              Bizimle &#304;leti&#351;ime Ge&ccedil;in
            </button>
            <a
              href="#hizmetler"
              className="px-8 py-3.5 border border-slate-200 text-slate-700 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all font-medium text-sm"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-3">
              Hizmetlerimiz
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Neden TONLA?
            </h2>
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
                Kap&#305;dan Kap&#305;ya Teslimat
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Hammaddelerinizi do&#287;rudan &uuml;retim tesislerinize teslim ediyoruz.
                Lojistik s&uuml;re&ccedil;lerle u&#287;ra&#351;man&#305;za gerek yok.
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
                Ayl&#305;k Tedarik Y&ouml;netimi
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                D&uuml;zenli hammadde ihtiyac&#305;n&#305;z&#305; planl&#305;yor ve ayl&#305;k tedarik
                zincirinizi kesintisiz y&ouml;netiyoruz.
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
                G&uuml;venilir Tedarik
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kaliteli hammadde, zaman&#305;nda teslimat ve &#351;effaf s&uuml;re&ccedil;
                y&ouml;netimi ile &uuml;retim s&uuml;reklili&#287;inizi garanti alt&#305;na al&#305;yoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-slate-500 tracking-widest uppercase mb-3">
              Hakk&#305;m&#305;zda
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              &Uuml;reticilerin G&uuml;venilir Tedarik Orta&#287;&#305;
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                TONLA MALZEME olarak, end&uuml;striyel &uuml;retim yapan firmalara
                kap&#305;dan kap&#305;ya hammadde tedarik hizmeti sunuyoruz.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sadece &uuml;retici firmalarla &ccedil;al&#305;&#351;&#305;yor, arac&#305; ve distrib&uuml;t&ouml;rlerle
                i&#351; yapm&#305;yoruz. Bu sayede do&#287;rudan ve g&uuml;venilir bir tedarik
                zinciri olu&#351;turuyoruz.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ayl&#305;k tedarik planlamas&#305; ile &uuml;retim s&uuml;re&ccedil;lerinizin kesintisiz
                devam etmesini sa&#287;l&#305;yoruz.
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
                      &#304;htiya&ccedil; Analizi
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Hammadde ihtiyac&#305;n&#305;z&#305; detayl&#305; analiz ediyoruz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Tedarik Plan&#305;
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Ayl&#305;k tedarik plan&#305;n&#305;z&#305; olu&#351;turuyoruz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">
                      Kap&#305;da Teslimat
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Hammaddelerinizi zaman&#305;nda kap&#305;n&#305;za teslim ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-400 tracking-widest uppercase mb-3">
            &#304;leti&#351;im
          </p>
          <h2 className="text-3xl font-bold mb-6">Hemen Ba&#351;layal&#305;m</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Hammadde tedarik ihtiya&ccedil;lar&#305;n&#305;z hakk&#305;nda konu&#351;mak i&ccedil;in sa&#287; alttaki
            sohbet butonuna t&#305;klay&#305;n veya bize ula&#351;&#305;n.
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
            Sohbeti Ba&#351;lat
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; 2026 TONLA MALZEME END&Uuml;STR&#304;YEL HAMMADDE T&#304;CARET LTD. &#350;T&#304;.
            T&uuml;m haklar&#305; sakl&#305;d&#305;r.
          </p>
          <Link
            href="/en"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            English Version
          </Link>
        </div>
      </footer>

      <ChatWidget lang="tr" />
    </main>
  );
}
