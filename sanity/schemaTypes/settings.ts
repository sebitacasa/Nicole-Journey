// sanity/schemaTypes/settings.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'El título principal de la página (ej: "Nicole\'s Journey").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'La etiqueta pequeña arriba del título (ej: "Curated Portfolio & Journal").',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'La descripción debajo del título.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})