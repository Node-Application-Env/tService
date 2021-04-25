
import { DataTypes } from "sequelize";
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('driverMasters', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.fn('uuid_generate_v4')
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    licenceNo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('driverMasters');
}