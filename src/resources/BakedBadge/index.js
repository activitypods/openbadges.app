import BakedBadgeCreate from "./BakedBadgeCreate";

export default {
  config: {
    create: BakedBadgeCreate,
    options: {
      label: 'Badges',
    },
  },
  dataModel: {
    types: ['semapps:File'],
    create: {
      container: '/baked-badges',
      singleFile: true
    }
  }
};
