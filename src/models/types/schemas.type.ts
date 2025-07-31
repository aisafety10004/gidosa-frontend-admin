import { PersonaSchema } from "@/utils/validations/persona.validation";
import { z } from "zod";

export type TPersonaSchema = z.infer<typeof PersonaSchema>;