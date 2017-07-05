const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
    host: process.env.DBHOST,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

sequelize
    .authenticate()
    .then(() => {
      console.log('Connection to database "' + process.env.DBNAME + '" has been established successfully.')
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    })

module.exports = sequelize
