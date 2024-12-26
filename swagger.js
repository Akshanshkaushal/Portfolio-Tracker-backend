const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API',
      version: '1.0.0',
      description: 'API to manage portfolio stocks',
    },
    servers: [
      {
        url: 'https://portfolio-tracker-backend-keer.onrender.com/api',  
      },
    ],
  },
  apis: ['./controllers/portfolioController.js', './routes/portfolioRoutes.js'],  
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
