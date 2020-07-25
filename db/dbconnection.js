const { Sequelize } = require('sequelize');

module.exports.signaldb= new Sequelize('signaldb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


  


  

  