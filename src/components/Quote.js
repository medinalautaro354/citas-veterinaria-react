import React, { Component } from "react";
import PropTypes from 'prop-types';

class Quote extends Component {
  deleteQuote = () => {
    this.props.deleteQuote(this.props.quote.id);
  };

  render() {
    const { petName, ownerName, hour, date, symptoms } = this.props.quote;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0">{petName}</h3>
          <p className="card-text">
            <span>Nombre del dueño: </span>
            {ownerName}
          </p>
          <p className="card-text">
            <span>Fecha: </span>
            {date}
          </p>
          <p className="card-text">
            <span>Hora: </span>
            {hour}
          </p>
          <p className="card-text">
            <span>Sintomas: </span>
          </p>
          <p className="card-text">{symptoms}</p>
          <button className="btn btn-danger" onClick={this.deleteQuote}>
            Borrar &times;
          </button>
        </div>
      </div>
    );
  }
}

Quote.propTypes ={
  quote: PropTypes.shape({
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    symptoms: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  deleteQuote: PropTypes.func.isRequired
}
export default Quote;
