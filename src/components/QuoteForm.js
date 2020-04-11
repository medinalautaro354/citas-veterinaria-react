import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {addQuote} from '../actions/quotesActions';
import {showError} from '../actions/errorActions';

class QuoteForm extends Component {

  componentDidMount(){
    this.props.showError(false);
  }
  petNameRef = React.createRef();
  ownerNameRef = React.createRef();
  dateRef = React.createRef();
  hourRef = React.createRef();
  symptomsRef = React.createRef();

  createNewQuote = e => {
    e.preventDefault();

    const quote = {
      id: uuid(),
      petName: this.petNameRef.current.value,
      ownerName: this.ownerNameRef.current.value,
      date: this.dateRef.current.value,
      hour: this.hourRef.current.value,
      symptoms: this.symptomsRef.current.value
    };

    if (
      quote.petName === "" ||
      quote.ownerName === "" ||
      quote.date === "" ||
      quote.hour === "" ||
      quote.symptoms === ""
    ) {
      this.props.showError(true);
    } else {
      this.props.showError(false);

      this.props.addQuote(quote);
    }

    e.currentTarget.reset();
  };
  render() {
    const existError = this.props.error;

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agregar citas.</h2>

          <form onSubmit={this.createNewQuote}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.petNameRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                  ref={this.ownerNameRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  type="date"
                  className="form-control"
                  ref={this.dateRef}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  ref={this.hourRef}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  ref={this.symptomsRef}
                ></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
          {existError ? (
            <div className="alert alert-danger text-center">
              {" "}
              Todos los campos son obligatorios
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

QuoteForm.propTypes ={
  addQuote: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  quotes:state.quotes.quotes,
  error: state.error.error

})
export default connect(mapStateToProps, {addQuote, showError})(QuoteForm);
