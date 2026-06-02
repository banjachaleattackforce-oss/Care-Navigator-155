import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  Landmark,
  Mail,
  Map,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  seoTitle: string;
  summary: string;
  description: string;
  outcomes: string[];
  audience: string;
  icon: typeof ShieldCheck;
  faq: [string, string][];
};

export const brand = {
  name: "Care Navigator",
  company: "Care Navigator",
  founder: "Yvonne Brown",
  phone: "07711 494588",
  phoneHref: "tel:+447711494588",
  email: "hello@carenavigator.org",
  emailHref: "mailto:hello@carenavigator.org",
  serviceAreas: ["United Kingdom", "England", "London", "Hertfordshire"],
  tagline: "Navigate funding. Protect care. Support decisions.",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "/contact#consultation"
};

export const primaryEmailSubject = "Free initial consultation request";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/nhs-chc-eligibility-review" },
  { label: "For Families", href: "/for-families" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/news" },
  { label: "Contact", href: "/contact" }
];

export const services: Service[] = [
  {
    slug: "initial-case-review",
    title: "Initial Case Review",
    eyebrow: "Where to begin",
    seoTitle: "Initial Care Funding Case Review | Care Navigator",
    summary:
      "A structured first review to understand the care situation, funding questions, documents available and safest next steps.",
    description:
      "The initial case review gives families and professionals a calm starting point. We look at what is happening now, what assessments or decisions have already taken place, and what evidence may be needed before the next meeting or funding decision.",
    outcomes: [
      "Clarify the immediate problem and decision timeline",
      "Identify whether NHS CHC, local authority or self-funding routes may be relevant",
      "Create a practical action list for records, questions and next conversations"
    ],
    audience: "Families, deputies, attorneys, solicitors and advisers who need a clear route before acting.",
    icon: Map,
    faq: [
      ["Is this a full CHC assessment?", "No. It is a structured advisory review to help you understand the situation and decide what to prepare next."],
      ["What should I bring?", "Bring decision letters, care plans, assessment notes, hospital discharge information and any recent clinical or care records you already have."]
    ]
  },
  {
    slug: "nhs-chc-eligibility-review",
    title: "NHS CHC Eligibility Review",
    eyebrow: "CHC funding",
    seoTitle: "NHS Continuing Healthcare Support | Care Navigator",
    summary:
      "Independent support to understand whether NHS Continuing Healthcare may be relevant and how evidence maps to the CHC process.",
    description:
      "NHS Continuing Healthcare can feel opaque, especially when families are trying to distinguish health needs from social care needs. We help you understand the assessment route, the role of the Checklist and Decision Support Tool, and the evidence needed to present needs clearly.",
    outcomes: [
      "Review known needs against the CHC process",
      "Identify evidence gaps before a Checklist, full assessment or review",
      "Prepare focused questions for practitioners and Integrated Care Board communication"
    ],
    audience: "Families facing possible CHC assessment, review or withdrawal of funding.",
    icon: ShieldCheck,
    faq: [
      ["Does a positive Checklist guarantee CHC funding?", "No. Official guidance says a positive Checklist means a full assessment is required; it does not automatically mean eligibility."],
      ["Can you guarantee a funding outcome?", "No. Care Navigator provides evidence-led guidance and preparation, but eligibility decisions sit with the responsible NHS process."]
    ]
  },
  {
    slug: "chc-evidence-preparation",
    title: "CHC Evidence Preparation",
    eyebrow: "Records and evidence",
    seoTitle: "CHC Evidence Preparation Consultant | Care Navigator",
    summary:
      "Organise care records, clinical notes and family observations into a clear evidence pack for assessment or review.",
    description:
      "Strong CHC preparation depends on evidence that is relevant, organised and tied to the person’s daily needs. We help families and professional representatives collate documents, spot missing records and summarise concerns without losing the human story.",
    outcomes: [
      "Build a document checklist for the current case stage",
      "Summarise key care needs and evidence references",
      "Prepare clear notes for meetings and written submissions"
    ],
    audience: "Families and representatives preparing for Checklist, DST, review, appeal or care package discussions.",
    icon: FileCheck2,
    faq: [
      ["Can family observations be useful?", "Yes. Family observations can help explain daily patterns, risks and deterioration, especially when linked carefully to records and examples."],
      ["Do you replace clinical evidence?", "No. Clinical and care records remain central. We help organise and interpret the evidence already available or needed."]
    ]
  },
  {
    slug: "mdt-representation",
    title: "MDT Representation",
    eyebrow: "Assessment meetings",
    seoTitle: "MDT Representation for CHC Assessments | Care Navigator",
    summary:
      "Preparation and meeting support for Multi-Disciplinary Team discussions, reviews and care-planning meetings.",
    description:
      "CHC and complex care meetings can be emotional and technical. We help families prepare the right documents, frame concerns calmly, and keep the conversation focused on needs, risks, evidence and next actions.",
    outcomes: [
      "Prepare a meeting brief and question list",
      "Support clear presentation of needs and family concerns",
      "Record next actions and follow-up evidence requests"
    ],
    audience: "Families and attorneys attending MDT, CHC, discharge or care package meetings.",
    icon: Users,
    faq: [
      ["What does MDT mean?", "MDT means Multi-Disciplinary Team, usually involving professionals from different health and care disciplines."],
      ["Can you attend remotely?", "Remote support can be suitable where the meeting format and client consent allow it."]
    ]
  },
  {
    slug: "appeals-support",
    title: "Appeals Support",
    eyebrow: "Challenge decisions",
    seoTitle: "CHC Appeal Support for Families | Care Navigator",
    summary:
      "Structured help when a CHC or care-funding decision does not seem to reflect the person’s needs.",
    description:
      "Appeals need clarity, evidence and restraint. We help you understand the decision letter, identify disputed points, organise supporting evidence and prepare a focused response that stays close to the assessment criteria and lived reality.",
    outcomes: [
      "Review decision letters and disputed findings",
      "Map appeal points to evidence and daily risk",
      "Prepare a calm submission structure for review or appeal"
    ],
    audience: "Families, deputies and representatives considering or preparing a challenge.",
    icon: Scale,
    faq: [
      ["How quickly should an appeal be started?", "Act promptly after receiving a decision letter and check the appeal or review deadline stated in the letter."],
      ["Is this legal advice?", "No. This is independent care and evidence guidance. Legal advice should come from a suitably regulated legal professional."]
    ]
  },
  {
    slug: "self-funding-care-planning",
    title: "Self-Funding Care Planning",
    eyebrow: "Private funding",
    seoTitle: "Care Funding Advice for Self-Funding Families | Care Navigator",
    summary:
      "Independent guidance for families paying privately for care who need to reduce risk and plan with more confidence.",
    description:
      "Self-funding families often make decisions quickly under pressure. We help clarify care options, likely risks, questions to ask providers and when specialist financial or legal advice may be needed.",
    outcomes: [
      "Clarify current care needs and future planning risks",
      "Prepare provider questions and review points",
      "Identify when to involve financial, legal or clinical specialists"
    ],
    audience: "Self-funding families, attorneys and advisers planning care at home or in residential settings.",
    icon: Landmark,
    faq: [
      ["Do you give regulated financial advice?", "No. We provide care-planning guidance and can flag when regulated financial advice may be needed."],
      ["Can this help before choosing a care provider?", "Yes. It helps families ask better questions and understand what support may be required."]
    ]
  },
  {
    slug: "care-package-review",
    title: "Care Package Review",
    eyebrow: "Care quality",
    seoTitle: "Care Package Review Consultant | Care Navigator",
    summary:
      "Review whether a current care package reflects safety, dignity, routines, family concerns and changing needs.",
    description:
      "Care packages can drift away from real needs as conditions change. We help families and professionals review whether support is proportionate, coordinated and clearly documented.",
    outcomes: [
      "Review care package fit against current needs",
      "Identify practical risks, gaps and escalation points",
      "Prepare a care-review agenda for providers or professionals"
    ],
    audience: "Families concerned that current care arrangements are no longer enough or no longer coherent.",
    icon: ClipboardCheck,
    faq: [
      ["Is this an inspection?", "No. It is an independent advisory review to help families understand questions, gaps and options."],
      ["Can this support safeguarding concerns?", "If there are immediate safety concerns, contact emergency services or the relevant safeguarding route. We can help organise non-emergency care-review concerns."]
    ]
  },
  {
    slug: "hospital-discharge-planning",
    title: "Hospital Discharge Planning",
    eyebrow: "Coming home safely",
    seoTitle: "Hospital Discharge Care Planning Support | Care Navigator",
    summary:
      "Practical planning support when discharge, short-term care, rehabilitation or longer-term funding decisions are moving quickly.",
    description:
      "Discharge conversations can happen fast. We help families understand the questions to ask, the records to request, and the care or assessment routes that may need consideration before or after discharge.",
    outcomes: [
      "Prepare discharge questions and family priorities",
      "Identify care, equipment and follow-up risks",
      "Clarify when CHC, reablement or social care discussions may be relevant"
    ],
    audience: "Families managing discharge from hospital, rehabilitation or interim care.",
    icon: CalendarCheck,
    faq: [
      ["Can CHC be considered around discharge?", "Yes, where there may be a need for NHS Continuing Healthcare, the process should be considered at the right time and setting."],
      ["Can you arrange care providers?", "Care Navigator is a consultancy service. We help you plan and ask the right questions rather than acting as a care agency."]
    ]
  },
  {
    slug: "complex-care-planning",
    title: "Complex Care Planning",
    eyebrow: "Higher needs",
    seoTitle: "Complex Care Planning Consultant | Care Navigator",
    summary:
      "Founder-led guidance where care needs, risks, family decisions and funding routes are complex or changing.",
    description:
      "Complex care planning brings together evidence, safety, routines, family capacity, funding routes and professional input. We help make the moving parts visible so decisions can be made with less panic and more structure.",
    outcomes: [
      "Map needs, risks, people involved and decision points",
      "Clarify evidence and communication gaps",
      "Create a route plan for care, reviews and funding discussions"
    ],
    audience: "Families and professionals supporting people with complex, changing or high-risk care needs.",
    icon: HeartHandshake,
    faq: [
      ["What counts as complex care planning?", "Situations involving multiple professionals, changing health needs, high risk, funding uncertainty or difficult family decisions may require complex care planning."],
      ["Is this only about CHC?", "No. CHC may be one route, but complex planning can also involve self-funding, social care, discharge, provider review and family support."]
    ]
  },
  {
    slug: "professional-referrals",
    title: "Professional Referrals",
    eyebrow: "For advisers",
    seoTitle: "Care Consultancy for Solicitors and Deputies | Care Navigator",
    summary:
      "Independent care consultancy input for solicitors, deputies, attorneys, financial advisers and professional networks.",
    description:
      "Professional clients often need a clear care picture before legal, deputyship or financial planning decisions can move forward. We provide structured, independent care guidance that supports better questions, records and next steps.",
    outcomes: [
      "Provide a clear referral route for client care concerns",
      "Support care-funding and care-package context for professional advice",
      "Prepare practical next-step summaries for family or professional teams"
    ],
    audience: "Solicitors, financial advisers, professional deputies, attorneys and care professionals.",
    icon: BriefcaseBusiness,
    faq: [
      ["Can professionals refer a client?", "Yes. Use the professional referral form and include the client context, consent status and urgency."],
      ["Do you replace legal or financial advice?", "No. Care Navigator provides care consultancy input that can sit alongside regulated legal or financial advice."]
    ]
  }
];

