//const moment = require('moment');
var today = new Date();
function formatMessage(username, text) {
  return {
    username,
    text,
    time: today.getHours() + ":" + today.getMinutes()
  };
}

module.exports = formatMessage;
