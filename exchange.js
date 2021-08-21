const { default: axios } = require('axios');
const express = require('express')
const app = express()
const port = 4000
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "exchange API",
      description: "exchange API Information",
      contact: {
        name: "exchange Developer"
      },
      servers: ["http://localhost:4000/exchange"]
    }
  },
  // ['.routes/*.js']
  apis: ["index.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs/exchange", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /cryptocurrency/listings/latest:
 *  get:
 *    description: Use to request Crypto List
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/cryptocurrency/listings/latest', function (req, res) {
  axios({
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    // console.log('runn')
    // if(response){
      res.send(response.data.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

