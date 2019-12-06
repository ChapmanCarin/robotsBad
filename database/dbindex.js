const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
})

const goGetRobots = () => {
// TODO - your code here!
};

const insertRobot = (robot) => new Promise((resolve, reject) => {
  // TODO - your code here!
});


module.exports = {
  goGetRobots,
  insertRobot
};