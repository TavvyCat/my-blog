import React, { Component } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import Axios from '../../Axios';
import './QuoteOfTheWeek.css';
import Aux from '../../HOC/AuxComp/AuxComp';
import * as actions from '../../store/actions/index';

class QuoteOfTheWeek extends Component {
  componentDidMount() {
    this.props.onFetchQuotes();
  }

  render() {
    let quotes = this.props.currentQuote && this.props.previousQuotes ? (
      <Aux>
          <h1 >Quote of the Week</h1>
          <div className="FullQuote">
              <p>&ldquo;  {this.props.currentQuote.quote.quote}  &rdquo;</p>
              <h1>- {this.props.currentQuote.quote.person}</h1>
          </div>
          <h2 >Previous Quotes</h2>
          <div className="PreviousQuotes">
              {this.props.previousQuotes.map(quote => (
                  <div className="PreviousQuote" key={quote.id}>
                      <p>&ldquo;  {quote.quote}  &rdquo;</p>
                      <h1>- {quote.person}</h1>
                  </div>
            ))}
          </div>
      </Aux>
    ) : null;
    return quotes;
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuote: state.currentQuote,
    previousQuotes: state.previousQuotes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchQuotes: () => dispatch(actions.fetchQuoteData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(QuoteOfTheWeek, Axios));