const {config} = require('dotenv');

config()

const PORT = process.env.PORT || 3000
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'vec12#mert05'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_DATABASE = process.env.DB_DATABASE || 'database_testroless'

module.exports = {PORT,DB_USER,DB_PASSWORD,DB_HOST,DB_DATABASE}
