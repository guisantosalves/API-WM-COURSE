"use strict";
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['../routes/index.ts']; // root file where the route starts.
swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('../index'); // Your project's root file
});
