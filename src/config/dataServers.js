const dataServers = {
  pod: {
    pod: true,
    default: true,
    authServer: true,
    baseUrl: null, // Calculated from the token
    sparqlEndpoint: null, // Calculated from the token
    containers: {
      pod: {
        'obi:Assertion': ['/assertions'],
        'obi:BadgeClass': ['/badges'],
        'vcard:Location': ['/locations'],
        'vcard:Individual': ['/profiles']
      },
    },
    uploadsContainer: '/files',
  }
};

export default dataServers;
