export class Spec {
  constructor(product) {
    this.product = product;
    this.validate();
  }

  validate() {
    return this.getSchema().validate(this.product);
  }

  getSchema() {
    throw new Error('Implement me');
  }
}
