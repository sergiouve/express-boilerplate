class BaseResource {
    constructor(resource) {
        for (const [key, value] of Object.entries(resource)) {
            this[key] = value
        }
    }

    toJson() {
        return {}
    }

    static collection(resources) {
        let resourcesList = []

        for (const resource of resources) {
            resourcesList.push(new this(resource).toJson())
        }

        return resourcesList
    }
}

module.exports = BaseResource
