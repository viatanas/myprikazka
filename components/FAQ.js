"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Как работи процесът на създаване на книжка?",
    answer:
      "Много лесно. Попълваш кратка форма с името и възрастта на детето и качваш 2–3 ясни снимки на лицето му. Ние създаваме персонализирана приказка и ти изпращаме пример на книжката по имейл, за да я видиш предварително. Ако ти хареса, поръчваш книжката и я получаваш с доставка до офис на Еконт.",
  },
  {
    question: "Колко време отнема изработката?",
    answer:
      "Tъй като всяка книжка се създава специално за всяко дете изработката и доставката отнемат около 8-10 работни дни.",
  },
  {
    question: "Какви снимки трябва да кача?",
    answer:
      "Най-добре работим с ясни снимки на лицето на детето, направени при добро осветление. Препоръчваме поне една снимка отпред и една от профил. Избягвай снимки със скрито лице, слънчеви очила, маски или шапки.",
  },
  {
    question: "Мога ли да видя пример преди да поръчам?",
    answer:
      "Да. След като попълниш формата и качиш снимките, ще ти изпратим пример на книжката по имейл, за да я видиш предварително.",
  },
  {
    question: "Какъв е размерът и качеството на книжката?",
    answer:
      "Книжката е отпечатана на плътна, висококачествена хартия с прецизно подвързване.Размерът е квадратен – 20 × 20 см, удобен за детски ръце и четене заедно с родител.",
  },
  {
    question: "Мога ли да поръчам повече от една книжка?",
    answer:
      "В момента всяка книжка се създава и поръчва поотделно, затова е необходимо да направиш отделна поръчка за всяка книжка.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto lg:px-6 px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#074FB5]/10 rounded-full border border-blue-900/10 text-[#074FB5] font-semibold text-sm mb-4">
            <span>Имаш въпроси?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Често задавани въпроси
          </h2>
          <p className="w-11/12 mx-auto lg:w-full text-lg text-neutral-800">
            Всичко, което искаш да знаеш за магическите книжки
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 pt-5 pb-4 flex items-center justify-between text-left"
              >
                <span className="font-bold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#074FB5] rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-800 text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не намери отговор на въпроса си?</p>
          <a
            href="mailto:info@myprikazka.com"
            className="inline-flex items-center gap-2 text-[#074FB5] font-bold hover:underline"
          >
            <span>Пиши ни на имейл</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
