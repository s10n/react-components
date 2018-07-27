import React from 'react'
import { string, element } from 'prop-types'

const propTypes = {
  name: string.isRequired,
  component: element.isRequired,
  code: string.isRequired
}

const Example = ({ name, code, component }) => (
  <article>
    <section style={style.component}>{component}</section>
    <pre style={style.code}>{getCode({ name, code })}</pre>
  </article>
)

Example.propTypes = propTypes

const color = 'hsl(0, 0%, 97%)'
const padding = '1.5rem'
const style = {
  component: { border: `.2rem solid ${color}`, padding },
  code: { backgroundColor: color, padding }
}

const PKG = '@simcheolhwan/react-components'
const getCode = ({ name, code }) =>
  `import { ${name} } from '${PKG}'\n\n${code}`

export default Example
