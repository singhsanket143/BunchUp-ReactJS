import React from "react";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";
import { connect } from "react-redux";
class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <h3>{this.props.data}</h3>
        <Button
          onClick={this.props.incrementCounter}
          color="green"
          content="inc"
        />
        <Button
          onClick={this.props.decrementCounter}
          color="red"
          content="dec"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(
  mapStateToProps,
  { incrementCounter, decrementCounter }
)(TestComponent);
