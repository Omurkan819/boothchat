const moment = require('moment')

function formatMessage(username, text) {
  return {
    username,
    text,
    // time: moment().format('h:m A')
    time: moment().format(' hh:mm A')
  }
}

module.exports = formatMessage
