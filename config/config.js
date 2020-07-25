require('dotenv').config();

const details={
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_NAME,
  host:process.env.DB_HOST,
  dialect:process.env.DB_DIALECT
};

module.exports={
  development:details,
  production:details
}