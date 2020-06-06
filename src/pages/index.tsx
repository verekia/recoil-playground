import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'

import { counter1Atom, counter2Atom, sumSelector } from '../atoms'

const IndexPage = () => {
  const [counter1, setCounter1] = useRecoilState(counter1Atom)
  const [counter2, setCounter2] = useRecoilState(counter2Atom)
  const sum = useRecoilValue(sumSelector);

  return (
    <div>
      <h1>Hello Recoil</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Counter 1: {counter1}</button>
      <br />
      <button onClick={() => setCounter2(counter2 + 1)}>Counter 2: {counter2}</button>
      <br />
      Sum: {sum}
    </div>
  )
}

export default IndexPage
