import React, { useState } from "react";

type Plan = {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    title: "Telegram Membership",
    price: "₹4,999",
    duration: "/ month",
    description:
      "Educational market updates and general trading discussions via a private Telegram channel.",
    features: [
      "Market updates & outlook",
      "Educational discussions",
      "Beginner-friendly content",
      "Community learning environment",
    ],
    buttonText: "Join Telegram",
  },
  {
    title: "Equity Intraday Premium",
    price: "₹15,000",
    duration: "/ month",
    description:
      "Structured intraday equity trade ideas supported by technical analysis and risk awareness.",
    features: [
      "Intraday equity trade ideas",
      "Technical analysis insights",
      "Risk management guidance",
      "Market session support",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    title: "Commodities Premium",
    price: "₹25,000",
    duration: "/ month",
    description:
      "Focused commodity market insights for traders interested in Gold, Silver, and Crude Oil.",
    features: [
      "Commodity trade ideas",
      "Trend & volatility analysis",
      "Disciplined trading approach",
      "Premium member support",
    ],
    buttonText: "Subscribe Now",
  },
  {
    title: "Index Options – Basic",
    price: "₹15,000",
    duration: "/ month",
    description:
      "Strategy-based index options trade ideas designed for controlled and informed participation.",
    features: [
      "2–3 trade ideas per day",
      "NIFTY & BANKNIFTY focus",
      "Strategy explanations",
      "Risk-first approach",
    ],
    buttonText: "Choose Basic",
  },
  {
    title: "Index Options – Premium",
    price: "₹25,000",
    duration: "/ month",
    description:
      "Advanced index options strategies for experienced traders with priority member support.",
    features: [
      "2–3 selected trade ideas per day",
      "Advanced options strategies",
      "Positional & intraday insights",
      "Priority support",
    ],
    buttonText: "Choose Premium",
  },
];

const MembershipPlans: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    capital: "",
    experience: "",
  });

  const openModal = (serviceName: string) => {
    setService(serviceName);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setForm({
      name: "",
      phone: "",
      email: "",
      capital: "",
      experience: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      service,
      ...form,
      timestamp: new Date().toISOString(),
    };

    console.log("Submitted Data:", payload);

    // 👉 Connect here: API / PHP / Google Script / Firebase
    closeModal();
  };

  return (
    <>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900">
              Trading Membership Plans
            </h1>
            <p className="mt-3 text-gray-600">
              Educational market insights and structured trade ideas only. No
              guaranteed returns.
            </p>
          </div>

          <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition ${
                  plan.popular
                    ? "border-blue-600 ring-2 ring-blue-500"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h2 className="text-xl font-semibold text-gray-900">
                  {plan.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.duration}</span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-600">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(plan.title)}
                  className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Enquiry for {service}
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                value={service}
                readOnly
                className="w-full rounded-lg border bg-gray-100 px-4 py-2 text-sm"
              />

              <input
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                value={form.name}
                className="w-full rounded-lg border px-4 py-2 text-sm"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                value={form.phone}
                className="w-full rounded-lg border px-4 py-2 text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                value={form.email}
                className="w-full rounded-lg border px-4 py-2 text-sm"
              />

              <input
                name="capital"
                placeholder="Approx Trading Capital (₹)"
                required
                onChange={handleChange}
                value={form.capital}
                className="w-full rounded-lg border px-4 py-2 text-sm"
              />

              <textarea
                name="experience"
                placeholder="Any Message Want To Share"
                onChange={handleChange}
                value={form.experience}
                className="w-full rounded-lg border px-4 py-2 text-sm"
              />

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full rounded-xl border py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipPlans;
