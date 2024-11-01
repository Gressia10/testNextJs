module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/inmuebles', 
          destination: 'https://dev2api.obriencrm.com/v1/Website/inmuebles',
        },
        {
          source: '/api/inmueble/:id', 
          destination: 'https://dev2api.obriencrm.com/v1/Website/inmueble/:id', 
        },
      ];
    },
  };