'use strict';

module.exports = (req, res, next) => {
  if (req.query.name === 'Mike') {
    next();
  } else {
    next('Search must be Mike');
  }
};
