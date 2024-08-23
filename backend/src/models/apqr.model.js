import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const APQR = sequelize.define("ALL_APQR", {
  pqrId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genericName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  initiator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewStartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
