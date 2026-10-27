const { z } = require("zod");

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const contactSchema = z.object({
  department: z.enum(["sales", "technical-support"]),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(20),
  company: z.string().trim().min(1).max(150),
});

// ==========================================
// SUPPORT FORM VALIDATION
// ==========================================

const supportSchema = z
  .object({
    firstName: z.string().trim().min(1, "First name is required").max(100),
    lastName: z.string().trim().min(1, "Last name is required").max(100),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .max(254),

    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number")
      .max(20, "Phone number is too long")
      .regex(/^[+\d().\-\s]+$/, "Please enter a valid phone number"),

    company: z
      .string()
      .trim()
      .min(1, "Company or organization is required")
      .max(150),

    address1: z.string().trim().max(200).optional().default(""),
    address2: z.string().trim().max(200).optional().default(""),
    city: z.string().trim().max(100).optional().default(""),
    state: z.string().trim().max(100).optional().default(""),

    zip: z
      .string()
      .trim()
      .max(20, "Postal code is too long")
      .optional()
      .default(""),

    interests: z.
      array( 
        z.enum([ 
          "quote", 
          "fluidized-baths", 
          "dry-block", 
          "hepa", 
          "calibration-services", 
          "support-service", 
          "documentation", 
          "sample-cleaning", 
          "sample-heat-treatment", 
          "other", 
        ]) 
      )
      .max(8, "Too many interests selected")
      .default([]),

    message: z
      .string()
      .trim()
      .max(3000, "Message must not exceed 3000 characters")
      .optional()
      .default(""),

    source: z.literal("support-page").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.interests.includes("quote")) {
      const requiredAddressFields = [
        ["address1", "Address is required when requesting a quote"],
        ["city", "City is required when requesting a quote"],
        ["state", "State is required when requesting a quote"],
        ["zip", "ZIP/postal code is required when requesting a quote"],
      ];

      for (const [field, message] of requiredAddressFields) {
        if (!data[field]?.trim()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [field],
            message,
          });
        }
      }
    }
  });

// ==========================================
// CONTACT FORM CONTROLLER
// ==========================================

async function createContactEnquiry(req, res) {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Please check the information you entered.",
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const enquiry = result.data;

  console.log("Contact enquiry received:", {
    ...enquiry,
    email: "[REDACTED]",
    phone: "[REDACTED]",
  });

  return res.status(202).json({
    success: true,
    message: "Your enquiry was received by the backend.",
    stored: false,
  });
}

// ==========================================
// SUPPORT FORM CONTROLLER
// ==========================================

async function createSupportEnquiry(req, res) {
  const result = supportSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Please check the information entered in the support form.",
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  const enquiry = result.data;

  console.log("Support enquiry received:", {
    firstName: enquiry.firstName,
    lastName: enquiry.lastName,
    company: enquiry.company,
    source: enquiry.source || "support-page",
    interests: enquiry.interests,
    hasMessage: Boolean(enquiry.message),
  });

  return res.status(202).json({
    success: true,
    message: "Your support request was validated successfully.",
    stored: false,
  });
}

module.exports = {
  createContactEnquiry,
  createSupportEnquiry,
};