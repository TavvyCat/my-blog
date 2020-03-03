import React, { Component } from 'react';
import Axios from '../../Axios';
import './QuoteOfTheWeek.css';
import Aux from '../../Components/HOC/AuxComp';

class QuoteOfTheWeek extends Component {
  constructor () {
    super();
    this.getData();
  }

  state = {
    quotes: {
      currentQuote: "",
      previousQuotes: []
    }
  }

  getData () {
    Axios.get('/quotes.json')
      .then(response => {
        console.log(response);
        const currentQuote = response.data.currentQuote.quote;
        const previousQuotes = [];
        for (let key in response.data.previousQuotes) {
          previousQuotes.push({
            ...response.data.previousQuotes[key],
            id: key
          });
        }
        this.setState({
          quotes: {
            currentQuote: currentQuote,
            previousQuotes: previousQuotes
          }
        });
        console.log(this.state)
      })
      .catch(error => console.log(error));
  }


  render() {
    console.log(this.state);

    return (
      <Aux>
        <h1 >Quote of the Week</h1>
        <div className="FullQuote">
          <p>&ldquo;  {this.state.quotes.currentQuote.quote}  &rdquo;</p>
          <h1>- {this.state.quotes.currentQuote.person}</h1>
        </div>
        <h2 >Previous Quotes</h2>
        <div className="PreviousQuotes">
          {this.state.quotes.previousQuotes.map(quote => (
            <div className="PreviousQuote" key={quote.id}>
              <p>&ldquo;  {quote.quote}  &rdquo;</p>
              <h1>- {quote.person}</h1>
            </div>
          ))}
        </div>
      </Aux>
    )
  }
}

export default QuoteOfTheWeek;