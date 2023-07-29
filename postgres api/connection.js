const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "sipu@1234",
    database: "postgres"
})

module.exports = client