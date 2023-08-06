const { DataTypes } = require("sequelize");
const db = require("../db");

const Discardd = db.define("discardd", {
  disc_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  disc_item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disc_address: {
    type: DataTypes.STRING,
  },
  disc_date: {
    type: DataTypes.DATE,
  },
  disc_responsible_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disc_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

Discardd.sync();
module.exports = Discardd;
