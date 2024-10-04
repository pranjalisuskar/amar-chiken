const dbConfig = require('./config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.DBPORT,
    logging: false,
});


//Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully");
    })
    .catch((err) => {
        console.log('Unable to connect to the database');
        
    });

//Auto sync models without forcing
sequelize
    .sync({})
    .then(() => {
        console.log("Yes re-sync done!!");
    })
    .catch((err) => {
        console.log("Unable to sync the database.");
    })

module.exports = sequelize;