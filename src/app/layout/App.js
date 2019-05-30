import React from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
import HomePage from "../../features/home/HomePage";
import EventDetailed from "../../features/event/EventDetailed/EventDetailed";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailed";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashBoard";

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <Route path="/" exact component={HomePage} />
          <Route path="/events" exact component={EventDashboard} />
          <Route path="/events/:id" exact component={EventDetailed} />
          <Route path="/people" exact component={PeopleDashboard} />
          <Route path="/profile/:id" exact component={UserDetailed} />
          <Route path="/settings" exact component={SettingsDashboard} />
          <Route path="/createEvent" exact component={EventForm} />
        </Container>
      </div>
    );
  };
}

export default App;
