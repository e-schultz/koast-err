var koast = require('koast');
koast.config.setEnvironment()
  .then(koast.serve)
  .fail(function (err) {
    console.log('problems?', err);
  }) // Default to NODE_ENV or 'local'
