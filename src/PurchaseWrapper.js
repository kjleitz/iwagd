import React, { Component } from 'react';

class PurchaseWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        rollVinyl: true
      })
    }, 500)
  }

  render() {
    return (
      <div>
        <div className='vinyl-wrapper'>
          <img src={this.props.albumCover} alt='album-cover' className={`ib vinyl-roll album-cover ${this.state.rollVinyl ? 'shift' : ''}`} />
          <img src={this.props.vinyl} alt='vinyl' className={`ib vinyl-roll vinyl ${this.state.rollVinyl ? 'shift' : ''}`} />
        </div>
      </div>
    )
  }
}

export default PurchaseWrapper
