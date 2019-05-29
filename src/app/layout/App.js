import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
class App extends React.Component {
  render = () => {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  };
}

export default App;
