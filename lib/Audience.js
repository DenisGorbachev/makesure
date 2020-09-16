import Joi from 'joi';
import { Product } from './Product.js';

export class Audience extends Product {
  getSchema() {
    return Joi.object({
      name: Joi.string().required(),
      notes: Joi.array().items(Joi.string()).required(),
    });
  }

}
