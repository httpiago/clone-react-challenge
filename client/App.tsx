import * as React from '../src/index'

import Header from './Header'
import Todos from './Todos';
import Timer from './Timer';

React.render(
  <main className="wrapper">
    <Header showExclamation>Hello React</Header>
    <hr/>
    <React.Fragment>
      <Timer />
      <hr/>
      <Todos addLabel="Add new todo" />
    </React.Fragment>
  </main>,
  document.getElementById('root')
)