import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class phoneMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  phoneMaster.init({
    driverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "driverMasters",
        key: "id"
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Phone number can not be blank or null' },
        validateIndianPhoneNumber(value) {
          /* 
           --------------------------------------------------------------------------------
            PATT-01 : /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
            --------------------------------------------------------------------------------
            * VALID NUMBERS
            --------------------
            * Mobile Number:
            -------------------- 
            +91-9924184381, 9924184381, 09924184381, 919924184381, 0919924184381, +919924184381
            +91-9924184381, 0091-9924184381, +91 -9924184381, +91- 9924184381, +91 - 9924184381
            0091 - 9924184381, +91 9924184381
            --------------------
            * Landline Number:
            --------------------
            022-24131840, 080 25478965, 0416-2565478, 08172-268032, 04512-895612, 02162-245127

          */
            const pattern01 = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
            if (!pattern01.test(value)) {
              throw new Error(`Invalid Mobile Number [${value}]!`);
            }
        }
      }
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
    modelName: 'phoneMaster',
  });
  return phoneMaster;
};