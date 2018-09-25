class ResourceNotFoundException extends Error {
    constructor() {
        super()
        this.message = 'Resource not found'
        this.code = 404
    }
}

module.exports = ResourceNotFoundException
