const SDKClient = require('@lalamove/lalamove-js')
const config = require('./config')

const lalamove = new SDKClient.ClientModule(
    new SDKClient.Config(
        config.lalamove.apiKey,
        config.lalamove.apiSecret,
        config.isDev ? 'sandbox' : 'production'
    )
)

module.exports = {
    lalamove
}