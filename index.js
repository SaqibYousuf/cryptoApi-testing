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
      version: "1.2.0",
      title: "CoinMarketCap API",
      description: "CoinMarketCap Basic Plan API Demo ",
      contact: {
        name: "CoinMarketCap Developer"
      },
      servers: ["http://localhost:4000/"]
    }
  },
  // ['.routes/*.js']
  apis: ["index.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.static('public'));
app.use("/api-docs/", function (req,res) {
  // res.sendFile('./index.html')
  res.sendFile(__dirname + "/public/" + "index.html");
})


// cryptocurrency API'S

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

// Routes
/**
 * @swagger
 * /cryptocurrency/map:
 *  get:
 *    description: Use to request all Crypto Map
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/cryptocurrency/map', function (req, res) {
  axios({
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')
    let arr = [];
    if (response) {
      arr = response.data.data.slice(0, 3)
    }
    // if(response){
    res.send(arr)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// Routes
/**
 * @swagger
 * /cryptocurrency/info:
 *  get:
 *    description: Use to request all Crypto Info
 *    parameters:
 *          - in: query
 *            name: ids
 *            type: integer
 *            required: true
 *            description: description of parameter
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/cryptocurrency/info', function (req, res) {
  let id = "";
  if (req.query) {
    id = req.query.ids
  }
  axios({
    method: 'GET',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// Routes
/**
 * @swagger
 * /cryptocurrency/quotes/latest:
 *  get:
 *    description: Use to request all Crypto Info
 *    parameters:
 *          - in: query
 *            name: ids
 *            type: integer
 *            required: true
 *            description: description of parameter
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/cryptocurrency/quotes/latest', function (req, res) {
  let id = "";
  if (req.query) {
    id = req.query.ids
  }
  axios({
    method: 'GET',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})


// Routes
/**
 * @swagger
 * /cryptocurrency/ohlcv/latest:
 *  get:
 *    description: Use to request all Crypto Info
 *    parameters:
 *          - in: query
 *            name: ids
 *            type: integer
 *            required: true
 *            description: description of parameter
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/cryptocurrency/ohlcv/latest', function (req, res) {
  let id = "";
  if (req.query) {
    id = req.query.ids
  }
  axios({
    method: 'GET',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/latest?id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})


// global-metrics

// Routes
/**
 * @swagger
 * /global-metrics/quotes/latest:
 *  get:
 *    description: Use to request all Crypto Info
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/global-metrics/quotes/latest', function (req, res) {
  axios({
    method: 'GET',
    url: 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// Tools

// Routes
/**
 * @swagger
 * /tools/price-conversion:
 *  get:
 *    description: Use to request price of 1 bitcoin into USD
 *    parameters:
 *          - in: query
 *            name: amounts
 *            type: integer
 *            required: true
 *            description: description of parameter
 *          - in: query
 *            name: ids
 *            type: integer
 *            required: true
 *            description: description of parameter
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/tools/price-conversion', function (req, res) {
  let amount = "";
  let id = "";
  if (req.query) {
    amount = req.query.amounts
    id = req.query.ids
  }
  axios({
    method: 'get',
    url: `https://pro-api.coinmarketcap.com/v1/tools/price-conversion?amount=${amount}&id=${id}`,
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// fiat 

// Routes
/**
 * @swagger
 * /fiat/map:
 *  get:
 *    description: Use to Fiat Map
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/fiat/map', function (req, res) {
  axios({
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/fiat/map',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// partners 

// Routes
/**
 * @swagger
 * /partners/flipside-crypto/fcas/listings/latest:
 *  get:
 *    description: Use to partners flipside-crypto
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/partners/flipside-crypto/fcas/listings/latest', function (req, res) {
  axios({
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/partners/flipside-crypto/fcas/listings/latest',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})


// Routes
/**
 * @swagger
 * /partners/flipside-crypto/fcas/quotes/latest:
 *  get:
 *    description: Use to partners flipside-crypto
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/partners/flipside-crypto/fcas/quotes/latest', function (req, res) {
  axios({
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/partners/flipside-crypto/fcas/quotes/latest?id=1',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})

// key

// Routes
/**
 * @swagger
 * /key/info:
 *  get:
 *    description: Use to partners key info
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/key/info', function (req, res) {
  axios({
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/key/info',
    headers: {
      'X-CMC_PRO_API_KEY': '05ebb559-df58-497d-8eaa-3e1261ebd058'
    },
  }).then(function (response) {
    console.log('runn')

    // if(response){
    res.send(response.data)
    // }
  }).catch((error) => {
    console.log(error)
  });
  // res.send(arr)
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  //   console.log(requestOptions)
})
