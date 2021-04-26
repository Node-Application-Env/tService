import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class driverMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  driverMaster.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Driver Name can not be blank or null' }
      }
    },
    licenceNo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Licence Number can not be blank or null' },
        checkLicence(value) {
            /*
              License number
              ----------------------------------------------
              
              ----------------------------------------------
              PATT--001: GJ012049012345678               -- /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])(19[0-9][0-9]|20[01234][0-9])([0-9]{9})$/
              PATT--002: GJ01<space>2049012345678        -- /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])[ ](19[0-9][0-9]|20[01234][0-9])([0-9]{9})$/
              PATT--003: GJ01<space>2049<space>012345678 -- /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])[ ](19[0-9][0-9]|20[01234][0-9])[ ]([0-9]{9})$/
              ----------------------------------------------
            */
            const pattern01 = /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])(19[0-9][0-9]|20[01234][0-9])([0-9]{7,9})$/;         // GJ012049012345678
            const pattern02 = /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])[ ](19[0-9][0-9]|20[01234][0-9])([0-9]{7,9})$/;      // GJ01<space>2049012345678 
            const pattern03 = /^[a-zA-Z]{2}(0?[1-9]|[1-9][0-9])[ ](19[0-9][0-9]|20[01234][0-9])[ ]([0-9]{7,9})$/;   // GJ01<space>2049<space>012345678

            if (!pattern01.test(value) && !pattern02.test(value) && !pattern03.test(value)) {
              throw new Error(`Invalid Driving Licence Number [${value}] Valid Format : [GJ012049012345678] [GJ01<space>2049012345678] [GJ01<space>2049<space>012345678] !`);
            }
        }
      }
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: 'Birthdate can not be blank or null' },
        isDate: { msg: 'Invalid Birthdate' },
        validateAge(value) {
          if(value !== null && value !== undefined) {
            const birthYear = parseInt(new Date(value).getFullYear().toString());
            const currentYear = parseInt(new Date().getFullYear().toString());
            if((currentYear - birthYear) < 18) {
              throw new Error(`Eligibility 18 years ONLY.`)
            }
          } else {
            throw new Error(`Birthdate can not be blank or null`)
          }
          
        }
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'driverMaster',
  });
  return driverMaster;
};