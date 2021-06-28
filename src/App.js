import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      convertedValue: "",
      shown: false,
      inputError: "",
    };

    this.hanldeOnChange = this.hanldeOnChange.bind(this);
    this.submitConvert = this.submitConvert.bind(this);
  }

  parsedValue() {
    return parseInt(this.state.value, 2).toString(10);
  }

  hanldeOnChange(e) {
    this.setState({ value: e.target.value });

    const result = e.target.value.split("").find((element) => element > 1);

    if (isNaN(e.target.value)) {
      this.setState({
        convertedValue: "",
        shown: false,
        inputError: "Please enter a Binary number.",
      });
    } else if (result !== undefined) {
      this.setState({
        convertedValue: "",
        shown: false,
        inputError:
          "You entered an invalid number. Binary numbers contain only one's and zero's.",
      });
    } else {
      this.setState({ inputError: "" });
    }
  }

  submitConvert(e) {
    if (this.state.value === "") {
      this.setState({
        inputError: "Please enter a number.",
        convertedValue: "",
      });
    } else {
      this.setState({
        convertedValue: this.parsedValue(),
        shown: true,
        inputError: "",
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Bin2Dec App</h1>
        <br></br>
        <form onSubmit={this.submitConvert}>
          <label>Enter A Binary number: </label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.hanldeOnChange}
          />
          <br></br>
          <br></br>
          <button
            type="submit"
            disabled={this.state.inputError !== "" ? true : false}
          >
            Convert
          </button>
          <br></br>
          <p>{this.state.inputError}</p>
          {this.state.shown ? (
            <div>His decimal number is {this.state.convertedValue}</div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default App;
