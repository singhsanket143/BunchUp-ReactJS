import React from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>BunchUp</h1>
        <EventDashboard />
      </div>
    );
  };
}

export default App;
