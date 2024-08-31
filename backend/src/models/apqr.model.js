import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
// import gridRef from "./gridRef.model.js"; // Ensure gridRef is imported before use

export const APQR = sequelize.define("ALL_APQR", {
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
    type: DataTypes.STRING,
    allowNull: true,
    // defaultValue: 0,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  productCodes: {
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
  },
  totalBatchesApprovedReleased: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalProcessValidationBatches: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalReprocessedBatches: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
// gridRef.belongsTo(APQR, {
//   foreignKey: 'apqrId',
//   targetKey: 'id',
// });



// Define associations
// APQR.hasMany(gridRef, {
//   foreignKey: "apqrId",
//   as: "mainGrids",
// });

// export default APQR;
