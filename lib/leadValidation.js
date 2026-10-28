// Shared by the browser forms and the /api/contact route, so both check the same rules.

export const LEAD_KINDS = {
  contact: ["name", "email", "phone", "message"], // required fields
  agence: ["name", "email", "phone", "service"],
};

const LIMITS = { name: 120, email: 160, phone: 20, organization: 160, service: 160, message: 4000 };

export const MESSAGES = {
  ar: {
    required: "هذا الحقل مطلوب.",
    tooLong: "النص أطول من المسموح.",
    email: "يرجى إدخال بريد إلكتروني صحيح.",
    phone: "يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05.",
    unknown: "نوع الطلب غير معروف.",
    invalid: "طلب غير صالح.",
  },
  en: {
    required: "This field is required.",
    tooLong: "This text is too long.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid Saudi mobile number starting with 05.",
    unknown: "Unknown request type.",
    invalid: "Invalid request.",
  },
};

export const normalizePhone = (v = "") => String(v).replace(/[\s\-()]/g, "");

export function validateLead(kind, data = {}, locale = "ar") {
  const m = MESSAGES[locale] || MESSAGES.ar;
  const errors = {};
  const required = LEAD_KINDS[kind];
  if (!required) return { _form: m.unknown };

  for (const field of required) {
    if (!String(data[field] ?? "").trim()) errors[field] = m.required;
  }
  for (const [field, max] of Object.entries(LIMITS)) {
    if (String(data[field] ?? "").length > max) errors[field] = m.tooLong;
  }
  if (!errors.email && data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(data.email).trim())) {
    errors.email = m.email;
  }
  if (!errors.phone && data.phone && !/^(05\d{8}|\+9665\d{8}|9665\d{8})$/.test(normalizePhone(data.phone))) {
    errors.phone = m.phone;
  }
  return errors;
}
