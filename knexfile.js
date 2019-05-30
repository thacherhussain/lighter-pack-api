module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lighter_pack'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
