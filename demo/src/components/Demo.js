import React from 'react'
import { string, arrayOf, object } from 'prop-types'
import Example from './Example'

const propTypes = {
  name: string.isRequired,
  examples: arrayOf(object).isRequired
}

const Demo = ({ name, examples }) => (
  <article>
    <h1>{name}</h1>
    {examples.map(example => <Example {...example} key={example.name} />)}
  </article>
)

Demo.propTypes = propTypes

export default Demo
