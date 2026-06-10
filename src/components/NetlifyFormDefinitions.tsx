export function NetlifyFormDefinitions() {
  return (
    <section className="hidden-form-field" aria-hidden="true">
      <form name="consultation-enquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="consultation-enquiry" />
        <input type="hidden" name="subject" value="New Care Navigator consultation enquiry" />
        <input name="bot-field" />
        <input name="name" />
        <input name="phone" />
        <input name="email" />
        <input name="postcode" />
        <input name="relationship" />
        <input name="enquiry_type" />
        <input name="preferred_contact" />
        <input name="urgency" />
        <textarea name="message" />
        <input name="consent" />
        <input name="newsletter_opt_in" />
      </form>
      <form name="professional-referral" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="professional-referral" />
        <input type="hidden" name="subject" value="New Care Navigator professional referral" />
        <input name="bot-field" />
        <input name="name" />
        <input name="organisation" />
        <input name="email" />
        <input name="phone" />
        <textarea name="referral_context" />
        <input name="consent" />
      </form>
      <form name="newsletter-signup" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter-signup" />
        <input type="hidden" name="subject" value="New Care Navigator newsletter signup" />
        <input name="bot-field" />
        <input name="name" />
        <input name="email" />
        <input name="consent" />
      </form>
    </section>
  );
}
