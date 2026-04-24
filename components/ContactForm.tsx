"use client";

import { useState } from "react";

type FormData = {
  founderName: string;
  email: string;
  phone: string;
  startupName: string;
  sector: string;
  stage: string;
  website: string;
  oneLiner: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormData = {
  founderName: "",
  email: "",
  phone: "",
  startupName: "",
  sector: "",
  stage: "",
  website: "",
  oneLiner: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  // ── SUCCESS STATE ──
  if (status === "success") {
    return (
      <div className="card-dark p-12 text-center">
        <div className="w-16 h-16 border border-brand-orange flex items-center justify-center mx-auto mb-6">
          <span className="text-brand-orange text-2xl">✓</span>
        </div>
        <h3 className="font-display text-2xl font-light text-brand-off-white mb-4">
          Thank You!
        </h3>
        <p className="body-text mb-8">
          We have received your pitch. Our team will review it and reach out
          to you if there is a fit. This usually takes 5–7 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline text-xs"
        >
          Submit Another
        </button>
      </div>
    );
  }

  // ── FORM ──
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      {/* Founder info row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Your Name *
          </label>
          <input
            type="text"
            name="founderName"
            value={form.founderName}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="form-input"
          />
        </div>
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="form-input"
          />
        </div>
      </div>

      {/* Phone and startup name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="form-input"
          />
        </div>
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Startup Name *
          </label>
          <input
            type="text"
            name="startupName"
            value={form.startupName}
            onChange={handleChange}
            required
            placeholder="Your startup name"
            className="form-input"
          />
        </div>
      </div>

      {/* Sector and Stage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Sector *
          </label>
          <select
            name="sector"
            value={form.sector}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select sector</option>
            <option value="Consumer">Consumer</option>
            <option value="Services">Services</option>
            <option value="Platform">Platform</option>
            <option value="Fintech">Fintech</option>
            <option value="Healthtech">Healthtech</option>
            <option value="Edtech">Edtech</option>
            <option value="SaaS">SaaS</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
            Stage *
          </label>
          <select
            name="stage"
            value={form.stage}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="" disabled>Select stage</option>
            <option value="Idea">Idea Stage</option>
            <option value="Pre-Seed">Pre-Seed</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B+">Series B+</option>
          </select>
        </div>
      </div>

      {/* Website */}
      <div>
        <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
          Website
        </label>
        <input
          type="url"
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="https://yourstartup.com or Google Drive link"
          className="form-input"
        />
      </div>

      {/* One liner */}
      <div>
        <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
          One-Line Description *
        </label>
        <input
          type="text"
          name="oneLiner"
          value={form.oneLiner}
          onChange={handleChange}
          required
          placeholder="We help [who] do [what] by [how]"
          className="form-input"
        />
      </div>

      {/* Message */}
      <div>
        <label className="font-body text-xs tracking-widest uppercase text-brand-orange block mb-2">
          Tell Us More *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="What problem are you solving? What's your traction so far? Why are you the right team to build this?"
          className="form-input resize-none"
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="border border-red-500/30 bg-red-500/5 px-5 py-4">
          <p className="font-body text-sm text-red-400">{errorMsg}</p>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Your Pitch →"
        )}
      </button>

      <p className="font-body text-xs text-[#444444] text-center">
        We review every submission. Expect a reply within 5–7 business days if
        there is a fit.
      </p>
    </form>
  );
}
