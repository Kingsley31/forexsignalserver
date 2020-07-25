const {signaldb}=require('../db/dbconnection.js');

async function testSequelizeDbConnection(signaldb){
    try {
        await signaldb.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  testSequelizeDbConnection(signaldb);