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
      author: "",
      color: Math.floor(Math.random() * (10) + 1),
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((state) => ({
            quote: result.content,
            author: result.author,
            color:
              state.color == Math.floor(Math.random() * 10 + 1)
                ? ++state.color
                : Math.floor(Math.random() * 10 + 1),
          }));
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
      <div
        class={`flex-container d-flex flex-column justify-content-center align-items-center color-scheme-bg-${this.state.color}`}
      >
        <div
          id="quote-box"
          class={`color-scheme-text-${this.state.color} p-5 mb-2`}
        >
          <Quote quote={this.state.quote} />
          <Autor author={this.state.author} />
          <div class="buttons d-flex justify-content-between align-items-center pt-2">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}&hashtags=quotes`}
              class={`color-scheme-bg-${this.state.color}`}
            >
              <i class="fab fa-twitter"></i>
            </a>
            <button
              onClick={this.newQuote}
              type="button"
              id="new-quote"
              class={`btn btn-primary color-scheme-bg-${this.state.color}`}
            >
              New quote
            </button>
          </div>
        </div>
        <p class="d-block" id="by">
          By Danylo Sokol
        </p>
      </div>
    );
  }
}

let container = document.querySelector('.main-container');
ReactDOM.render(<QuoteBox/>, container);