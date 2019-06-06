import * as React from "react";
// import {RouteProps} from "@public/interface";


class AboutBundle extends React.Component {

  componentWillMount(){

  }

  go(){
     this.props.history.push({
       pathname: '/',
     })
  }

  render() {
    return (
      <h1 id="about">
        <p>About</p>
        <p onClick={() => {this.go()}}>go Home</p>
      </h1>
    );
  }
}

export default AboutBundle;
