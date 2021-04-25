import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class vechicalMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vechicalMaster.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: { msg: 'Vehical Name can not be blank or null' }
      }
    },
    fixKM: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'Fixed Kilometer accept only numberic value' }
      }
    },
    fixCharge: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'Fixed Charge accept only numberic value' }
      }
    },
    DA: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'DA(Daily Allowances) accept only numberic value' }
      }
    },
    seatCapacity: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'Seat Capacity accept only numberic value' }
      }
    },
    fuelType: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: { msg: 'Fuel Type accept only numberic value: Valid Values (1:Petrol), (2:Disel), (3:CNG), (4:Petrol+CNG)' }
      }
    },
    isActive: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'vechicalMaster',
  });
  return vechicalMaster;
};