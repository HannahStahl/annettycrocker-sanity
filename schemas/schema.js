import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Photo Gallery',
      name: 'gallery',
      type: 'document',
      fields: [
        {
          title: 'Photo Gallery',
          name: 'photos',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            layout: 'grid'
          },
          validation: Rule => Rule.required().length(12)
        }
      ]
    }
  ]),
})
