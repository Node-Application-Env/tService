import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class vehicalMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vehicalMaster.init({
    vehicalNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Vehical Number can not be blank or null' },
        validateVehicalNumber(value) {
          const regVehicalNumber = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
          if(!regVehicalNumber.test(value)) {
            throw new Error(`Invalid Vehical Number [${value}] !`)
         }
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Vehical Name can not be blank or null' }
      }
    },
    fixKM: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Fixed Kilometer can not be null or blank' },
        isNumeric: { msg: 'Fixed Kilometer accept only numberic value' }
      }
    },
    fixCharge: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Fixed Per day charge can not be null or blank' },
        isNumeric: { msg: 'Fixed Charge accept only numberic value' }
      }
    },
    DA: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Daily allowances can not be null or blank' },
        isNumeric: { msg: 'DA(Daily Allowances) accept only numberic value' }
      }
    },
    seatCapacity: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Seat capacity can not be null or blank' },
        isNumeric: { msg: 'Seat Capacity accept only numberic value' }
      }
    },
    fuelType: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Fuel type can not be null or blank' },
        isIn: { args: [[1,2,3,4]], msg: 'Valid Values (1:Petrol), (2:Disel), (3:CNG), (4:Petrol+CNG)' },
        isNumeric: { msg: 'Fuel Type accept only numberic value: Valid Values (1:Petrol), (2:Disel), (3:CNG), (4:Petrol+CNG)' }
      }
    },
    isActive: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'vehicalMaster',
  });
  return vehicalMaster;
};