"use client";

export default function Hero() {
  const scrollToOrderForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExample = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#F8F5EE] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23074FB5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-6 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold  mb-6">
              <span className="text-black leading-[1.1]">
                Създайте приказка, в която детето ви е
                <span className="relative inline-block">
                  главният герой!
                  <img
                    src="/img/crayon-underline.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-full h-auto"
                    style={{ transform: "translateY(0.4em)" }}
                  />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed mb-10 max-w-xl">
              Създай уникална история на български език за деца 3–7 г. Всяка
              книжка е специално направена с лицето на твоето дете в
              илюстрациите.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToOrderForm}
                className="inline-flex items-center justify-center gap-2 bg-[#074FB5] hover:bg-[#074FB5]/90 text-white font-bold text-lg px-10 py-3 rounded-full"
              >
                <span>Създай книжка</span>
              </button>
              {/* <button
                onClick={scrollToExample}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-lg px-10 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                <span>Виж пример</span>
              </button> */}
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-6 text-sm text-black">
              <div className="flex items-center gap-2 lg:hidden">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Преглед преди поръчка</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Плащане при доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% уникална</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>На български</span>
              </div>
            </div>
          </div>

          {/* Right Column - Book Preview */}
          <div className="order-1 lg:order-2 relative h-full flex items-center">
            {/* Decorative streamers */}
            <img
              src="/img/streamer.svg"
              alt=""
              className="absolute top-0 left-0 w-8 md:w-12 opacity-30"
              style={{ transform: "rotate(-15deg) translate(-10px, -5px)" }}
            />
            <img
              src="/img/balloon.svg"
              alt=""
              className="absolute top-0 right-0 w-8 md:w-12 opacity-25"
              style={{ transform: "rotate(25deg) translate(10px, -10px)" }}
            />
            <img
              src="/img/hat.svg"
              alt=""
              className="absolute bottom-0 left-1/4 w-8 md:w-12 opacity-20"
              style={{ transform: "rotate(45deg) translate(-15px, 10px)" }}
            />
            <img
              src="/img/star.svg"
              alt=""
              className="absolute top-1/3 right-0 w-8 md:w-12 opacity-30"
              style={{ transform: "rotate(-30deg) translate(5px, 0)" }}
            />

            {/* Book Preview Card */}
            <img src="/img/book-demo.png" className="w-auto relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
