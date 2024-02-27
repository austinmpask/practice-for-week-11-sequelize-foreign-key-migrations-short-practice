"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MusicianInstruments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MusicianInstruments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      musicianId: DataTypes.INTEGER,
      instrumentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MusicianInstruments",
    }
  );
  return MusicianInstruments;
};
