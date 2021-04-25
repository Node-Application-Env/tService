'use strict';
import { DataTypes } from "sequelize";
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('vechicalMasters', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.fn('uuid_generate_v4'),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fixKM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fixCharge: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seatCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fuelType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('vechicalMasters');
}