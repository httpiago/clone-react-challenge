import * as React from '../src/index'

type Props = {
  number: number,
}

export default function Counter({ number }: Props) {
  return (
    <div>
      Counter: {number}
    </div>
  )
}
