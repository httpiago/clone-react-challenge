import * as React from '../src/index'

let state = {
  count: 0
}
/*
setInterval(() => {
  state.count++;
  React.forceUpdate()
}, 1000)
*/
export default function Timer(props) {
  return (
    <div>
      Timer: {state.count} 
    </div>
  )
}