const {DataTypes} = require("sequelize");
const db = require("../db");

const Company = db.define("company", {
  comp_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comp_name: {
    type: DataTypes.STRING,
  },
  comp_cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  comp_cnae: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comp_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comp_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comp_phone: {
    type: DataTypes.STRING,
  },
  comp_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comp_addrress_cep: {
    type: DataTypes.STRING,
  },
  comp_addrress_road: {
    type: DataTypes.STRING,
  },
  comp_addrress_number: {
    type: DataTypes.STRING,
  },
  comp_addrress_district: {
    type: DataTypes.STRING,
  },
  comp_addrress_city: {
    type: DataTypes.STRING,
  },
  comp_addrress_state: {
    type: DataTypes.STRING,
  },
  comp_addrress_complement: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

Company.sync();
module.exports = Company;

