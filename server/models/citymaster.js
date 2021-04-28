'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class cityMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // STATE-MASTER
      CityMaster.belongsTo(models.StateMaster, {
        foreignKey: 'stateId',
        as: 'stateMaster',
      });
    }
  };

  cityMaster.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'cityMaster',
  });
  return cityMaster;
};