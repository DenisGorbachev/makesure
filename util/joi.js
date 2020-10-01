import JoiOriginal from 'joi'

const Joi = JoiOriginal.defaults((schema) => {
  return schema.options({ presence: 'required' })
}).extend((schema) => {
  return {
    type: 'mongoid',
    base: schema.string().length(24)
  }
})

Joi.DBObject = function (fields) {
  return Joi.object(Object.assign({
    _id: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
  }, fields))
}

export default Joi
