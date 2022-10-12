const mongoose = require('mongoose');
const ConnectDB = (url) => {
    return mongoose
      .connect(url)
      .then(() => console.log("Connected to db..."))
      .catch((err) => console.log(err));
}
module.exports = ConnectDB;


