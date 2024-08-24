import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Define the gridRef model without the associations first
const gridRef = sequelize.define("MainGrid", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  apqrId: {
    type: DataTypes.INTEGER,
    references: {
      model: null,      
      key: "pqrId",
    },
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

// Dynamically import the APQR model and define the association
import("./apqr.model.js").then(({ APQR }) => {
  gridRef.belongsTo(APQR, {
    foreignKey: "apqrId",
    as: "apqr",
  });
});

// Dynamically import the msa2 model and define the association
import("./grids/msa2.model.js").then(({ msa2 }) => {
  gridRef.hasMany(msa2, {
    foreignKey: "mainGridId",
    as: "gridAs",
  });
});

export default gridRef;
