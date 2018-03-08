'use strict';

const Hapi = require('hapi');

const server = Hapi.server({ port: 3000, host: 'localhost' });


const init = async () => {

    await server.register([
        require('inert'),
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: false,
                logEvents: ['response', 'error']
            }
        },
        {
            plugin: require('./plugins/users/index')
        }
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();