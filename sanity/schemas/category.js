export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category name',
      type: 'string',
      Validition: (Rule) => Rule.reqired(),
    },
    {
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    },
  ],
}
