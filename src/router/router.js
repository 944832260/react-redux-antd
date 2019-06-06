import * as React from "react"
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import Component from "./component";
import Config from "./config";
const history = createBrowserHistory();




class Routers extends React.Component {
  render(){
    return (
      <Router history={history}>
        <Route render={(props) =>
          <Switch>
            {
              Config.map(item => (
                <Route key={item.path}
                       path={item.path}
                       exact={!item.exact}
                       component={() => (
                         <Component component={item.component} routeProps={props}/>
                       )}/>
              ))
            }
            <Redirect to={{pathname: "/"}}/>
          </Switch>
        }/>
      </Router>
    )
  }
}

export default Routers;
