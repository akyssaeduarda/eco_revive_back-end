const {DataTypes} = require('sequelize');
const db = require('../db');

const User = db.define("users", {
  // atributos
  user_id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  user_phone: {
    type: DataTypes.STRING, 
    unique: true
  },
  user_addrress_cep: {
    type: DataTypes.STRING, 
  },
  user_addrress_road: {
    type: DataTypes.STRING, 
  },
  user_addrress_number: {
    type: DataTypes.STRING, 
  },
  user_addrress_district: {
    type: DataTypes.STRING, 
  },
  user_addrress_city: {
    type: DataTypes.STRING, 
  },
  user_addrress_state: {
    type: DataTypes.STRING, 
  },
  user_addrress_complement: {
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

User.sync();
module.exports = User;
