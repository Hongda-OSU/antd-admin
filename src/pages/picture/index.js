import React, { PureComponent } from 'react'
import { connect } from 'umi'

@connect(({ picture, loading  }) => ({ picture, loading }))
class Picture extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <h2>Hello world</h2>
    )
  }
}

export default Picture
