import React from "react";
import { connect } from "react-redux";
class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <h3>{this.props.data}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(mapStateToProps)(TestComponent);
