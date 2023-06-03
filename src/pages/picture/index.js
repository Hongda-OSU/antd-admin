import React, { PureComponent } from 'react'
import { connect } from 'umi'

@connect(({ picture }) => ({ picture }))
class Picture extends PureComponent {
  render() {
    return (
      <h2>Hello World</h2>
    )
  }
}

export default Picture
