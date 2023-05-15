const { DateTime } = require('luxon');

// Use luxon to format the post timestamps
const formatDate = (date) => {
    return DateTime.fromJSDate(date).toFormat('ff');
};

module.exports = {
  formatDate,
};
