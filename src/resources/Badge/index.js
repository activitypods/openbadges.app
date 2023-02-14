import BadgeEdit from './BadgeEdit';
import BadgeList from './BadgeList';
import BadgeShow from './BadgeShow';
import BadgeCreate from './BadgeCreate';

export default {
  config: {
    list: BadgeList,
    show: BadgeShow,
    create: BadgeCreate,
    edit: BadgeEdit,
    options: {
      label: 'Modèles de Badges',
    },
  },
  dataModel: {
    types: ['obi:BadgeClass'],
    list: {
      blankNodes: ['obi:criteria']
    }
  },
  translations: {
    fr: {
      name: 'Modèle de Badge |||| Modèles de Badges',
      fields: {
        'schema:name': 'Nom',
        'schema:description': 'Description',
        'schema:image': 'Image',
        'dc:creator': "Émetteur",
        'dc:created': "Date de création",
        'recipient': 'Destinataires',
        'issuer': 'Émetteur',
        'criteria.narrative': 'Critères'
      },
    },
  },
};
