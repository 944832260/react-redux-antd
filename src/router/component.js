import * as React from 'react'
// import {RouteProps} from "@public/interface"
import Loadable from '@loadable/component';
import Loading from "../public/loading/loading"

class GetComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    this.get();
  }

  async get(){
    let { component} = this.props;

    try {
      const Component = Loadable(component);
      this.setState({
        Component
      });
    } catch (e) {
      console.error(e);
    }
  }

  render(){
    let {Component} = this.state;
    return (
        <Component {...this.props.routeProps}/>
    )
  }
}

export default GetComponent;
