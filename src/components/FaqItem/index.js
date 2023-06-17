// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {showAns: false}

  onClickBtn = () => {
    const {showAns} = this.state

    this.setState({showAns: !showAns})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {showAns} = this.state

    const liclass = showAns ? 'li_ans' : 'li_qn'

    const btnurl = showAns
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const btnalt = showAns ? 'minus' : 'plus'

    return (
      <li className={liclass}>
        <diV className="c">
          <h1>{questionText}</h1>

          <button onClick={this.onClickBtn} className="btn" type="button">
            <img src={btnurl} alt={btnalt} />
          </button>
        </diV>
        {showAns && (
          <div className="ans">
            <hr className="hrr"/>
            <p className="anscolor">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
