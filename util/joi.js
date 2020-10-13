import JoiOriginal from 'joi'

const Joi = JoiOriginal.defaults((schema) => {
  return schema.options({ presence: 'required', allowUnknown: true, abortEarly: false })
}).extend((schema) => {
  return {
    type: 'mongoid',
    base: schema.string(),
  }
})

Joi.DBObject = function (fields) {
  return Joi.object(Object.assign({
    _id: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    checks: Joi.array().items(Joi.string()),
    createdBy: Joi.mongoid(),
    updatedBy: Joi.mongoid(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  }, fields)).unknown(true)
}

export default Joi
