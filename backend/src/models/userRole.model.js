import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import {Role} from "./role.model.js";
import {User} from "./user.model.js";

export const UserRole = sequelize.define("UserRole", {
  userRole_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: "role_id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserRole.addHook("afterSync", async () => {
  try {
    const user_Role_Counts = await UserRole.count();
    if (user_Role_Counts === 0) {
      await UserRole.bulkCreate([{ role_id: 1, user_id: 1, role: "Admin" }]);
      console.log("Admin Role assigned to user");
    }
  } catch (error) {
    console.error("Error in assigning admin role to the user:", error);
  }
});

UserRole.belongsTo(User, { foreignKey: "user_id" });
UserRole.belongsTo(Role, { foreignKey: "role_id" });

User.hasMany(UserRole, { foreignKey: "user_id" });
Role.hasMany(UserRole, { foreignKey: "role_id" });

