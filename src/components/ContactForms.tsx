"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type Status = "idle" | "sending" | "error";

function encodeForm(formData: FormData) {
  const body = new URLSearchParams();
  formData.forEach((value, key) => body.append(key, value.toString()));
  return body.toString();
}

function useNetlifySubmit() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData)
      });
      if (!response.ok) throw new Error("Form submission failed");
      window.location.href = "/thank-you";
    } catch {
      setStatus("error");
    }
  }

  return { status, submit };
}

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const { status, submit } = useNetlifySubmit();

  return (
    <form
      id="consultation"
      className={`contact-form ${compact ? "contact-form-compact" : ""}`}
      name="consultation-enquiry"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="consultation-enquiry" />
      <input type="hidden" name="subject" value="New Care Navigator consultation enquiry" />
      <p className="hidden-form-field" aria-hidden="true">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Postcode
          <input name="postcode" type="text" autoComplete="postal-code" />
        </label>
        <label>
          Relationship to person needing support
          <select name="relationship" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Adult child</option>
            <option>Spouse or partner</option>
            <option>Attorney or deputy</option>
            <option>Solicitor or adviser</option>
            <option>Care professional</option>
            <option>Myself</option>
          </select>
        </label>
        <label>
          Enquiry type
          <select name="enquiry_type" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>NHS CHC eligibility</option>
            <option>CHC appeal or review</option>
            <option>Self-funding care planning</option>
            <option>Hospital discharge</option>
            <option>Complex care planning</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Preferred contact method
          <select name="preferred_contact" defaultValue="Phone">
            <option>Phone</option>
            <option>Email</option>
            <option>Either</option>
          </select>
        </label>
        <label>
          Urgency
          <select name="urgency" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Urgent this week</option>
            <option>Within 2 weeks</option>
            <option>Planning ahead</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={compact ? 3 : 5} required />
      </label>
      <label className="checkbox-line">
        <input name="consent" type="checkbox" required />
        I consent to Care Navigator contacting me about this enquiry.
      </label>
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Book a Free Initial Consultation"}
      </button>
      {status === "error" ? <p className="form-status" role="alert">Sorry, the form did not send. Please call or email instead.</p> : null}
    </form>
  );
}

export function ProfessionalReferralForm() {
  const { status, submit } = useNetlifySubmit();

  return (
    <form className="contact-form" name="professional-referral" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="professional-referral" />
      <input type="hidden" name="subject" value="New Care Navigator professional referral" />
      <p className="hidden-form-field" aria-hidden="true"><label>Leave blank<input name="bot-field" tabIndex={-1} /></label></p>
      <div className="form-grid">
        <label>Professional name<input name="name" required /></label>
        <label>Organisation<input name="organisation" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Phone<input name="phone" type="tel" /></label>
      </div>
      <label>Referral context<textarea name="referral_context" rows={5} required /></label>
      <label className="checkbox-line"><input name="consent" type="checkbox" required /> I confirm appropriate consent is in place to make this referral.</label>
      <button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Professional Referral"}</button>
      {status === "error" ? <p className="form-status" role="alert">Sorry, the referral did not send. Please email directly.</p> : null}
    </form>
  );
}

export function NewsletterForm() {
  const { status, submit } = useNetlifySubmit();

  return (
    <form className="newsletter-form" name="newsletter-signup" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
      <input type="hidden" name="form-name" value="newsletter-signup" />
      <input type="hidden" name="subject" value="New Care Navigator newsletter signup" />
      <input className="hidden-form-field" name="bot-field" tabIndex={-1} aria-hidden="true" />
      <input name="name" placeholder="Name" aria-label="Name" />
      <input name="email" type="email" placeholder="Email address" aria-label="Email address" required />
      <label className="checkbox-line"><input name="consent" type="checkbox" required /> Send me care-funding updates.</label>
      <button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? "Joining..." : "Join newsletter"}</button>
    </form>
  );
}
