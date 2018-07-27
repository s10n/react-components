import { Component } from 'react'
import { func } from 'prop-types'

class Hover extends Component {
  static propTypes = { children: func.isRequired }

  state = { hover: false }

  handleMouseOver = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    return this.props.children({
      hover: this.state.hover,
      getAttrs: attr => ({
        ...attr,
        onMouseOver: this.handleMouseOver,
        onMouseLeave: this.handleMouseLeave
      })
    })
  }
}

export default Hover
