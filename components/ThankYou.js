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
      <div className="absolute hidden lg:flex top-32 right-10 text-4xl  opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>
      <div className="absolute hidden lg:flex top-6 right-24 text-4xl  opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute hidden lg:flex top-20 right-40 text-4xl opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>

      <div className="absolute bottom-32 left-10 text-3xl   opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-40 left-64 text-3xl   opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-10 left-40 text-3xl  opacity-70">
        <img className="w-8" src="/img/smiley.png" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        {/* Success animation */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-mint/20 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
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

        {/* Step Progress Tracker */}
        <div className="bg-white/80 w-11/12 backdrop-blur-sm rounded-2xl mx-auto p-8 shadow-soft mb-8">
          <h3 className="font-bold text-gray-800 mb-7 text-base text-left">
            Твоята поръчка
          </h3>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-[19px] top-[40px] w-0.5 h-[calc(100%-80px)] bg-gray-200" />
            <div className="absolute left-[19px] top-[40px] w-0.5 h-[50px] bg-green-600" />

            {/* Step 1 - Completed */}
            <div className="relative flex items-start gap-4 mb-5">
              <div className="relative z-10 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
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
              <div className="flex-1 pt-1.5 text-left">
                <p className="font-medium text-black text-[15px]">
                  Формата е попълнена успешно
                </p>
                {/* <p className="text-sm text-mint font-medium">Завършено</p> */}
              </div>
            </div>

            {/* Step 2 - In Progress */}
            <div className="relative flex items-start gap-4 mb-5">
              <div className="relative z-10 w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm flex-shrink-0 ring-3 ring-sunshine/30">
                <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full animate-pulse" />
              </div>
              <div className="flex-1 pt-1.5 text-left">
                <p className="font-medium text-black text-[15px]">
                  Персонализираме и подготвямe книжката за преглед
                </p>
                {/* <p className="text-sm text-sunshine font-medium">В процес...</p> */}
              </div>
            </div>

            {/* Step 3 - Pending */}
            <div className="relative flex items-start gap-4">
              <div className="relative z-10 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div className="flex-1 pt-1.5 text-left">
                <p className="font-medium text-gray-500 text-[15px]">
                  Печат и доставка при поръчка
                </p>
                {/* <p className="text-sm text-gray-400">Очаква</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
