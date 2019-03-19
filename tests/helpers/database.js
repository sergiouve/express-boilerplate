const database = require('../../lib/database');
const { exec } = require('child_process');

const helpers = {
    resetDatabase: async () => {
        // Do not run if environment is not either test or development
        if (! ['test', 'development'].includes(process.env.NODE_ENV)) {
            return;
        }

        // Running migrations
        await new Promise((resolve, reject) => {
            const migrate = exec(
                'sequelize db:migrate:undo:all && sequelize db:migrate && sequelize db:seed:all',
                {env: process.env},
                err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                }
            );

            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
        });

        await database.sync();
    }
};

module.exports = helpers;
