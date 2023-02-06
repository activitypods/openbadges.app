import AssertionCreate from "./AssertionCreate";

export default {
  config: {
    create: AssertionCreate,
    options: {
      label: 'Badges',
    },
  },
  dataModel: {
    types: ['obi:Assertion'],
    list: {
      blankNodes: ['obi:recipient', 'obi:verify']
    }
  },
  translations: {
    fr: {
      name: 'Badge |||| Badges',
      fields: {
        'schema:image': 'Image',
        'obi:recipient': 'Destinataire'
      },
    },
  },
};
