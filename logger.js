var winston = require('winston')

// Set up logger
var customColors = {
  trace: 'white',
  debug: 'green',
  info: 'green',
  warn: 'yellow',
  crit: 'red',
  fatal: 'red'
}

var logger = new(winston.Logger) ({
  colors: customColors,

  levels: {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    crit: 4,
    fatal: 5
  },

  transports: [
    new(winston.transports.Console) ({
      level: 'info',
      colorize: true,
      timestamp: true
    }),

    new(winston.transports.File) ({
      filename: 'logs/info.log'
    })
  ]
})

winston.addColors(customColors)

module.exports = logger
