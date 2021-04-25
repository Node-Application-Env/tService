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
        isNull: { msg: 'Driver Name can not be blank or null' }
      }
    },
    licenceNo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: { msg: 'Licence Number can not be blank or null' },
        // checkLicence(value) {
        //     /*
        //       License number
        //       ----------------------------------------------
        //       ^ represents the starting of the string.
        //       ( represents the starting of group 1.
        //       ( represents the starting of group 2.
        //       [A-Z]{2} represents the first two characters should be upper case alphabets.
        //       [0-9]{2} represents the next two characters should be digits.
        //       ) represents the ending of the group 2.
        //       ( ) represents the white space character.
        //       | represents the or.
        //       ( represents the starting of group 3.
        //       [A-Z]{2} represents the first two characters should be upper case alphabets.
        //       – represents the hyphen.
        //       [0-9]{2} represents the next two characters should be digits.
        //       ) represents the ending of the group 3.
        //       ) represents the ending of the group 1.
        //       ((19|20)[0-9][0-9]) represents the year from 1900-2099.
        //       [0-9]{7} represents the next seven characters should be any digits from 0-9.
        //       $ represents the ending of the string.
        //       ----------------------------------------------
        //     */
        //     const strFilter = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
        //     if (!strFilter.test(value)) {
        //       throw new Error("Please enter valid license number");
        //     }
        // }
      }
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isNull: { msg: 'Birth date can not be blank or null' },
        isDate: { msg: 'Invalid Birth-date' }
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