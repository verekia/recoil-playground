import { atom, selector } from 'recoil'

export const counter1Atom = atom({ key: 'counter1', default: 0 })
export const counter2Atom = atom({ key: 'counter2', default: 0 })

export const sumSelector = selector({
  key: 'sum',
  get: ({ get }) => get(counter1Atom) + get(counter2Atom),
})
