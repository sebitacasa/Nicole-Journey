// sanity/schemaTypes/journey.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'journey',
  title: 'Journeys (Travel Logs)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Journey Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'La URL única (ej: machu-picchu). Dale al botón "Generate".',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date of Journey',
      type: 'string',
      description: 'Ej: Mayo 2024',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main (Hero) Image',
      type: 'image',
      options: { hotspot: true }, // Permite elegir el punto focal de la imagen
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firstChar',
      title: 'Drop Cap (First Letter)',
      type: 'string',
      description: 'La letra gigante con la que empieza el relato (ej: N).',
      validation: (Rule) => Rule.required().max(1),
    }),
    defineField({
      name: 'restContent',
      title: 'Journey Narrative (Rest of the text)',
      type: 'text',
      description: 'Todo el texto del relato, excluyendo la primera letra.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery (Moments for Carousel)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})