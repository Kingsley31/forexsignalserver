'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Signal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Signal.init({
    signalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    trade_id:{
      type: DataTypes.STRING,
      allowNull: false
    },
    prediction:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Signal',
  });
  return Signal;
};