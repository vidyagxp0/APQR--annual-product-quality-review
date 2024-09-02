import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const TinyFields = sequelize.define('TinyFields', {
    apqrId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'APQRs',
        key: 'id'
      }
    },
    tiny1: DataTypes.STRING,
    tiny2: DataTypes.STRING,
    // ... up to tiny80
    tiny80: DataTypes.STRING
  });
  