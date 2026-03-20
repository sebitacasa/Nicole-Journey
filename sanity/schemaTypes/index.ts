// sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'
import journey from './journey'
import work from './work'
import study from './study'
import settings from './settings' // <-- Añade esto

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [journey, work, study, settings], // <-- Y agrégalo a la lista
}