# API Example using Hapi 17.x.x

## Plugins
  - instead of using `server.route` I prefer breaking the app into modules/plugins. this way each plugin can be tested and work as it's own small unit.

## Logging
  - using hapi-pino
