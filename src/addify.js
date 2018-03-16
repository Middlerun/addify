import addifierFactory from './addifierFactory'
import { face } from './helpers'

export default function addify(a, b) {
  const addifier = addifierFactory(a, b)

  const result = addifier.exec()

  return result
}

export { face }
