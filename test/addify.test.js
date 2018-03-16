import addify from '../src/addify'

describe('addify', () => {
  it('adds two numbers', () => {
    // setup
    const a = 2
    const b = 2

    // execution
    const result = addify(a, b)

    // assertion
    expect(result).toBe(4)
  })
})
