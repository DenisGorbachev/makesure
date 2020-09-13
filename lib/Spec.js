export class Spec {
  validate(product) {
    return this.getSchema().validate(product);
  }

  getSchema() {
    throw new Error('Implement me');
  }
}
