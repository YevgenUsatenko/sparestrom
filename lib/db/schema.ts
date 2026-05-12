import { pgTable, serial, text, integer, real, timestamp, boolean } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  plz: text("plz").notNull(),
  verbrauch: integer("verbrauch").notNull(),
  preis: real("preis").notNull(),
  saving: integer("saving").notNull(),
  telefon: text("telefon"),
  email: text("email"),
  name: text("name"),
  ip: text("ip"),
  contacted: boolean("contacted").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
