import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";

import dbConfig from "../config/db.config";

import Tutorial from "./tutorial.model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOAT,
  dialect: dbConfig,
  dialect,
  pool: dbConfig.pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = Tutorial(sequelize, Sequelize);

export default db;
