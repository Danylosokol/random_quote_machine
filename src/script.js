'use strict';

class Quote extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <p id="text" class="text-center">
        <i class="fa-solid fa-quote-left d-inline"></i>
        <span class="ps-1">
          {this.props.quote}
        </span>
      </p>
    );
  }
}

class Autor extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <p id="author">
        - <span>{this.props.author}</span>
      </p>
    );
  }
}

class QuoteBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            quote: result.content,
            author: result.author
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render(){
    if(this.state.quote === "" || this.state.author === ""){
      this.newQuote();
    }
    return (
      <div>
        <Quote quote={this.state.quote}/>
        <Autor author={this.state.author}/>
        <div class="buttons d-flex justify-content-between align-items-center pt-2">
          <a id="tweet-quote">
            <i class="fab fa-twitter"></i>
          </a>
          <button onClick={this.newQuote} type="button" id="new-quote" class="btn btn-primary">
            New quote
          </button>
        </div>
      </div>
    );
  }
}

let quoteBox = document.querySelector('#quote-box');
ReactDOM.render(<QuoteBox/>, quoteBox);