export const familyRoutes = [
  "A parent has been discharged or may be discharged soon",
  "The family is unsure whether CHC funding has been considered properly",
  "Care needs have increased and the current package feels unsafe",
  "A self-funding decision needs to be made without panic",
  "A decision letter, review or appeal needs a clear response"
];

export const professionalRoutes = [
  "Care context for deputyship or attorney decisions",
  "Independent support before a client care-funding conversation",
  "CHC or care-package background for a family matter",
  "A practical referral route when care needs are outside the adviser’s scope"
];

export const journeySteps = [
  { title: "Discovery Call", text: "A calm first conversation to understand the situation, urgency and documents available." },
  { title: "Evidence Review", text: "We organise care records, decisions, care plans and family observations into a clear picture." },
  { title: "Route Plan", text: "You receive practical next steps for CHC, self-funding, care review, discharge or professional referral." },
  { title: "Ongoing Support", text: "Where helpful, we support preparation for meetings, reviews, appeals and care-planning decisions." }
];

export const commonMisconceptions = [
  {
    title: "CHC funding is only about diagnosis.",
    content:
      "Diagnosis matters, but CHC decisions look at the nature, intensity, complexity and unpredictability of the person's needs. The evidence needs to show what care is required day to day."
  },
  {
    title: "A Checklist means funding is guaranteed.",
    content:
      "A positive Checklist normally means the person should move to a full assessment. It is an important step, but the final decision depends on the wider evidence and assessment process."
  },
  {
    title: "Self-funding means there is no care-planning risk.",
    content:
      "Privately funded care still needs careful planning. Families may need to review provider fit, changing needs, safety risks, records, contingency plans and when to involve regulated advisers."
  },
  {
    title: "Appeals are only about disagreeing loudly.",
    content:
      "Good appeals are calm, structured and evidence-led. The stronger route is to understand the decision, identify the disputed points and connect each concern to records and lived examples."
  }
];

