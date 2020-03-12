import React, { Component } from "react";
import Quote from "./Quote";
import PropTypes from 'prop-types';

class Quotes extends Component {
  state = {};
  render() {
    const quotes = this.props.quotes;
    const menssage =
      Object.keys(quotes).length === 0 ? "No hay citas." : "Citas";
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className=" card-title text-center">{menssage}</h2>

          <div className="quotes">
            {Object.keys(this.props.quotes).map(index => (
              <Quote
                key={index}
                quote={this.props.quotes[index]}
                deleteQuote={this.props.deleteQuote}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Quotes.propTypes ={
  quotes: PropTypes.array.isRequired,
  deleteQuote: PropTypes.func.isRequired
}
export default Quotes;
