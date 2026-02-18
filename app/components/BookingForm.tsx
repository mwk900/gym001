"use client";

import { FormEvent, useMemo, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  goal: "Strength",
  message: ""
};

export function BookingForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const compiledMessage = useMemo(
    () =>
      `Consult request from ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nGoal: ${data.goal}\nMessage: ${data.message}`,
    [data]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!data.name || !data.email || !data.phone || !data.message) {
      setError("Please complete all fields before continuing.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const emailHref = `mailto:hello@northpeakperformance.co.uk?subject=${encodeURIComponent("Free Consultation Request")}&body=${encodeURIComponent(compiledMessage)}`;
  const waHref = `https://wa.me/447700900123?text=${encodeURIComponent(compiledMessage)}`;

  return (
    <div className="card p-6">
      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold">Book your free consultation</h3>
          <input className="w-full rounded-xl border border-white/20 bg-base px-4 py-3" placeholder="Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          <input className="w-full rounded-xl border border-white/20 bg-base px-4 py-3" type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input className="w-full rounded-xl border border-white/20 bg-base px-4 py-3" placeholder="Phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
          <select className="w-full rounded-xl border border-white/20 bg-base px-4 py-3" value={data.goal} onChange={(e) => setData({ ...data, goal: e.target.value })}>
            <option>Strength</option>
            <option>Fat Loss</option>
            <option>Muscle Gain</option>
            <option>Athletic Performance</option>
          </select>
          <textarea className="min-h-28 w-full rounded-xl border border-white/20 bg-base px-4 py-3" placeholder="Tell us about your goal and schedule" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button className="btn-primary w-full" type="submit">
            Continue
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Great — your enquiry is ready.</h3>
          <p className="text-white/75">Use one of the options below to send your message instantly.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" className="btn-secondary" onClick={() => navigator.clipboard.writeText(compiledMessage)}>
              Copy message
            </button>
            <a className="btn-secondary" href={emailHref}>
              Email
            </a>
            <a className="btn-secondary" href="tel:01150000000">
              Call
            </a>
            <a className="btn-primary" href={waHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
