import React, { Component } from "react";
// import "./_app.scss";

// static pages
import Home from "../components/HomeComponent";
import Hello from "../components/HelloComponent";
import Books from "../components/BooksComponent";
import Roster from "../components/Roster/RosterComponent";

// admin
import Login from "./Login";
import Admin from "./Admin";
import PrivateRoute from "./PrivateRoute";
import fakeAuth from "./fakeAuth";

// pages
import Header from "../components/Header";
import MainApp from "./MainApp";
import PostApp from "./PostApp";
import ColorApp from "./ColorApp";
import FeedApp from "./FeedApp";
import TodoApp from "./TodoApp";
import ContactsApp from "./ContactsApp";
import StyleBoxApp from "./StyleBoxApp";
import AxiosPostApp from "./AxiosPostApp";
import Calculator from "./Calculator";
import FormApp from "./FormApp";
import SolutionTab from "../components/Tabs/SolutionTab";
import CommentApp from "../components/Comments/CommentApp";
import AsyncHooks from "../components/AsyncHooks";
import ScrollContent from "../components/ScrollContent";

// import route Components here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "../hoc/layout/ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          <Header />
          <br />
          <ScrollToTop>
            <div className="page-wrapper">
              <div className="container">
                <div className="page-header">
                  <h3>Page Header</h3>
                </div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/hello" component={Hello} />
                  <Route
                    path="/hello/morning"
                    render={() => {
                      return <h1>Goodmorning</h1>;
                    }}
                  />
                  <Route path="/hocperson" component={MainApp} />
                  <Route path="/hoccolor" component={ColorApp} />
                  <Route path="/hocpost" component={PostApp} />
                  <Route path="/hocaxios" component={AxiosPostApp} />
                  <Route path="/hocfeed" component={FeedApp} />
                  <Route path="/hocbox" component={StyleBoxApp} />
                  <Route path="/books" component={Books} />
                  <Route path="/roster" component={Roster} />
                  <Route path="/todo" component={TodoApp} />
                  <Route path="/contacts" component={ContactsApp} />
                  <Route path="/form" component={FormApp} />
                  <Route path="/cal" component={Calculator} />
                  <Route path="/tabs" component={SolutionTab} />
                  <Route path="/comment" component={CommentApp} />
                  <Route path="/login" component={Login} />
                  <Route path="/asynchooks" component={AsyncHooks} />
                  <Route path="/scrollcontent" component={ScrollContent} />
                  <PrivateRoute
                    authed={fakeAuth.isAuthenticated}
                    path="/admin"
                    component={Admin}
                  />
                </Switch>
              </div>
            </div>
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

export default App;
