'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class stateMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StateMaster.belongsTo(models.CountryMaster, {
        foreignKey: "countryId",
        as: "CountryMasters",
      });
    }
  };
  stateMaster.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'stateMaster',
  });
  return stateMaster;
};