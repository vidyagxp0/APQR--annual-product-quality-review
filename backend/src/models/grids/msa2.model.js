// import { DataTypes } from "sequelize";
// import { sequelize } from "../../config/db.js";
// import gridRef from "../gridRef.model.js";

// export const msa2 = sequelize.define("msa2", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   productName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   batchCode: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   sfgCode: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   remarks: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   mainGridId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: gridRef,
//       key: "id",
//     },
//     allowNull: false,
//   },
//   createdAt: DataTypes.DATE,
//   updatedAt: DataTypes.DATE,
// });

// msa2.belongsTo(gridRef, {
//   foreignKey: "mainGridId",
//   as: "mainGrid",
// });
