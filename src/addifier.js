export default class Addifier {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  exec() {
    const addificationResult = this.a + this.b

    return addificationResult
  }
}
