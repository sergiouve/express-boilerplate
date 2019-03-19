const User = require('../../app/models/User');

/**
 * Helper to resolve a parameter ID as the given model.
 *
 * @param Model
 * @param resolvedField
 * @returns {Function}
 */
function resolveModel(Model, resolvedField, fieldName = 'id') {
  return async function(req, res, next, fieldValue) {
    let model = null;

    try {
      model = await Model.findOne({where: {[fieldName]: fieldValue}});
    } catch (e) {
      return next(e);
    }

    if (!model) {
      return res.status(404).json({
        errorCode: 'model_not_found',
        errorMessage: `Model '${Model.name}' with ${fieldName} '${fieldValue}' not found`,
      });
    }

    req[resolvedField] = model;
    next();
  };
}

module.exports.configure = (router) => {
  function configureParam(paramName, model, fieldName) {
    router.param(paramName, resolveModel(model, paramName, fieldName));
  }

  // Define custom parameters of a route and how to resolve them.
  configureParam('user', User, 'userId');
};
