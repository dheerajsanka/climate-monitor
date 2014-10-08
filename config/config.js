var path = require('path'),
  rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    db: 'mongodb://localhost/climate_monitor_development',
    root: rootPath,
    app: {
      name: 'Climate-monitor - Development'
    }
  },
  test: {
    db: 'mongodb://localhost/drunken_spice_test',
    root: rootPath,
    app: {
      name: 'Climate-monitor -  Test'
    }
  },
  production: {
    db: 'mongodb://localhost/climate_monitor_production',
    root: rootPath,
    app: {
      name: 'Climate-monitor'
    }
  }
}