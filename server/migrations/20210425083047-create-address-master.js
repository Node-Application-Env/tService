import { DataTypes } from "sequelize";

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('addressMasters', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.fn('uuid_generate_v4'),
    },
    driverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'driverMasters',
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    addressType: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    addressLine1: {
      type: Sequelize.STRING,
      allowNull: false
    },
    addressLine2: {
      type: Sequelize.STRING,
      allowNull: false
    },
    addressLine3: {
      type: Sequelize.STRING,
      allowNull: true
    },
    isDefault: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
  await queryInterface.dropTable('addressMasters');
}