/*global describe, it*/

'use strict';

require('mocha');

const { assert } = require('chai');
const Api = require('../helpers/Api');
const databaseHelpers = require('../helpers/database');

const INVALID_USER = { email: 'fake@user.com', password: 'donteventry' };
const VALID_USER = { email: 'admin@example.com', password: 's3cr3t' };

describe('Authentication tests', () => {
    const api = new Api();

    before(async () => {
        await databaseHelpers.resetDatabase();
    });

    describe('POST /authenticate', () => {
        it('Does not allow unregistered users to login', async () => {
            const res = await api.post('/authenticate').send(INVALID_USER);

            assert.equal(res.status, 400);
            assert.deepEqual(res.body, {
                errorCode: 'invalid_credentials',
                errorMessage: 'The user credentials were incorrect',
            });
        });

        it('Allows registered users to login', async () => {
            const res = await api.post('/authenticate').send(VALID_USER);

            assert.equal(res.status, 200);
        });
    });

    describe('Passport middleware', () => {
        it('Does not allow unauthenticated consumers to retrieve data', async () => {
            const res = await api.get('/users');

            assert.equal(res.status, 401);
        });

        it('Allows authenticated consumers to retrieve data', async () => {
            await api.authAdmin();
            const res = await api.get('/users');

            assert.equal(res.status, 200);
        });
    });
});
