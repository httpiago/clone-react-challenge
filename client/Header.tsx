import * as React from '../src/index'

type Props = {
  repeatExclamation?: number,
  children?: JSX.Element,
}

export default function Header({ repeatExclamation = 3, children }: Props) {
  return (
    <h1 style="font-size: 64px;">
      {children}
      {'!'.repeat(repeatExclamation)}
    </h1>
  )
}
