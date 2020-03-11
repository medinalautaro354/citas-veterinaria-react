import React, { Component } from "react";
import uuid from "uuid";

class QuoteForm extends Component {
  petNameRef = React.createRef();
  ownerNameRef = React.createRef();
  dateRef = React.createRef();
  hourRef = React.createRef();
  symptomsRef = React.createRef();

  state = {
    error: false
  };

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
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });

      this.props.createQuote(quote);
    }

    e.currentTarget.reset();
  };
  render() {
    const existError = this.state.error;

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

export default QuoteForm;
