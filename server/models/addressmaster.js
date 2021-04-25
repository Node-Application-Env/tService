import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class addressMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  addressMaster.init({
    driverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "driverMasters",
        key: "id"
      }
    },
    addressType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNull: { msg: 'Invalid Address Type - (1:Home),(2:Office),(3:Pickup)' }
      }
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: { msg: 'Address Line 1 Required' }
      }
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: { msg: 'Address Line 2 Required' }
      }
    },
    addressLine3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true    
    }
  }, {
    sequelize,
    modelName: 'addressMaster',
  });
  return addressMaster;
};