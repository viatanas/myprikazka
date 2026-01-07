"use client";

export default function ThankYou() {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F5EE]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-sunshine/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-coral/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#074FB5]/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-32 right-10 text-4xl  opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>
      <div className="absolute top-96 right-24 text-4xl  opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute top-64 right-40 text-4xl opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>

      <div className="absolute bottom-32 left-10 text-3xl   opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-96 left-24 text-3xl   opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-64 left-40 text-3xl  opacity-70">
        <img className="w-8" src="/img/smiley.png" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        {/* Success animation */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-mint/20 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-mint rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
          Благодарим ти!
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Получихме информацията ти и започваме създаването на приказката. Скоро
          ще получиш пример по имейл.
        </p>

        {/* What happens next */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft mb-8">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <span>📋</span>
            Какво следва?
          </h3>
          <ul className="w-full flex flex-col items-center text-gray-600 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-mint mt-0.5">✓</span>
              <span>Получихме информацията ти успешно</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mint mt-0.5">✓</span>
              <span>Ще създадем пример на приказката специално за детето</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-mint mt-0.5">✓</span>
              <span>Ще ти го изпратим по имейл преди печат</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
