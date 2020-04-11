import React from "react";
import Header from "./Header";
import QuoteForm from "./QuoteForm";
import Quotes from "./Quotes";

import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header tittle="Administrador de citas veterinarias." />
          <div className="row">
            <div className="col-md-6">
              <QuoteForm />
            </div>
            <div className="col-md-6">
              <Quotes />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
