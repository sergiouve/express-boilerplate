/*global describe, it*/

'use strict'

process.env.NODE_ENV = 'test'

require('mocha')
// require('should')

const chai = require('chai')
require('should')
const chaiHttp = require('chai-http')
const api = require('../../index.js')

chai.use(chaiHttp)

// TODO: mock DB
describe('Authentication tests', () => {
    describe('POST /authenticate', () => {
        it('Does not allow unregistered users to login', done => {
            chai.request(api)
                .post('/authenticate')
                .send({
                    email: 'fake@user.com',
                    password: 'donteventry'
                })
                .end((err, res) => {
                    res.statusCode.should.be.eql(400)
                    done()
                })
        })

        it('Allows registered users to login', done => {
            chai.request(api)
                .post('/authenticate')
                .send({
                    email: 'admin@example.com',
                    password: 's3c43t'
                })
                .end((err, res) => {
                    res.statusCode.should.be.eql(200)
                    done()
                })
        })

    })

    describe('Passport middleware', () => {
        it('Does not allow unauthenticated consumers to retrieve data', done => {
            chai.request(api)
                .get('/users')
                .end((err, res) => {
                    res.statusCode.should.be.eql(401)
                    done()
                })
        })

        it('Allows authenticated consumers to retrieve data', done => {
            chai.request(api)
                .post('/authenticate')
                .send({
                    email: 'admin@example.com',
                    password: 's3c43t'
                })
                .end((err, res) => {
                    const authToken = res.body.token
                    chai.request(api)
                        .get('/users')
                        .set('Authorization', `bearer ${authToken}`)
                        .end((err, res) => {
                            res.statusCode.should.be.eql(200)
                            done()
                        })
                })
        })
    })

})
