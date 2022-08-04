const express = require('express');
const config = require('./config');
const { lalamove } = require('./service');
const lalamoveClient = require("@lalamove/lalamove-js")

const app = require('express')();

app.use(express.json());

app.get('/quote', async (req, res) => {
    const {pickup, dropoff } = req.body
    
    const payload = lalamoveClient.QuotationPayloadBuilder.quotationPayload().withLanguage('en_US').withServiceType('CAR').
})

app.listen(config.port, () => {
    console.log('Server running on port 3001');
})