import Joi from 'joi';

export class Product {
  constructor(data) {
    Object.assign(this, Joi.attempt(data, this.getSchema()));
  }

  getSchema() {
    return Joi.object({
      name: Joi.string(),
      notes: Joi.array().items(Joi.string()).default([]),
    }).options({ presence: 'required' });
  }

  toString() {
    return this.name;
  }
}
