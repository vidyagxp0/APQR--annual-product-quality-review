import { DataTypes, STRING } from "sequelize";
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
  tinyData: {
    type: DataTypes.JSON,
    allowNull: true,
  }
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny2: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny3: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny4: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny5: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny6: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny7: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny8: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny9: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny10: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny11: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny12: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny13: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny14: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny15: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny16: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny17: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny18: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny19: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny20: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny21: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny22: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny23: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny24: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny25: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny26: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny27: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny28: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny29: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny30: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny31: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny32: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny33: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny34: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny1: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny35: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny36: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny37: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny38: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny39: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny40: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny41: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny42: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny43: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny44: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny45: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny46: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny47: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny48: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny49: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny50: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny51: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny52: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny53: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny54: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny55: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny56: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny57: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny58: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny59: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny60: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny61: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny62: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny63: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny64: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny65: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny66: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny67: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny68: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny69: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny70: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny71: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny72: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny73: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny74: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny75: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny76: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny77: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny78: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny79: {
  //   type: STRING,
  //   allowNull: true,
  // },
  // tiny80: {
  //   type: STRING,
  //   allowNull: true,
  // },
  ,
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
