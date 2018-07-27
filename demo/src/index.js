import React from 'react'
import { render } from 'react-dom'
import * as demo from './demo'
import Demo from './components/Demo'

const App = () =>
  Object.entries(demo).map(([key, value]) => (
    <Demo name={key} examples={value} key={key} />
  ))

render(<App />, document.querySelector('#demo'))
