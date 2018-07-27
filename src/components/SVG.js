import React from 'react'
import { number, string, object, node, oneOfType } from 'prop-types'

const propTypes = {
  color: string,
  size: oneOfType([number, string]),
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  viewBox: string,
  style: object,
  children: node.isRequired
}

const defaultProps = {
  color: '#000000',
  size: '1rem',
  width: undefined,
  height: undefined,
  viewBox: '0 0 24 24',
  style: {}
}

const SVG = ({ color: fill, size, width, height, children, ...rest }) => {
  const attrs = { fill, width: width || size, height: height || size, ...rest }
  return <svg {...attrs}>{children}</svg>
}

SVG.propTypes = propTypes
SVG.defaultProps = defaultProps

export default SVG
