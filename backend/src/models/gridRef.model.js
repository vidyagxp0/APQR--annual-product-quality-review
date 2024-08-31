import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { APQR } from "./apqr.model.js";

// Define gridRef
const gridRef = sequelize.define("MainGrid", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pqrId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: APQR,
      key: 'pqrId'
    }
  },
  primaryKey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

// gridRef.belongsTo(APQR, {
//   foreignKey: 'apqrId',
//   as: 'apqr' // Alias if needed
// });

APQR.hasMany(gridRef, { foreignKey: 'pqrId' });
gridRef.belongsTo(APQR, {foreignKey: 'pqrId'});

// Define associations after initialization
// gridRef.associate = () => {
//   gridRef.belongsTo(sequelize.models.APQR, {
//     foreignKey: "apqrId",
//     as: "apqr",
//   });
//   gridRef.hasMany(sequelize.models.msa2, {
//     foreignKey: "mainGridId",
//     as: "gridAs",
//   });
// };

export default gridRef;
