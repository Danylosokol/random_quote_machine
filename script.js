'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quote = function (_React$Component) {
  _inherits(Quote, _React$Component);

  function Quote(props) {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).call(this, props));
  }

  _createClass(Quote, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        { id: "text", "class": "text-center" },
        React.createElement("i", { "class": "fa-solid fa-quote-left d-inline" }),
        React.createElement(
          "span",
          { "class": "ps-1" },
          this.props.quote
        )
      );
    }
  }]);

  return Quote;
}(React.Component);

var Autor = function (_React$Component2) {
  _inherits(Autor, _React$Component2);

  function Autor(props) {
    _classCallCheck(this, Autor);

    return _possibleConstructorReturn(this, (Autor.__proto__ || Object.getPrototypeOf(Autor)).call(this, props));
  }

  _createClass(Autor, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        { id: "author" },
        "- ",
        React.createElement(
          "span",
          null,
          this.props.author
        )
      );
    }
  }]);

  return Autor;
}(React.Component);

var QuoteBox = function (_React$Component3) {
  _inherits(QuoteBox, _React$Component3);

  function QuoteBox(props) {
    _classCallCheck(this, QuoteBox);

    var _this3 = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this, props));

    _this3.state = {
      quote: "",
      author: ""
    };
    _this3.newQuote = _this3.newQuote.bind(_this3);
    return _this3;
  }

  _createClass(QuoteBox, [{
    key: "newQuote",
    value: function newQuote() {
      var _this4 = this;

      fetch("https://api.quotable.io/random").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this4.setState({
          quote: result.content,
          author: result.author
        });
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.quote === "" || this.state.author === "") {
        this.newQuote();
      }
      return React.createElement(
        "div",
        null,
        React.createElement(Quote, { quote: this.state.quote }),
        React.createElement(Autor, { author: this.state.author }),
        React.createElement(
          "div",
          { "class": "buttons d-flex justify-content-between align-items-center pt-2" },
          React.createElement(
            "a",
            { id: "tweet-quote" },
            React.createElement("i", { "class": "fab fa-twitter" })
          ),
          React.createElement(
            "button",
            { onClick: this.newQuote, type: "button", id: "new-quote", "class": "btn btn-primary" },
            "New quote"
          )
        )
      );
    }
  }]);

  return QuoteBox;
}(React.Component);

var quoteBox = document.querySelector('#quote-box');
ReactDOM.render(React.createElement(QuoteBox, null), quoteBox);