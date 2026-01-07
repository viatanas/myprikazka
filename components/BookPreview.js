"use client";

export default function BookPreview() {
  return (
    <section
      id="book-preview"
      className="relative pb-12 pt-0 lg:pt-20 lg:pb-32 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-6 relative">
        {/* Crayons decoration behind the card */}
        <img
          src="/img/crayons.png"
          className="absolute -bottom-8 -left-4 lg:-bottom-12 lg:-left-8 w-32 lg:w-48 h-auto z-0"
          alt="Decorative crayons"
        />

        {/* Floating card container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10">
          {/* Left side - Book preview illustration */}
          <div className="relative lg:w-1/2 min-h-[350px] lg:min-h-[450px] bg-gradient-to-br from-[#4da6e8] via-[#5fb8f0] to-[#7ec8f5] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-2xl" />
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl" />
            </div>

            {/* Small circular original photo with arrow */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 flex items-center gap-2">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-3xl lg:text-4xl bg-gradient-to-br from-amber-100 to-amber-200">
                  👧
                </div>
              </div>
              {/* Arrow */}
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main illustrated scene placeholder */}
            <img
              src="/img/golden-mountain.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Book preview illustration"
            />
          </div>

          {/* Right side - Text content */}
          <div className="lg:w-1/2 bg-[#0047AB] p-6 lg:px-10 lg:py-12 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-semibold lg:mb-10 mb-6">
                За книжката
              </span>

              <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight lg:mb-8 mb-5">
                Тайната на Златната Планина
              </h2>

              <p className="text-base text-white font-medium leading-relaxed mb-8">
                Твоето дете се впуска във вълшебно приключение, за да помогне на
                горски животни по пътя си. Забавна история, която насърчава
                добротата, смелостта и желанието да помагаш на другите.
              </p>

              {/* Features */}
              <div className="space-y-2 lg:mb-8">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="text-base">🎁</span>
                  <span>Най-добра за възраст 3–7 години</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="text-base">📸</span>
                  <span>Работи само с 1 снимка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
