import AssertionShow from "./AssertionShow";

export default {
  config: {
    show: AssertionShow,
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
        'recipient': 'Destinataire',
        'issuedOn': "Date d'émisssion",
        'evidence.narrative': 'Évidences'
      },
    },
  },
};
