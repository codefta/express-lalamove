require('dotenv').config()

const configuration = () => {
    const configs = {
        port: 3001,
        lalamove: {
            baseURL: process.env.BASE_URL,
            apiKey: process.env.API_KEY,
            apiSecret: process.env.API_SECRET
        }
    }

    configs.isDev  = process.env.NODE_ENV === 'development' ? true : false

    return configs
}

module.exports = configuration()