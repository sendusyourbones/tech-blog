const { DateTime } = require('luxon');

const formatDate = (date) => {
    return DateTime.fromJSDate(date).toFormat('ff');
}

module.exports = {
  formatDate,
};
