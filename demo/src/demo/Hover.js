import React from 'react'
import { Hover } from '../../../src'

export default [
  {
    name: 'Hover',
    component: (
      <Hover>
        {({ hover, getAttrs }) => (
          <button
            {...getAttrs({ style: { backgroundColor: hover && 'silver' } })}
          >
            클릭
          </button>
        )}
      </Hover>
    ),
    code: `<Hover>
  {({ hover, getAttrs }) => (
    <button {...getAttrs({ style: { backgroundColor: hover && 'silver' } })}>
      클릭
    </button>
  )}
</Hover>`
  }
]
