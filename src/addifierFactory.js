import Addifier from './addifier'

export default function createAddifier(a, b) {
  const addifier = new Addifier(a, b)
  return addifier
}
