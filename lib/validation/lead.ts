import { z } from "zod";

export const leadSchema = z.object({
  plz: z.string().regex(/^\d{4}$/, "Bitte eine gültige 4-stellige PLZ angeben."),
  verbrauch: z.number().min(500).max(50000),
  preis: z.number().min(10).max(60),
  saving: z.number(),
  name: z.string().max(200).optional(),
  telefon: z
    .string()
    .regex(/^[+\d\s\-()]{6,20}$/, "Bitte eine gültige Telefonnummer angeben.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Bitte eine gültige E-Mail-Adresse angeben.")
    .optional()
    .or(z.literal("")),
}).refine(
  (data) => (data.telefon && data.telefon.length > 0) || (data.email && data.email.length > 0),
  { message: "Bitte Telefonnummer oder E-Mail angeben." }
);

export type LeadInput = z.infer<typeof leadSchema>;
