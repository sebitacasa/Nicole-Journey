// sanity/schemaTypes/study.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'study',
  title: 'Education & Training',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree / Certificate',
      type: 'string',
      description: 'Ej: Full-Stack Web Development Certificate o Bachelor in Hydrocarbons',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      description: 'Ej: Henry Bootcamp o Universidad Siglo 21',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Completion Date / Status',
      type: 'string',
      description: 'Ej: En curso o 2026',
    }),
    defineField({
      name: 'skills',
      title: 'Key Skills Learned',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ej: React, Node.js, JavaScript (se mostrarán como etiquetas/tags)',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Un breve resumen de lo que abarcó este estudio.',
    }),
  ],
})