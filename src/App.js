import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileContents from "./Components/ProfileContents/ProfileContents";
import "./App.css";

function App() {
  return (
    <Container className="app">
      <Row className="center justify-content-md-center no-gutters">
        <Router>
          <Profile />
          <Switch>
            <Route exact path="/" component={ProfileContents} />
            <Route exact path="/projects" component={ProfileContents} />
            <Route exact path="/resume" component={ProfileContents} />
            <Route exact path="/blog" component={ProfileContents} />
          </Switch>
        </Router>
      </Row>
    </Container>
  );
}

export default App;
