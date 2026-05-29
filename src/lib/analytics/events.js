/**
 * Pre-built event helpers for every tracked interaction on the site.
 *
 * Import these instead of calling trackEvent directly — they enforce
 * consistent property shapes and keep business logic out of components.
 *
 * Usage:
 *   import { events } from "@/lib/analytics/events";
 *   events.contactFormSubmit({ service: "AI Development", source: "hero" });
 */

import { trackEvent, trackLinkedInConversion } from "./analytics";
import { EventName } from "./types";

// LinkedIn conversion IDs — fill in from Campaign Manager once configured.
const LI_CONVERSION = {
  CONTACT_FORM: null, // e.g. 12345678
  BOOKING: null,      // e.g. 87654321
};

export const events = {
  // ─── Lead / conversion ──────────────────────────────────────────────────

  /**
   * @param {{ service?: string, source?: string, page?: string }} props
   */
  contactFormSubmit({ service, source, page } = {}) {
    trackEvent({
      name: EventName.CONTACT_FORM_SUBMIT,
      properties: { service, source, page },
    });
    if (LI_CONVERSION.CONTACT_FORM) {
      trackLinkedInConversion(LI_CONVERSION.CONTACT_FORM);
    }
  },

  /**
   * Primary booking CTA — opens external Google Calendar link.
   * @param {{ label?: string, destination?: string, page?: string }} props
   */
  bookingCtaClick({ label, destination, page } = {}) {
    trackEvent({
      name: EventName.BOOKING_CTA_CLICK,
      properties: { label, destination, page },
    });
    if (LI_CONVERSION.BOOKING) {
      trackLinkedInConversion(LI_CONVERSION.BOOKING);
    }
  },

  /**
   * Secondary consultation CTA — navigates to the /contact page.
   * Distinct from bookingCtaClick so the two conversion paths are separable
   * in GA4 reports.
   * @param {{ label?: string, page?: string }} props
   */
  consultationRequest({ label, page } = {}) {
    trackEvent({
      name: EventName.CONSULTATION_REQUEST,
      properties: { label, page },
    });
  },

  /**
   * @param {{ caseStudyTitle: string, page?: string }} props
   */
  caseStudyDownload({ caseStudyTitle, page } = {}) {
    trackEvent({
      name: EventName.CASE_STUDY_DOWNLOAD,
      properties: { case_study_title: caseStudyTitle, page },
    });
  },

  // ─── Engagement ─────────────────────────────────────────────────────────

  /**
   * @param {{ label: string, href: string }} props
   */
  navLinkClick({ label, href } = {}) {
    trackEvent({
      name: EventName.NAV_LINK_CLICK,
      properties: { label, href },
    });
  },

  /**
   * @param {{ label?: string, destination?: string, section?: string }} props
   */
  heroCtaClick({ label, destination, section } = {}) {
    trackEvent({
      name: EventName.HERO_CTA_CLICK,
      properties: { label, destination, section },
    });
  },

  /**
   * @param {{ service: string, page?: string }} props
   */
  serviceCardClick({ service, page } = {}) {
    trackEvent({
      name: EventName.SERVICE_CARD_CLICK,
      properties: { service, page },
    });
  },

  /**
   * @param {{ question: string, page?: string }} props
   */
  faqExpand({ question, page } = {}) {
    trackEvent({
      name: EventName.FAQ_EXPAND,
      properties: { question, page },
    });
  },

  /**
   * @param {{ slug: string, title: string, readTimeMinutes?: number }} props
   */
  blogPostRead({ slug, title, readTimeMinutes } = {}) {
    trackEvent({
      name: EventName.BLOG_POST_READ,
      properties: { slug, title, read_time_minutes: readTimeMinutes },
    });
  },

  /**
   * @param {{ authorName?: string, page?: string }} props
   */
  testimonialView({ authorName, page } = {}) {
    trackEvent({
      name: EventName.TESTIMONIAL_VIEW,
      properties: { author_name: authorName, page },
    });
  },

  // ─── Outbound ────────────────────────────────────────────────────────────

  /**
   * @param {{ url: string, label?: string, page?: string }} props
   */
  outboundLinkClick({ url, label, page } = {}) {
    trackEvent({
      name: EventName.OUTBOUND_LINK_CLICK,
      properties: { url, label, page },
    });
  },

  // ─── Errors ──────────────────────────────────────────────────────────────

  /**
   * @param {{ field: string, message: string, formName?: string }} props
   */
  formValidationError({ field, message, formName } = {}) {
    trackEvent({
      name: EventName.FORM_VALIDATION_ERROR,
      properties: { field, message, form_name: formName },
    });
  },

  /**
   * @param {{ endpoint: string, statusCode?: number, message?: string }} props
   */
  apiError({ endpoint, statusCode, message } = {}) {
    trackEvent({
      name: EventName.API_ERROR,
      properties: { endpoint, status_code: statusCode, message },
    });
  },
};