export const proofPoints = [
  { label: "20+ years", text: "Health and social care experience", icon: BadgeCheck },
  { label: "Founder-led", text: "Direct guidance from Yvonne Brown", icon: HeartHandshake },
  { label: "Evidence-led", text: "Clear records, meetings and route plans", icon: FileCheck2 },
  { label: "Independent", text: "Guidance focused on the family’s interests", icon: ShieldCheck }
];

export const resourceTags = [
  "NHS CHC",
  "Care funding",
  "Self-funding",
  "CHC appeals",
  "Decision Support Tool",
  "MDT meetings",
  "Hospital discharge",
  "Complex care",
  "Professional deputies",
  "Family guidance"
];

export const contactMethods = [
  { label: "Call now", href: brand.phoneHref, icon: Phone },
  { label: "Email us", href: brand.emailHref, icon: Mail },
  { label: "Book consultation", href: brand.bookingUrl, icon: MessageCircle }
];

export const sourceLinks = [
  { label: "NHS Continuing Healthcare", href: "https://www.nhs.uk/social-care-and-support/money-work-and-benefits/nhs-continuing-healthcare/" },
  { label: "GOV.UK CHC Checklist", href: "https://www.gov.uk/government/publications/nhs-continuing-healthcare-checklist" },
  { label: "GOV.UK Decision Support Tool", href: "https://www.gov.uk/government/publications/nhs-continuing-healthcare-decision-support-tool" }
];

export const newsletterPitch =
  "Monthly care-funding notes for families and professionals: CHC process explainers, care-planning questions, appeal preparation and self-funding risk points.";

export const professionalDisclaimer =
  "Care Navigator provides independent care consultancy guidance. It does not provide regulated legal, financial or clinical advice.";

export const founderCopy =
  "Yvonne Brown brings more than two decades of health and social care experience to families who need clear thinking at difficult moments. Her work is practical, evidence-led and grounded in the reality of care decisions.";

export const serviceCtaLabels: Record<string, string> = {
  "initial-case-review": "Start with an Initial Case Review",
  "nhs-chc-eligibility-review": "Review CHC Eligibility",
  "chc-evidence-preparation": "Prepare CHC Evidence",
  "mdt-representation": "Prepare for an MDT Meeting",
  "appeals-support": "Review a CHC Decision",
  "self-funding-care-planning": "Plan Self-Funded Care",
  "care-package-review": "Review a Care Package",
  "hospital-discharge-planning": "Plan a Safer Discharge",
  "complex-care-planning": "Map Complex Care Needs",
  "professional-referrals": "Discuss a Professional Referral"
};
