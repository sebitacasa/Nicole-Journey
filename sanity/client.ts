// sanity/client.ts
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env"; // Importamos las variables seguras

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // En false para ver los cambios instantáneamente mientras desarrollas
});