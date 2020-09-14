import Joi from 'joi';

export class Spec {
  constructor(product) {
    this.product = Joi.attempt(product, this.getSchema());
  }

  getSchema() {
    throw new Error('Implement me');
  }
}
