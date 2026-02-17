export default {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "cesare",
  DB: "tutoriales",
  DIALECT: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
