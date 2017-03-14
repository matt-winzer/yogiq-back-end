module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/database-name'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
  
};
