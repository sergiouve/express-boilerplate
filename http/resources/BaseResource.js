class BaseResource {
    constructor(resource) {
        for (const [key, value] of Object.entries(resource)) {
            this[key] = value
        }
    }

    toJson() {
        return this
    }

    static collection(resources) {
        let resourcesCollection = []

        for (const resource of resources) {
            resourcesCollection.push(new this(resource).toJson())
        }

        return resourcesCollection
    }
}

module.exports = BaseResource
