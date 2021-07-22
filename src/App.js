import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUsers from "./components/list/Listusers";
import store from "./redux/store";
import { Provider } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={ListUsers} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
export default App;