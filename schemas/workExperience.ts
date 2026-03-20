// schemas/workExperience.ts
export default {
  name: 'workExperience',
  title: 'Professional Path (Work)',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      description: 'Ej: Production & Logistics Associate',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      description: 'Ej: Hansen Farms',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Ej: Victoria, Australia',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Ej: Dec 2024 - Feb 2025',
    },
    // Usamos 'array' de 'string' para los bullets de la descripción
    {
      name: 'descriptionPoints',
      title: 'Job Description (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Agrega los logros y tareas principales (como en Hansen Farms).',
    },
  ],
}