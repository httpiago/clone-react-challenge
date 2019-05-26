import * as React from '../src/index'

type Props = {
  showExclamation?: boolean,
  repeat?: number,
  children?: JSX.Element,
}

export default function Header({ showExclamation = false, repeat = 3, children }: Props) {
  return (
    <h1 style="font-size: 64px;">
      {children}
      {showExclamation && '!'.repeat(repeat)}
    </h1>
  )
}