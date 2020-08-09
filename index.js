const express = require('express');
var hpp = require('hpp');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(hpp());

const utils = require('./utils');
const fizzBuzz = require('./utils/fizzBuzzGenerator');

const port = 3000;


app.get('/fizzbuzz', utils.validateQuery([{
    name: 'count',
    regexValidation: /^(100|[1-9][0-9]?)$/
}]), (req, res) => {
    res.status(200).send({
        success: "true",
        result: {
            data: fizzBuzz.generateFizzBuzz(req.query.count)
        },
        errorMessage: null
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})