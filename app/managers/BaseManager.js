const Sequelize = require('sequelize')
const database = require('../../lib/database')

class BaseManager {
    constructor() {
        this.database = database
    }

    _buildWhere(clientsQuery, extraQuery) {
        clientsQuery = Object.assign(clientsQuery || {}, extraQuery || {})

        // Return 1=1 if there are no conditions
        return this.database.dialect.QueryGenerator.getWhereConditions(clientsQuery.where)
            || '1=1'
    }

    async _query(queryStr, opts) {
        return await this.database.query(queryStr, opts)
    }

    async _select(queryStr) {
        return await this._query(queryStr, {type: Sequelize.QueryTypes.SELECT})
    }

    async _selectOne(queryStr) {
        const results = await this._select(queryStr)
        return results.length && results[0]
    }
}

module.exports = BaseManager
