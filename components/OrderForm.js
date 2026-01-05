"use client";

import { useState } from "react";

export default function OrderForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    child_name: "",
    child_gender: "",
    child_age: "",
    email: "",
    photos: [],
    intent: "",
  });
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 3),
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/")
    );
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 3),
    }));
  };

  const removePhoto = (index) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    onSubmitSuccess?.();
  };

  const intentOptions = [
    { value: "example", label: "Искам да видя пример", icon: "👀" },
    { value: "order", label: "Искам да поръчам книжка", icon: "📚" },
  ];

  const ageOptions = ["3", "4", "5", "6", "7"];

  return (
    <section
      id="order-form"
      className="relative py-24 bg-[#F8F5EE] overflow-hidden"
    >
      {/* Floating decorations */}
      <div className="absolute top-32 right-10 text-4xl animate-float opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>
      <div className="absolute top-96 right-24 text-4xl animate-float opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute top-64 right-40 text-4xl animate-float opacity-70">
        <img className="w-9" src="/img/smiley.png" />
      </div>

      <div className="absolute bottom-32 left-10 text-3xl animate-float animation-delay-2000 opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-96 left-24 text-3xl animate-float animation-delay-2000 opacity-70">
        <img className="w-9" src="/img/star.png" />
      </div>
      <div className="absolute bottom-64 left-40 text-3xl animate-float animation-delay-2000 opacity-70">
        <img className="w-8" src="/img/smiley.png" />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#074FB5]/10 rounded-full border border-blue-900/10 text-[#074FB5] font-semibold text-sm mb-4">
            <span>Започни тук</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Създай книжка
          </h2>
          <p className="text-lg text-neutral-800">
            Попълни формата и започни магията
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-4xl shadow-soft-lg p-8 md:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Child name */}
            <div>
              <label
                htmlFor="child_name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                <span className="mr-2">👶</span>
                Име на детето
              </label>
              <input
                type="text"
                id="child_name"
                name="child_name"
                value={formData.child_name}
                onChange={handleInputChange}
                placeholder="Напиши името тук..."
                className="w-full"
                required
              />
            </div>

            {/* Child gender */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <span className="mr-2">👦👧</span>
                Пол
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, child_gender: "boy" }))
                  }
                  className={`flex-1 py-3 px-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                    formData.child_gender === "boy"
                      ? "bg-[#074FB5] text-white scale-[1.02]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>👦</span>
                  <span>Момче</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, child_gender: "girl" }))
                  }
                  className={`flex-1 py-3 px-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                    formData.child_gender === "girl"
                      ? "bg-[#074FB5] text-white scale-[1.02]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>👧</span>
                  <span>Момиче</span>
                </button>
              </div>
            </div>

            {/* Child age */}
            <div>
              <label
                htmlFor="child_age"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                <span className="mr-2">🎂</span>
                Възраст
              </label>
              <div className="flex gap-3 flex-wrap">
                {ageOptions.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, child_age: age }))
                    }
                    className={`w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      formData.child_age === age
                        ? "bg-[#074FB5] text-white   scale-110"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {age}
                  </button>
                ))}
                <span className="flex items-center text-gray-400 text-sm ml-2">
                  години
                </span>
              </div>
            </div>

            {/* Photo upload */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                <span className="mr-2">📸</span>
                Качи 2–3 снимки на детето
              </label>
              <div
                className={`file-upload relative ${
                  dragActive ? "border-[#063d91] bg-[#074FB5]/10" : ""
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="photos"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <div className="text-4xl mb-3">📷</div>
                  <p className="text-gray-600 font-medium mb-1">
                    Плъзни снимки тук или кликни
                  </p>
                  <p className="text-gray-400 text-sm">
                    PNG, JPG до 10MB • Макс. 3 снимки
                  </p>
                </div>
              </div>

              {/* Preview uploaded photos */}
              {formData.photos.length > 0 && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Снимка ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-coral text-white rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2 mt-6"
              >
                <span className="mr-2">📧</span>
                Имейл за връзка
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tvoiat@email.com"
                className="w-full"
                required
              />
            </div>

            {/* Intent selection */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                <span className="mr-2">🎯</span>
                Какво искаш?
              </label>
              <div className="space-y-3">
                {intentOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`radio-card ${
                      formData.intent === option.value ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="intent"
                      value={option.value}
                      checked={formData.intent === option.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <span className="font-medium text-gray-700">
                      {option.label}
                    </span>
                    <div
                      className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData.intent === option.value
                          ? "bg-[#074FB5]"
                          : "border-gray-300"
                      }`}
                    >
                      {formData.intent === option.value && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary text-xl py-5 flex items-center justify-center gap-3 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Изпращане...</span>
                </>
              ) : (
                <>
                  <span>Поръчай</span>
                  <svg
                    className="w-5 h-5"
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
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
