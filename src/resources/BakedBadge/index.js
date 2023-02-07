import BakedBadgeCreate from "./BakedBadgeCreate";

export default {
  config: {
    create: BakedBadgeCreate,
    options: {
      label: 'Badges cuits',
    },
  },
  dataModel: {
    types: ['semapps:File'],
    create: {
      container: {
        pod: '/baked-badges'
      }
    }
  },
  translations: {
    fr: {
      name: 'Badge cuit |||| Badges cuits',
      fields: {
        'schema:image': 'Image'
      },
    },
  },
};
