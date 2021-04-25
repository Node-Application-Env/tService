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
        isNull: { msg: "Please enter valid phone number" },
        // validateIndianPhoneNumber(value) {
        //   throw new Error("Invalid Phone Number"); 
        // }
      }
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