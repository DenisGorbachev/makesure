import Joi from 'joi';
import { Spec } from './Spec';

export class OnelinerProductDescription extends Spec {
  getSchema() {
    return Joi.object({
      name: Joi.string().required(),
      audiences: Joi.array().items(Joi.string()).required(),
      benefits: Joi.array().items(Joi.string()).required(),
    });
  }

  create(desc) {
    return `${desc.name} is a product for ${desc.audiences.join(' and ')} that provides ${desc.benefits.join(', ')}`;
  }
}
