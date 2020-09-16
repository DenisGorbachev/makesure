import Joi from 'joi';
import { Product } from './Product.js';
import { Audience } from './Audience.js';

export class OnelinerProductDescription extends Product {
  getSchema() {
    return Joi.object({
      name: Joi.string().required(),
      audiences: Joi.array().items(Joi.object().instance(Audience)).required(),
      benefits: Joi.array().items(Joi.string()).required(),
    });
  }

  create() {
    return `${this.name} is a product for ${this.audiences.join(' and ')} that ${this.benefits.join(', ')}`;
  }
}
