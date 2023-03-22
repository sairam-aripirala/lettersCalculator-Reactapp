// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="button-container">
            <label className="label" htmlFor="inputText">
              Enter the phrase
            </label>
            <input
              type="text"
              id="inputText"
              className="input-text"
              placeholder="Enter the Phrase"
              onChange={this.onChangeInput}
            />
            <p className="button">No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
