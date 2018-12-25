import React, { Component } from "react";
import _ from "lodash";
import { is, Map } from "immutable";

class App extends Component {
  state = {
    counter: Map({ number: 0 })
  };
  handleClick = () => {
    let amount = this.amount.value ? Number(this.amount.value) : 0;
    this.setState = {
      counter: this.state.counter.update("number", val => {
        return val + amount;
      })
    };
  };
  shouldComponentUpdate(nextProps = {}, nextState = {}) {
    nextState = nextState == null ? {} : nextState;
    const thisProps = this.props || {},
      thisState = this.state || {};
    nextState = this.state || {};
    if (
      Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length
    ) {
      return true;
    }
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true;
      }
    }
    for (const key in nextState) {
      if (
        thisState[key] !== nextState[key] &&
        !is(thisState[key], nextState[key])
      ) {
        return true;
      }
    }
    return false;
  }
  render() {
    return (
      <div>
        <p>{this.state.counter.get("number")}</p>
        <input ref={input => (this.amount = input)} />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default App;
