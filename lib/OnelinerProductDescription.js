import Joi from 'joi';
import { Spec } from './Spec.js';

export class OnelinerProductDescription extends Spec {
  getSchema() {
    return Joi.object({
      name: Joi.string().required(),
      audiences: Joi.array().items(Joi.string()).required(),
      benefits: Joi.array().items(Joi.string()).required(),
    });
  }

  create() {
    const { name, audiences, benefits } = this.product;
    return `${name} is a product for ${audiences.join(' and ')} that ${benefits.join(', ')}`;
  }
}
