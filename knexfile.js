module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/yogiq'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
