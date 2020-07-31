const moment = require('moment');

//today.toLocaleTimeString()
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().utcOffset("+05:30").format('h:mm a')
  };
}

module.exports = formatMessage;
