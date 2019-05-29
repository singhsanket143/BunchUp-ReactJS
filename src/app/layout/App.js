import React from "react";
import { Button } from "semantic-ui-react";
class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>BunchUp</h1>
        <button className="ui icon button">
          <i className="smile icon" />
          CSS Button
        </button>
        <Button icon="smile" content="React Button" labelPosition="right" />
      </div>
    );
  };
}

export default App;
