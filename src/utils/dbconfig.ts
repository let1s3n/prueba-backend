const sqlConfig: any = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    idleTimeoutMillis: 60000,
  },
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
  parseJSON: true,
};

export default sqlConfig;
