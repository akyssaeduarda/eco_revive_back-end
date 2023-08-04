const bcrypt = require("bcrypt");

async function encrypt(password) {
  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(password, salt);
  return hasPassword;
}

module.exports = encrypt;
