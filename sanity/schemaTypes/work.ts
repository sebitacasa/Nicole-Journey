// sanity/schemaTypes/work.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Professional Path (Work)',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      description: 'Ej: Full-Stack Developer o Logistics Associate',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ej: St. Pölten, Austria o Victoria, Australia',
    }),
    defineField({
      name: 'period',
      title: 'Time Period',
      type: 'string',
      description: 'Ej: Mar 2024 - Present',
    }),
    defineField({
      name: 'descriptionPoints',
      title: 'Job Description (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Añade cada tarea o logro como un ítem separado para renderizar una lista en el frontend.',
    }),
  ],
})