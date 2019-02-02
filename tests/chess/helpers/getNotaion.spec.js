import { getNotation } from '~/chess/libs'

// prettier-ignore
const notations = [
  'bRa8', 'bNb8', 'bBc8', 'bQd8', 'bKe8', 'bBf8', 'bNg8', 'bRh8',
  'bPa7', 'bPb7', 'bPc7', 'bPd7', 'bPe7', 'bPf7', 'bPg7', 'bPh7',
  'wPa3', 'wPb2', 'wPc2', 'wPd2', 'wPe2', 'wPf2', 'wPg2', 'wPh2',
  'wRa1', 'wNb1', 'wBc1', 'wQd1', 'wKe1', 'wBf1', 'wNg1', 'wRh1'
]

describe('#getNotation', () => {
  it('get notation that includes token', () => {
    expect(getNotation(notations, 'b7')).toEqual('bPb7')
    expect(getNotation(notations)('c2')).toEqual('wPc2')
    expect(getNotation(notations, 'wK')).toEqual('wKe1')
    expect(getNotation(notations)('bR')).toEqual('bRa8')
  })
})
