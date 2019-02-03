import { transformFile } from '~/chess/helpers'

describe('#transformFile', () => {
  it('transform file as number', () => {
    expect(transformFile('a')).toEqual(1)
    expect(transformFile('d')).toEqual(4)
  })
})
