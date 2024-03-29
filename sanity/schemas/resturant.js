export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant_name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Resturant Image',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Resturant Latitude',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Resturant Longitude',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Resturant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Resturant rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Rating can be only between 1 and 5"),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish"}] }],
    },
    
  ],
}
