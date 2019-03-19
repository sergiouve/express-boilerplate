const chai = require('chai').use(require('chai-http'));

const app = require('../../index');

class Api {
    constructor() {
        this.bearerToken = null;
    }

    _request(method, uri, params = null) {
        let req = chai.request(app)[method](uri);

        if (params) {
            req = req.query(params);
        }

        if (this.bearerToken) {
            req = req.set('Authorization', `Bearer ${this.bearerToken}`);
        }

        return req;
    }

    get(uri, params = null) {
        return this._request('get', uri, params);
    }

    put(uri) {
        return this._request('put', uri);
    }

    post(uri) {
        return this._request('post', uri);
    }

    patch(uri) {
        return this._request('patch', uri);
    }

    delete(uri) {
        return this._request('delete', uri);
    }

    async _auth(email, password = 's3cr3t') {
        const res = await this.post('/authenticate').send({email, password});

        if (res.statusCode !== 200) {
            const error = new Error(`Invalid credentials (email '${email}')`);
            error.response = res;
            throw error;
        }

        this.bearerToken = res.body.token;
    }

    async authUser(user = 'user@example.com') {
        return await this._auth(user);
    }

    async authAdmin(admin = 'admin@example.com') {
        return await this._auth(admin);
    }
}

module.exports = Api;
