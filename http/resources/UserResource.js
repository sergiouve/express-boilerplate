const BaseResource = require('./BaseResource')

class UserResource extends BaseResource {
    toJson() {
        return {
            id: this.id,
            email: this.email,
        }
    }
}

module.exports = UserResource
