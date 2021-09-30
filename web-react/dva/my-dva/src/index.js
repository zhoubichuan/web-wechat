import React from "react";
import dva, { connect } from "dva";

const app = dva();

app.model({
  namespace: "count",
  state: { nimber: 0 },
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    }
  }
});
// const App=connect((
//     state=>state.count
// )=>

<div>
  <h2>{this.props.number}</h2>
  <button onClick={() => this.props.dispatch({ type: "count/add" })}>+</button>
</div>;
app.router(() => <App />);
