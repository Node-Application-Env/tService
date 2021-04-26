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
          // PATT-01 EXAMPLE : GJ01PD4829     -- /^[A-Z a-z]{2}(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          // PATT-02 EXAMPLE : GJ-01PD4829    -- /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          // PATT-03 EXAMPLE : GJ-01-PD4829   -- /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[-]+[A-Z a-z]{2}[0-9]{1,4}$/
          // PATT-04 EXAMPLE : GJ-01-PD-4829  -- /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[-]+[A-Z a-z]{2}[-]+[0-9]{1,4}$/

          // PATT-05 EXAMPLE : GJ 01PD4829  -- /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          // PATT-06 EXAMPLE : GJ 01 PD4829  -- /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[ ]+[A-Z a-z]{2}[0-9]{1,4}$/
          // PATT-07 EXAMPLE : GJ 01 PD 4829  -- /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[ ]+[A-Z a-z]{2}[ ]+[0-9]{1,4}$/

          const pattern01 = /^[A-Z a-z]{2}(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          const pattern02 = /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          const pattern03 = /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[-]+[A-Z a-z]{2}[0-9]{1,4}$/
          const pattern04 = /^[A-Z a-z]{2}[-]+(0?[1-9]|[1-9][0-9])[-]+[A-Z a-z]{2}[-]+[0-9]{1,4}$/
          const pattern05 = /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[A-Z a-z]{2}[0-9]{1,4}$/
          const pattern06 = /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[ ]+[A-Z a-z]{2}[0-9]{1,4}$/
          const pattern07 = /^[A-Z a-z]{2}[ ]+(0?[1-9]|[1-9][0-9])[ ]+[A-Z a-z]{2}[ ]+[0-9]{1,4}$/

          if(!pattern01.test(value) && !pattern02.test(value) && !pattern03.test(value) && !pattern04.test(value)
            && !pattern05.test(value) && !pattern06.test(value) && !pattern07.test(value)) {
            throw new Error(`Invalid Vehical Number [${value}] Valid Format : 
              [GJ01PD4829] [GJ-01PD4829] [GJ-01-PD4829] [GJ-01-PD-4829] 
              [GJ01PD4829] [GJ<space>01PD4829] [GJ<space>01<space>PD4829] [GJ<space>01<space>PD<space>4829] !`)
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