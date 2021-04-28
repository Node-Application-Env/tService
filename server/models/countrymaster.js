'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class countryMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // COUNTRY-MASTER
      CountryMaster.hasMany(models.StateMaster, { 
        foreignKey: "id", 
        as: "StateMasters", 
      });
    }
  };
  countryMaster.init({
    shortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countrycode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'countryMaster',
  });
  return countryMaster;
};