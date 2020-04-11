import React, { Component } from "react";
import Quote from "./Quote";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getQuotes} from '../actions/quotesActions';

import store from '../store';
store.subscribe(() =>{
  localStorage.setItem('quotes', JSON.stringify(store.getState()));
})

class Quotes extends Component {
  componentDidMount(){
    this.props.getQuotes();
  }
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
}
const mapStateToProps = state =>({
  quotes: state.quotes.quotes
})
export default connect(mapStateToProps, {getQuotes})(Quotes);
