import * as React from "react"
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import Component from "./component";
import Config from "./config";
const history = createBrowserHistory();
import Header from '../components/header/header'




class Routers extends React.Component {
  render(){
    return (
      <Router history={history}>
        <Route render={(props) => {
          return (
            <div className="app">
              <Header {...props} />
              <div>
                <Switch>
                  {
                    Config.map(item => (
                      <Route key={item.path}
                        path={item.path}
                        exact={!item.exact}
                        component={() => (
                          <Component component={item.component} routeProps={props} />
                        )} />
                    ))
                  }
                  <Redirect to={{ pathname: "/" }} />
                </Switch>
              </div>
            </div> 
          )}
        }/>
      </Router>
    )
  }
}

export default Routers;
