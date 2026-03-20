// schemas/journey.ts
export default {
  name: 'journey',
  title: 'Journeys (Travel Logs)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Journey Title',
      type: 'string',
      description: 'Ej: Sacred Valley & Machu Picchu',
      validation: (Rule: any) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'La URL única (ej: machu-picchu). Generar automáticamente.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ej: Cusco, Peru',
    },
    {
      name: 'date',
      title: 'Date of Journey',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
        calendarTodayLabel: 'Today'
      }
    },
    // Imagen Hero Principal
    {
      name: 'mainImage',
      title: 'Main (Hero) Image',
      type: 'image',
      options: {
        hotspot: true, // ¡Blindaje! Ella elige el enfoque.
      },
      validation: (Rule: any) => Rule.required(),
    },
    // Primer caracter para el estilo capitular
    {
      name: 'firstChar',
      title: 'Drop Cap (First Letter)',
      type: 'string',
      description: 'La primera letra del relato (ej: N).',
      validation: (Rule: any) => Rule.required().max(1),
    },
    // El relato dividido (como lo teníamos en Mock Data)
    {
      name: 'restContent',
      title: 'Journey Narrative (Rest of the text)',
      type: 'text',
      description: 'El relato del viaje, excluyendo la primera letra.',
      validation: (Rule: any) => Rule.required().min(50),
    },
    // Galería de fotos para el carrusel
    {
      name: 'gallery',
      title: 'Image Gallery (Moments)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Sube las fotos para el carrusel interactivo.',
    },
  ],
}