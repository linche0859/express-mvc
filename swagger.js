const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Posts API',
    description: 'A simple Express API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    Post: {
      id: '15af9eea-f389-4f6a-8e7d-131ce0ef5101',
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
