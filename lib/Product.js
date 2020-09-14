import Joi from 'joi';

export class Product {
  constructor(data) {
    Object.assign(this, Joi.attempt(data, this.getSchema()));
  }

  getSchema() {
    throw new Error('Implement me');
  }
}
