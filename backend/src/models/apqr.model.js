import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { msa2 } from "./grids/msa2.model.js";
import gridRef from "./gridRef.model.js";

export const APQR = sequelize.define("ALL_APQR", {
  //General Info Datafields
  pqrId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  initiator: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pqrNo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCode: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  genericName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dosageForm: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reviewStartDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reviewEndDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  mfgLicNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Manufacturing Review datafields
  productDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  processFlow: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalBatchesManufactured: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  totalBatchesApprovedReleased: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  totalProcessValidationBatches: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  totalReprocessedBatches: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  // Timestamps
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

APQR.hasMany(gridRef, {
  foreignKey: "apqrId",
  as: "mainGrids",
});
