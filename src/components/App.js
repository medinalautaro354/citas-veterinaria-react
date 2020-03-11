import React from "react";
import Header from "./Header";
import QuoteForm from "./QuoteForm";
import Quotes from "./Quotes";

class App extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount(){
    let quotes = localStorage.getItem('quotes');
    if(quotes){
      quotes = JSON.parse(quotes);
      this.setState({
        quotes
      })
    }
    
  }

  componentDidUpdate(){
    localStorage.setItem(
      'quotes',
      JSON.stringify(this.state.quotes)
    )
  }
  createQuote = quote => {
    const quotes = [...this.state.quotes, quote];

    this.setState({
      quotes
    });
  };

  deleteQuote = id => {
    const currentQuotes = [...this.state.quotes];

    const quotes = currentQuotes.filter(quote => quote.id !== id);

    this.setState({
      quotes
    });
  };

  render() {
    return (
      <div className="container">
        <Header tittle="Administrador de citas veterinarias." />
        <div className="row">
          <div className="col-md-6">
            <QuoteForm createQuote={this.createQuote} />
          </div>
          <div className="col-md-6">
            <Quotes quotes={this.state.quotes} deleteQuote={this.deleteQuote} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
