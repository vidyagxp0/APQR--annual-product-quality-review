import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { User } from "./user.model.js";
import { APQR } from "./apqr.model.js";

export const FormAuditTrail = sequelize.define("FormAuditTrail", {
  auditTrail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pqrId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: APQR,
      key: "pqrId",
    },
  },
  changed_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
  previous_value: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  new_value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  field_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previous_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  new_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

FormAuditTrail.belongsTo(User, { foreignKey: "changed_by" });
User.hasMany(FormAuditTrail, { foreignKey: "changed_by" });

FormAuditTrail.belongsTo(APQR, {
  foreignKey: "pqrId",
});
APQR.hasMany(FormAuditTrail, {
  foreignKey: "pqrId",
});
